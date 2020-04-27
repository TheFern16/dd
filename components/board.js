	// even is white
	// odd is black
function createMatrix(size, count = 0) {
	var result = [];
	for (var i = 0; i < size; i ++) {
		let temp = [];
		for (var j = 0; j < size; j++) {
			if (j % 2 !== 0) temp.push(0)
			if (j % 2 === 0) temp.push(1)
		}
		result.push(temp);
	}
	return (
		<h1>{result}</h1>
	)
}

export default ({ size }) => (
	<div>
		<h1>{createMatrix(size)}</h1>
		<style jsx> {`
			h1 {
				color: black;
			}
		`}</style>
	</div>
)
