import { useState } from "react";
import "../styles/matrix.css"
import {useNavigate} from 'react-router-dom';

function Matrix() {
    const navigate= useNavigate();
    // State for the 9 boxes (0 = default/white, 1 = green, 2 = orange)
    const [boxes, setBoxes] = useState(Array(9).fill(0));
    // State to track the order of clicks
    const [clickOrder, setClickOrder] = useState([]);

    // Handle box click
    const handleClick = (index) => {
        // If box is already clicked (green or orange), ignore
        if (boxes[index] !== 0) return;

        // Update the box to green (1)
        const newBoxes = [...boxes];
        newBoxes[index] = 1;
        setBoxes(newBoxes);

        // Add index to click order
        const newClickOrder = [...clickOrder, index];
        setClickOrder(newClickOrder);

        // Check if this was the last unclicked box
        if (newClickOrder.length === 9) {
        // Wait 1 second, then start turning boxes orange
        setTimeout(() => {
            turnOrangeInSequence(newClickOrder);
        }, 1000); // 1-second delay before starting orange sequence
        }
    };

    // Turn boxes orange in sequence with 1-second delays
    const turnOrangeInSequence = (order) => {
        order.forEach((index, i) => {
        setTimeout(() => {
            setBoxes((prevBoxes) => {
            const updatedBoxes = [...prevBoxes];
            updatedBoxes[index] = 2; // Orange
            return updatedBoxes;
            });
        }, i * 1000); // 1-second delay for each box
        });
    };

    // Reset the game
    const handleReset = () => {
        setBoxes(Array(9).fill(0)); // Reset all boxes to default (white)
        setClickOrder([]); // Clear click order
    };

    return (
        <>
            <h1>Matrix Color Game</h1>
            
            <button className="gameInfoBtn" onClick={()=> navigate("/gameInfo")}>Game Info  </button>
            
            
            <div className="grid">
                {boxes.map((boxState, index) => (
                <div
                    key={index}
                    className={`box ${boxState === 1 ? "green" : boxState === 2 ? "orange" : ""}`}
                    onClick={() => handleClick(index)}
                >
                </div>
                ))}
            </div>
            <br />
            <button className="reset-btn" onClick={handleReset}>
                Reset
            </button>
        </>
    );
}

export default Matrix;