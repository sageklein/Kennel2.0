const remoteURL = "http://localhost:5002/animals";

export default {
	get(id) {
		console.log("works");
		return fetch(`${remoteURL}/${id}`).then((result) => result.json());
	},
	getAll() {
		return fetch(`${remoteURL}`).then((result) => result.json());
	},
	delete(id) {
		return fetch(`${remoteURL}/${id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		}).then((data) => data.json());
	},
	post(newData) {
		return fetch(`${remoteURL}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newData),
		}).then((data) => data.json());
	},
	getExpanded(otherList) {
		return fetch(
			`${remoteURL}?_expand=${otherList.toLowerCase()}`
		).then((result) => result.json());
	},
	put(id, newObj) {
		return fetch(`${remoteURL}/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newObj),
		}).then((data) => data.json());
	},
	getRandomId() {
		return fetch(`${remoteURL}`)
			.then((result) => result.json())
			.then((animals) => {
				const randomIndex = Math.floor(Math.random() * animals.length);
				const randomAnimal = animals[randomIndex];
				return randomAnimal.id;
			});
	},
};
