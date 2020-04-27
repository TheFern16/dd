function chooseStyle(number, key, arrLength) {
	if (key < ((arrLength / 2) / 2) && number === 1) {
		return 'box black red'
	}
	if (key >= arrLength - 2 && number === 1) {
		return 'box black red';
	}
	if (number === 1) return 'box black';
	if (number === 0) return 'box white';
};

function formatSquare(number) {
	if (number === 1) {
		return number
	} else {
		return '';
	}
}


export default ({ row, i, arrayLength }) => (
	<div className="boxContainer">{row.map(square => {
			return(
				<p className={chooseStyle(square, i, arrayLength)}>{formatSquare(square)}</p>
			)
		})}
		<style jsx> {`
			.box {
				width: 2em;
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
		`}
		</style>
	</div>
);