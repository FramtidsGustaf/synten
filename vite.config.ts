import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		base: "/synten/",
		plugins: [
			react({
				babel: { plugins: [["module:@preact/signals-react-transform"]] },
			}),
		],
		preview: {
			port: 3000,
			strictPort: true,
		},
		server: {
			port: 3000,
			strictPort: true,
			host: true,
			origin: "http://0.0.0.0:3000",
		},
	};
});
