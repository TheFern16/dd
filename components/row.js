export default function Row ({ 
		row, i, arrayLength, 
		setCurrentBoardPiece, pieceType, pieceColor }) {
		
	function chooseStyle(number, key, arrLength, pieceColor) {
		if (key < ((arrLength / 2) / 2) && number === 1) {
			return pieceColor === 'default' ? 'box black red' : 'box black yellow';
		}
		if (key >= arrLength - 2 && number === 0) {
			return pieceColor === 'default' ? 'box white blackPiece' : 'box white purple';
		}
		if (number === 1) return 'box black';
		if (number === 0) return 'box white';
	};

	function formatSquare(number, key, arrLength, pieceType) {
		if (key >= arrLength - 2 && number === 0) {
			return pieceType === 'default' ? '0' : '@';
		}
		if (number === 1) {
			return pieceType === 'default' ? '0' : '@';
		} 
	};

	return (
		<div className="boxContainer">
			{
				row.map(square => {
					return(
						<p 
							className={chooseStyle(square, i, arrayLength, pieceColor)}>
								{formatSquare(square, i, arrayLength, pieceType)}
						</p>
					)
				})
			}
			<style jsx> {`
				p {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.box {
					width: 3em;
					height: 3em;
					border: 1em;
				}
				.black {
					background-color: black;
				}
				.boxContainer {
					width: 100%;
					display: flex;
					justify-content: center;
				}
				.white {
					background-color: white;
				}
				.red {
					color: red;
				}
				.blackPiece {
					color: black;
				}
				.purple {
					color: #6a0dad;
				}
				.yellow {
					color: yellow;
				}
			`}
			</style>
		</div>
	);
}