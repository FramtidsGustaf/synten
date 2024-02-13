import { useEffect, useRef } from "react";

import { synth } from "../../store/Synth.store";
import { useTheme } from "../../hooks/useTheme";

const Visualizer = () => {
	const theme = useTheme();
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const renderFrame = () => {
		if (!synth.value || !canvasRef.current) return;
		const ctx = canvasRef.current!.getContext("2d");
		if (!ctx) return;
		synth.value.analyser.fftSize = 2048;

		const WIDTH = canvasRef.current.width;
		const HEIGHT = canvasRef.current.height;
		const bufferLength = synth.value.analyser.frequencyBinCount;

		requestAnimationFrame(renderFrame);

		const dataArray = new Uint8Array(bufferLength);
		synth.value.analyser.getByteTimeDomainData(dataArray);

		ctx.fillStyle = theme.bgColor;
		ctx.fillRect(0, 0, WIDTH, HEIGHT);

		ctx.lineWidth = 7;
		ctx.strokeStyle = theme.dark;
		ctx.beginPath();

		const sliceWidth = WIDTH / bufferLength + 0.02;
		let x = 0;

		for (let i = 0; i < bufferLength; i++) {
			const v = dataArray[i] / 128.0;
			const y = (v * HEIGHT) / 2;

			if (i === 0) {
				ctx.moveTo(x, y);
			} else {
				ctx.lineTo(x, y);
			}

			x += sliceWidth;
		}

		ctx.lineTo(canvasRef.current.width, canvasRef.current.height / 2);
		ctx.stroke();
	};

	useEffect(() => {
		renderFrame();
	}, [synth.value]);

	return <canvas ref={canvasRef} style={{ width: "80px" }} />;
};

export default Visualizer;
