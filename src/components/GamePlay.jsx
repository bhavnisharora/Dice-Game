import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import styled from 'styled-components';
import { Button, OutlineButton } from '../styled/button';
import Rules from './Rules';
const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [selectedNumbers, setSelectedNumbers] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState('');
    const [showRules, setShowRules] = useState(false);
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


    const resetScore = () => {
        setScore(0);
    }


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

                <OutlineButton onClick={resetScore}> Reset </OutlineButton>
                <Button onClick={() => setShowRules((prev => !prev))}>{showRules ? "Hide" : "Show"} Show Rules </Button>
            </div>
            {showRules && <Rules />}

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

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}
}
.btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
`;