import { useState, useEffect } from "react";
import RandomiseArr from "./RandomiseArr";
import FetchCards from "./FetchCards";
import { DisplayCards } from "./DisplayCards";

function GameLogic() {
	const [cards, setCards] = useState([]);
	(function ListCards() {
		useEffect(() => {
			FetchCards().then((arr) => {
				setCards([...arr]);
			});
		}, []);
		return cards;
	})();

	function onClickRandom() {
		let newArr = RandomiseArr(cards);
		setCards([...newArr]);
	}

	return <DisplayCards cards={cards} onClick={onClickRandom} />;
}

export default GameLogic;
