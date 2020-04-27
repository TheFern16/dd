import { useState } from 'react';
import P from '../components/paragraph'
import Post from '../components/post'
import Board from '../components/board';

export default function Index() {
  var [boardSize, setBoardSize] = useState(8);
  var [currentSelectedPiece] = useState();

  function handleChange(event) {
    return setBoardSize(JSON.parse(event.target.value));
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

