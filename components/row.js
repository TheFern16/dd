function chooseStyle(number) {
	return number === 1 ? 'black' : 'white';
}

export default ({ row }) => (
	<div>{row.map(square => {
			return(
				<p className={chooseStyle(square)}>{square}</p>
			)
		})}
		<style jsx> {`
			.black {
				background-color: black;
			}
			.white {
				background-color: white;
			}
		`}</style>
	</div>
)
