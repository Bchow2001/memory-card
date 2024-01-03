async function FetchCards() {
	const characters = [
		{ name: "Gus Fring", src: "" },
		{ name: "Walter White", src: "" },
		{ name: "Hector Salamanca", src: "" },
		{ name: "Hank Schrader", src: "" },
		{ name: "Huell Babineaux", src: "" },
		{ name: "Saul Goodman", src: "" },
		{ name: "Jessie Pinkman", src: "" },
		{ name: "Mike Ehrmantraut", src: "" },
		{ name: "Skyler White", src: "" },
		{ name: "Kim Wexler", src: "" },
	];
	const url =
		"https://api.giphy.com/v1/gifs/search?api_key=g4P03xginRwZg4KVLYE0bmmzNiJJSNza&q=";
	const limit = "&limit=1";
	return Promise.all(
		characters.map((item) => {
			let replaced = item.name.replace(/\s/g, "+");
			return fetch(url + replaced + limit)
				.then((response) => response.json())
				.then((content) => {
					item.src = content.data[0].images.downsized.url;
					return item;
				});
		}),
	).then((data) => {
		const arr = [];
		data.forEach((item) => {
			arr.push(item);
		});
		return arr;
	});
}

export default FetchCards;
