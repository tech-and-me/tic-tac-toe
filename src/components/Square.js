const Square = ({colVal,onSquareClicked,rowNumber,colNumber}) => {

    return (
      <span className="square" onClick={()=>onSquareClicked(rowNumber,colNumber)} >{colVal}</span>
    )
  }
  
  export default Square
  