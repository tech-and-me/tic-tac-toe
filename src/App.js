import Header from './components/Header'
import GameBoard from './components/GameBoard';
import Reset from './components/Reset';
import Footer from './components/Footer';
import {useState} from 'react';
import { useEffect } from 'react';

const innitalState = [['','',''],['','',''],['','','']];

const App = () => {
  const [gameState,setGameState] = useState(innitalState);
  const [isXChance,setXChance] = useState(false);
  const [winner,setWinner] = useState("");


  useEffect(() => {
    checkWinner();    
});

    const checkWinner = () => {
    const lines = [
      [[0,0], [0,1], [0,2]],
      [[1,0], [1,1], [1,2]],
      [[2,0], [2,1], [2,2]],
      [[0,0], [1,0], [2,0]],
      [[0,1], [1,1], [2,1]],
      [[0,2], [1,2], [2,2]],
      [[0,0], [1,1], [2,2]],
      [[0,2], [1,1], [2,0]],
  ];
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
        let [a, b, c] = lines[i];
        let [aRow,aCol] = a;
        let [bRow,bCol] = b;
        let [cRow,cCol] = c; 
        if (gameState[aRow][aCol] && gameState[aRow][aCol] === gameState[bRow][bCol] && gameState[aRow][aCol] === gameState[cRow][cCol]) {
          let str = "The winner is " + gameState[aRow][aCol] + "!";
          setWinner(str);
          return gameState[aRow][aCol];
      }
    }
    return null;  
}

  const clearGame = () => {
    console.log("clear game is fired!")
    setGameState(innitalState);
    window.location.reload();
  }

  const updateGameState = (newState) =>{
    setGameState(newState);
  }

  const updateIsXChance = (newXChance) => {
    setXChance(newXChance);
  }

  return (
    <div>
      <Header winner={winner}/>
      <GameBoard state={gameState} updateGameState={updateGameState} updateIsXChance={updateIsXChance} isXChance={isXChance} />
      <Reset clearGame={clearGame} />
      <Footer />   
    </div>
  );
}

export default App;

