import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
 
import words from '../../utils/words';
import Label from '../Label';
import BoxGroup from '../Box/BoxGroup';
import GameResult from '../GameResult'
const correct = 'CHANT';
let defaulBoard = [];
let defaultLetters = [];

'abcdefghijklmnopqrstuvwxyz'.split('').forEach((i) => {
  defaultLetters[i] = '';
});

for (let i = 0; i < 6; i++) {
  defaulBoard.push([]);
  for (let j = 0; j < 5; j++) {
    defaulBoard[i].push(['', '']);
  }
}

export default function index(props) {
  //console.log({props});
   
  const [letters, setLetters] = useState(defaultLetters);
  const [board, setBoard] = useState(defaulBoard);
  const [changed, setChanged] = useState(false);
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setisVisible] = useState(false)
  const toggleModal = ()=>{
    setisVisible(!isVisible)
  }
  //console.log({board});
  useEffect(() => {
    if (win || lost) {
      console.log('Game ended!');
    } else {
      if (props.clicks !== 0) {
        if (props.letter === 'DEL') {
          setCol(col === 0 ? 0 : col - 1);
          setBoard((prevBoard) => {
            prevBoard[row][col === 0 ? 0 : col - 1][0] = '';
            return prevBoard;
          });
        } else {
          setBoard((prevBoard) => {
            if (col < 5) {
              if (props.letter !== 'ENTER') {
                prevBoard[row][col][0] = props.letter;
                setCol(col + 1);
              } else {
                props.error('Words are 5 letters long!');
                setTimeout(() => {
                  props.error('');
                }, 1000);
              }
            } else {
              if (props.letter === 'ENTER') {
                let correctLetters = 0;
                let word = '';
                for (let i = 0; i < 5; i++) {
                  word += prevBoard[row][i][0];
                }
                if (words.includes(word.toLowerCase())) {
                  for (let i = 0; i < 5; i++) {
                    if (correct[i] === prevBoard[row][i][0]) {
                      prevBoard[row][i][1] = 'C';
                      correctLetters++;
                    } else if (correct.includes(prevBoard[row][i][0]))
                      prevBoard[row][i][1] = 'E';
                    else prevBoard[row][i][1] = 'N';
                    setRow(row + 1);
                    if (row === 5) {
                      setLost(true);
                      toggleModal()
                      setTimeout(() => {
                        setMessage(`It was ${correct}`);
                      }, 750);
                    }

                    setCol(0);
                    setLetters((prev) => {
                      prev[board[row][i][0]] = board[row][i][1];
                      return prev;
                    });
                  }
                  setChanged(!changed);

                  if (correctLetters === 5) {
                    setWin(true);
                    toggleModal()
                    setTimeout(() => {
                      setMessage('You WIN');

                    }, 750);
                  }
                  return prevBoard;
                } else { 
                  props.error('Word not in dictionary');
                  setTimeout(() => {
                    props.error('');
                  }, 2000);
                }
              }
            }
            return prevBoard;
          });
        }
      }
    }
  }, [props.clicks]);

  useEffect(() => {
    props.letters(letters);
  }, [changed]);


 

  const resetGame= ()=>{
    props?.resetGame() 
    setLetters(defaultLetters);
     setBoard(defaulBoard);
     setChanged(false);
     setRow(0);
     setCol(0);
     setWin(false);
     setLost(false);
     setMessage('');
     setisVisible(false)
     
  }

  return (
    <View>
      
      {board.map((row, key) => {
        return <BoxGroup row={row} key={key} />;
      })}
      <View    style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}} >
        <Label text={lost || win ? message : ''} />
      </View>
      <GameResult resetGame={  resetGame} result={message} word={correct} toggleModal={toggleModal}  isVisible={isVisible}/>
    </View>
  );
}
