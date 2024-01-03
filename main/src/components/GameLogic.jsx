import { useState, useEffect } from "react";
import RandomiseArr from "./RandomiseArr";
import FetchCards from "./FetchCards";
import { DisplayCards } from "./DisplayCards";

function GameLogic() {
	const [cards, setCards] = useState([]);
	const [guesses, setGuesses] = useState([]);
	(function ListCards() {
		useEffect(() => {
			FetchCards().then((arr) => {
				setCards([...arr]);
			});
		}, []);
	})();

	function checkLoss(guess) {
		if (guesses.includes(guess)) {
			alert("YOU LOSE");
		} else {
			let newGuess = guesses;
			newGuess.push(guess);
			setGuesses([...newGuess]);
		}
		if (guesses.length === 10) {
			alert("YOU WIN");
		}
	}

	function onClickRandom(e) {
		checkLoss(e.currentTarget.getAttribute("data-key"));
		console.log(guesses);
		let newArr = RandomiseArr(cards);
		setCards([...newArr]);
	}

	return (
		<DisplayCards
			cards={cards}
			score={guesses.length}
			onClick={onClickRandom}
		/>
	);
}

export default GameLogic;
