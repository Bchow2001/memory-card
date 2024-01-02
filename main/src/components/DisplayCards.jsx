const DisplayCards = ({ cards, onClick }) => {
	if (cards !== undefined) {
		return (
			<div>
				<ul onClick={onClick}>
					{cards.map((card) => {
						return (
							<li className="card" key={card.name}>
								<img src={card.src} alt="" />
								<br></br>
								<span>{card.name}</span>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
};

export { DisplayCards };
