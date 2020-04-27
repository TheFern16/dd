import P from '../components/paragraph'
import Post from '../components/post'
import Board from '../components/board';

export default () => (
  <div className="main">
    <Post title="Game Board">
      <P>Select your board size</P>
      <P>Default is 8x8</P>
    </Post>
    <input />
    <Board size="8"/>
  </div>
)

