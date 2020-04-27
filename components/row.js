function chooseStyle(number) {
	return number === 1 ? 'black' : 'white';
}

export default ({ row }) => (
	<div className="boxContainer">{row.map(square => {
			return(
				<p className={chooseStyle(square)}>{square}</p>
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
		`}</style>
	</div>
)
