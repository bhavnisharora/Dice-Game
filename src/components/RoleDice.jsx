import React, { useState } from 'react';
import styled from 'styled-components';

const RoleDice = () => {

    const [currentDice, setCurrentDice] = useState();

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    return (
        <DiceContainer>
            <div className='dice'
                onClick={() => generateRandomNumber(1, 7)}
            >
                <img src="/images/dices/dice_1.png" alt="dice 1" />
            </div>
            <p>Click on Dice to Roll</p>
        </DiceContainer>
    )
}

export default RoleDice;

const DiceContainer = styled.div`

margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;

.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
}

`;


