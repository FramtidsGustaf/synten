import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	return {
		base: mode === "development" ? "" : "",
		plugins: [
			react({
				babel: { plugins: [["module:@preact/signals-react-transform"]] },
			}),
		],
	};
});
