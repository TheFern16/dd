import P from '../components/paragraph'
import Post from '../components/post'
import Board from '../components/board';

export default function Index() {
  const boardSize = 8;

  function handleChange(event) {
    if (typeof event.target.value) {
      //
      console.log(boardSize)
      let temp = event.target.value;
      boardSize = temp;
    }
  };

  return (
    <div className="main">
      <Post title="Game Board">
        <P>Select your board size</P>
        <P>Default is 8x8</P>
      </Post>
      <input onChange={handleChange}/>
      <Board size={boardSize} />
    </div>
  )
}

