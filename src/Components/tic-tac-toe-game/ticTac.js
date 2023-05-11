import { useState } from 'react'
import './ticTac.css'



export default function TicTac() {

    const [data, setData] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)


    function checkwinner() {

        const wineerIs = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of wineerIs) {

            const [a, b, c] = logic;
            if (data[a] != null && data[a] === data[b] && data[a] === data[c]) {
                return data[a];
            }
        }
        return false;
    };

    const wineerIs = checkwinner();

    function handleClick(index) {
         //console.log(index)
        if(data[index]!== null){
            return;
        }
        const copyState = [...data];
        copyState[index] = isXTurn ? 'X' : '0';
        setData(copyState);
        setIsXTurn(!isXTurn);

    }

    function handleAgain(){
        setData(Array(9).fill(null))
    }

    return (
        <>
        
            {wineerIs ?<> <h2>Player <h1 style={{ color:'blue' }}> {wineerIs}</h1> Is Winner</h2> </> :
                <div className='block'><h1> Tic-Tac-Toe Game </h1>
                    <div className='row'>
                        <h1 onClick={() => handleClick(0)}>{data[0]}</h1>
                        <h1 onClick={() => handleClick(1)}>{data[1]}</h1>
                        <h1 onClick={() => handleClick(2)}>{data[2]}</h1>
                    </div>
                    <div className='row'>
                        <h1 onClick={() => handleClick(3)}>{data[3]}</h1>
                        <h1 onClick={() => handleClick(4)}>{data[4]}</h1>
                        <h1 onClick={() => handleClick(5)}>{data[5]}</h1></div>
                    <div className='row'>
                        <h1 onClick={() => handleClick(6)}>{data[6]}</h1>
                        <h1 onClick={() => handleClick(7)}>{data[7]}</h1>
                        <h1 onClick={() => handleClick(8)}>{data[8]}</h1>
                    </div>
                </div>
                
            }
            <button style={{width:'100px'}} onClick={handleAgain}>Start Again</button><br/><br/><br/>
        </>
    )
}