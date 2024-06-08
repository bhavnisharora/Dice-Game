import { useState } from 'react';
import styled from 'styled-components';

const NumberSelector = () => {
    const arrayNumbers = [1, 2, 3, 4, 5, 6];
    const [selectedNumbers, setSelectedNumbers] = useState();
    console.log(selectedNumbers);

    return (
        <div>
            {arrayNumbers.map((number, i) => {
                return <Box key={i}
                    isSelected={selectedNumbers === number}
                    onClick={() => setSelectedNumbers(number)}>{number}</Box>
            })
            }
        </div>
    )
}

export default NumberSelector;

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