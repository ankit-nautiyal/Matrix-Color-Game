import React from 'react';
import '../styles/gameInfo.css';

export default function GameInfo() {
    return (
        <div >
            <h1 style={{textAlign:'center'}}>How to Play the Matrix Color Game?</h1>
            <h2>Welcome to the Matrix Color Game! Here's how to play:</h2>
            <br />
            <ul style={{textAlign: "left"}}>
                <li><strong>The Matrix</strong>: You'll see a 3x3 Matrix with 9 white boxes.</li>
                <li><strong>Click to Turn Green</strong>: Click any white box to turn it green. Each box can only be clicked once—subsequent clicks on a green box won't do anything.</li>
                <li><strong>Fill the Matrix</strong>: Keep clicking different boxes until all 9 are green.</li>
                <li><strong>Orange Sequence</strong>: When you click the last white box (making all 9 green), it will turn green, and after a 1-second pause, all boxes will start turning orange one by one. They'll change the color in the order you originally clicked them, with a 1-second delay between each box.</li>
                <li><strong>Reset and Replay</strong>: At any time—before, during, or after the sequence—click the "Reset" button below the Matrix to turn all boxes back to white and start a new game.</li>
                <li><strong>Goal</strong>: Have fun clicking the boxes and watching the colors change in sequence! There's no score—just enjoy the pattern!🙂</li>
            </ul>
        </div>
    )
}
