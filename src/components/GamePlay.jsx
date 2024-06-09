import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import styled from 'styled-components';
import { Button } from '../styled/button';

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumbers, setSelectedNumbers] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState('');
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if(!selectedNumbers) {
            setError('you have not selected any number yet');
            return;
        }

        if(selectedNumbers === randomNumber) {
            setScore((prev) => prev + 1);
        }

        else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumbers(undefined);

    };



    return (
        <MainContainer>
            <div className='top-section'>
                <TotalScore score={score} />
                <NumberSelector selectedNumbers={selectedNumbers}
                    setSelectedNumbers={setSelectedNumbers}
                    error={error}
                    setError={setError}
                />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice} />
            <div className="btns">
                <Button> Reset </Button>
                <Button> Show Rules </Button>
            </div>
        </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.main`

padding-top: 70px;
margin: 0 10px;

.top-section{
display: flex;
justify-content: space-between;
align-items: end;
}
.btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
`;