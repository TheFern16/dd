function createMatrix(size) {
	return (
		<h1>{size}</h1>
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
