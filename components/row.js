function chooseStyle(number, key, arrLength) {
	// console.log(key);
	// var result = '';
	// if (key < ((arrLength / 2 ) / 2)) result += 'red ';
	// if (number === 1) result += 'black';
	// else result += 'white';
	// console.log(result);
	// return result;
	if (key < ((arrLength / 2) / 2) && number === 1) {
		return 'black red'
	}
	if (key >= arrLength - 2 && number === 1) {
		return 'black red';
	}
	if (number === 1) return 'black';
	if (number === 0) return 'white';
};


export default ({ row, i, arrayLength }) => (
	<div className="boxContainer">{row.map(square => {
			return(
				<p className={chooseStyle(square, i, arrayLength)}>{square}</p>
			)
		})}
		<style jsx> {`
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