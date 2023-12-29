import { useState, useEffect } from "react";

function DisplayCards() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
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
		Promise.all(
			characters.map((item) => {
				const url =
					"https://api.giphy.com/v1/gifs/search?api_key=g4P03xginRwZg4KVLYE0bmmzNiJJSNza&q=";

				const limit = "&limit=1";
				let replaced = item.name.replace(/\s/g, "+");
				return fetch(url + replaced + limit)
					.then((response) => response.json())
					.then((content) => {
						item.src = content.data[0].images.downsized.url;
						return item;
					});
			}),
		)
			.then((data) => {
				const arr = [];
				data.forEach((item) => {
					arr.push(
						<div className="card" key={item.name}>
							<img src={item.src} alt="" />
							<br></br>
							<span>{item.name}</span>
						</div>,
					);
				});
				return arr;
			})
			.then((arr) => {
				console.log(1);
				setCards([...arr]);
			});
	}, []);

	return cards;
}

export default DisplayCards;
