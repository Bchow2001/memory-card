let counter = 0;

const DisplayCards = ({ cards, score, onClick }) => {
	if (cards !== undefined) {
		console.log("counting re-renders", (counter += 1));
		return (
			<div>
				<ul>
					{cards.map((card) => {
						return (
							<li
								className="card"
								key={card.name}
								data-key={card.name}
								onClick={onClick}
							>
								<img src={card.src} alt="" />
								<br></br>
								<span>{card.name}</span>
							</li>
						);
					})}
				</ul>
				<div>{score}</div>
			</div>
		);
	}
};

export { DisplayCards };
