import { useState } from 'react';
import P from '../components/paragraph'
import Post from '../components/post'
import Board from '../components/board';

export default function Index() {
  var [boardSize, setBoardSize] = useState(8);
  var [pieceType, setPieceType] = useState('default');

  function handleChange(event) {
    return setBoardSize(JSON.parse(event.target.value));
  };

  function handleRadioChange(event) {
    if (event.target.value === 'default') {
      return setPieceType('default');
    } else if (event.target.value === 'next') {
      return setPieceType('next');
    }
  };

  return (
    <div className="main">
      <Post title="Game Board">
        <P>Select your board size</P>
        <P>Default is 8x8</P>
      </Post>
      <input onChange={handleChange}/>
      <div onClick={handleRadioChange}>
        <h4>Piece Type</h4>
        <label>Default</label>
        <input value="default" type="radio" />
        <label>Next Gen</label>
        <input value="next" type="radio" />
      </div>
      <Board 
        size={boardSize} 
        pieceType={pieceType}
      />
    </div>
  )
}

