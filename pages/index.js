import { useState } from 'react';
import P from '../components/paragraph'
import Post from '../components/post'
import Board from '../components/board';

export default function Index() {
  var [boardSize, setBoardSize] = useState(8);
  var [pieceType, setPieceType] = useState('default');
  var [pieceColor, setPieceColor] = useState('default');

  function handleChange(event) {
    return setBoardSize(JSON.parse(event.target.value));
  };

  function handleRadioChange(event) {
    if (event.target.name === 'type') {
      return event.target.value === 'default' ? setPieceType('default') : setPieceType('next');
    } else {
      return event.target.value === 'default' ? setPieceColor('default') : setPieceColor('next');
    }
  };

  return (
    <div className="main">
      <Post title="Game Board">
        <P>Select your board size</P>
        <P>Default is 8x8</P>
      </Post>
      <input onChange={handleChange}/>
      <form onClick={handleRadioChange}> 
        <div >
          <h4>Piece Type</h4>
          <label>Default</label>
          <input value="default" type="radio" name="type" />
          <label>Next Gen</label>
          <input value="next" type="radio" name="type" />
          <h4>Piece Color</h4>
          <label>Default</label>
          <input value="default" type="radio" name="color" />
          <label>Next Gen</label>
          <input value="next" type="radio" name="color" />
        </div>  
      </form>
      <Board 
        size={boardSize} 
        pieceType={pieceType}
        pieceColor={pieceColor}
      />
    </div>
  )
};