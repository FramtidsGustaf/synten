import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	console.log(mode);
	return {
		base: mode === "development" ? "" : "/synten/",
		plugins: [
			react({
				babel: { plugins: [["module:@preact/signals-react-transform"]] },
			}),
		],
	};
});
