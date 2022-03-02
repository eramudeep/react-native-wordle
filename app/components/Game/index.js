import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Keyboard from '../Keyboard';
import Board from '../Board';
import Error from '../Error';
export default function index(props) {
  const [letter, setLetter] = useState();
  const [changed, setChanged] = useState(false);
  const [letters, setLetters] = useState({}); 
  const [clicked, setClicked] = useState(0);
  const [error, setError] = useState('');
   

  const resetGame= ()=>{
    setLetter(null)
    setChanged(false)
    setLetters({})
    setClicked(0)
    setError('')
  }
  const onClickDown = (event) => {
    console.log({event});
    if (event.key == 'Enter') {
      setLetter('ENTER');
      setClicked(clicked + 1);
    } else if (event.key == 'Backspace') {
      setLetter('DEL');
      setClicked(clicked + 1);
    } else if ('abcdefghijklmnopqrstuvwxyz'.includes(event.key.toLowerCase())) {
      setLetter(event.key.toUpperCase());
      setClicked(clicked + 1);
    }
  };
 

  const keyHandler = (letterValue) => {
    setLetter(letterValue);
    setClicked(clicked + 1);
    onClickDown({key: letterValue});
    //console.warn(letterValue);
  };
  const LettersHandler = (lettersValue) => {
    setLetters(lettersValue);
    setChanged(!changed);
  };

  return (
    <View>
      <Error error={error} />
      <Board
        letter={letter}
        clicks={clicked}
        letters={LettersHandler}
        error={setError}
        resetGame={resetGame}
      />
      <Keyboard keyHandler={keyHandler} letters={letters} changed={changed} />
    </View>
  );
}
