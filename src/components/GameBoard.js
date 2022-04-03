import Square from './Square'

const GameBoard = ({updateGameState,state,isXChance,updateIsXChance,checkWinner}) => {
    const onSquareClicked = (rowNumber,colNumber) => {
        let gameRecord = [...state];
        gameRecord[rowNumber][colNumber] = isXChance ? "X" : "O";
        updateGameState(gameRecord);
        updateIsXChance(!isXChance);
    }

  return (
        <div className="gameBoard">
            {      
                state.map((rowData,rowNumber)=>
                {
                    return <div key={rowNumber} className="row">
                        {
                        rowData.map((colData,colNumber) => 
                                <Square key={rowNumber+colNumber} colVal={colData} onSquareClicked={onSquareClicked} rowNumber={rowNumber} colNumber={colNumber}/>)}                                
                    </div>
                })    
            }
        </div>)           
    }

export default GameBoard