import React from 'react'
import Square from './square'
import { useState } from 'react'
import '../styles/board.css'

export default function Board() {

    const [squareValue, setSquareValue] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState(true);
    const winner = winning(squareValue);
    let status;
    


    if (winner) {
        status = "Winner :" + " " + winner;
    }
     else {
        status = "Player : " + (player ? "X" : "O");
    }

    const squareGame = (i) => {
        return (<Square value={squareValue[i]} onClick={() => handleClick(i)} />)
    }

    const handleClick = (i) => {
        const allSquare = squareValue.slice();

        if (allSquare[i] === null && !winner) {
            allSquare[i] = player ? "X" : "O";
            setSquareValue(allSquare);
            setPlayer(!player);

        }
         else if (allSquare[i] !== null) {
            alert("already full :)")
        }
        
    }

    function winning(allSquare) {
        const location = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < location.length; i++) {
            const [a, b, c] = location[i]

            if (allSquare[a] && allSquare[a] === allSquare[b] && allSquare[a] === allSquare[c]) {
                return allSquare[a];
            }
        }
        return null;
    }

    return (
        <>
            <div className='board'>
                <div style={{ float: "left" }} className='row'>
                    {squareGame(0)}
                    {squareGame(1)}
                    {squareGame(2)}
                </div>
                <div style={{ float: "left" }} className='row'>
                    {squareGame(3)}
                    {squareGame(4)}
                    {squareGame(5)}
                </div>
                <div style={{ float: "left" }} className='row'>
                    {squareGame(6)}
                    {squareGame(7)}
                    {squareGame(8)}
                </div>

            </div>

            <div className='status'>{status}</div>
        </>

    )
}
