import React, { useState } from 'react';
import styled from 'styled-components';

const RoleDice = ({ currentDice, roleDice }) => {



    return (
        <DiceContainer>
            <div className='dice'
                onClick={roleDice}
            >
                <img src={`/images/dices/dice_${currentDice}.png`} alt="dice 1" />
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


