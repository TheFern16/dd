import P from '../components/paragraph'
import Post from '../components/post'
import Board from '../components/board';

export default function Index() {
  const boardSize = 7;

  function handleChange() {
    console.log('handleChange')
  }

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

