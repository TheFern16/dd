import Row from './row';

function createMatrix(size, count = 0) {
	var result = [];
	for (var i = 0; i < size; i ++) {
		let temp = [];
		for (var j = 0; j < size; j++) {
			if (i % 2 === 0) {
				if (j % 2 !== 0) temp.push(0)
				if (j % 2 === 0) temp.push(1)
			} else {
				if (j % 2 === 0) temp.push(0)
				if (j % 2 !== 0) temp.push(1)
			}
		}
		result.push(temp);
	}
	return result;
}

export default function Board ({ size, setCurrentBoardPiece, pieceType }) {
	const matrix = [...createMatrix(size)];

	return (
		<div>
			<div>
				{matrix.map((row, key) => {
					return (
						<div className="rowContainer">
							<Row 
								row={row}  
								i={key} 
								arrayLength={matrix.length} 
								setCurrentBoardPiece={setCurrentBoardPiece}
								pieceType={pieceType}
							/>
						</div>
					)
				})}
			</div>
			<style jsx> {`
				h1 {
					color: black;
				}
				.rowContainer {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			`}
			</style>
		</div>
	)
};