import { useState } from 'react';
import styled from 'styled-components';

const NumberSelector = () => {
    const arrayNumbers = [1, 2, 3, 4, 5, 6];
    const [selectedNumbers, setSelectedNumbers] = useState();

    return (
        <NumberSelectorContainer>
            <div className='flex'>
                {arrayNumbers.map((number, i) => {
                    return <Box key={i}
                        isSelected={selectedNumbers === number}
                        onClick={() => setSelectedNumbers(number)}>{number}</Box>
                })
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items:center;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;    
    font-weight: 700;
}
`;

const Box = styled.div
    `
height: 72px;
width: 72px;
border:1px solid black;
display:grid;
cursor:pointer;
place-items:center;
font-size: 24px;
font-weight: 700;
background-color: ${props => props.isSelected ? 'black' : 'white'};
color: ${props => !props.isSelected ? 'black' : 'white'};
`;