import React from 'react'

const Header = ({winner}) => {
  return (
    <div className="header">
        <h1>Tic Tac Toe</h1>
        <h2>{winner}</h2>
    </div>
  )
}

export default Header