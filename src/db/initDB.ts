export const initDB = () => {
	return new Promise((resolve) => {
		const request = window.indexedDB.open("synth", 1);

		request.onupgradeneeded = () => {
			const db = request.result;
			db.createObjectStore("synth", { keyPath: "id" });
		};

		request.onsuccess = () => {
			resolve(request.result);
		};

		request.onerror = () => {
			console.error("Error", request.error);
			resolve(false);
		};
	});
};
