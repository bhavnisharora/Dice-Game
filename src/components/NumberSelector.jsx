import styled from 'styled-components';

const NumberSelector = ({ error, setError, selectedNumbers, setSelectedNumbers }) => {
    const arrayNumbers = [1, 2, 3, 4, 5, 6];

    const NumberSelectorHandler = (value) => {
        setSelectedNumbers(value);
        setError('');
    }

    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {arrayNumbers.map((number, i) => {
                    return <Box key={i}
                        isSelected={selectedNumbers === number}
                        onClick={() => NumberSelectorHandler(number)}>{number}</Box>
                })
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer >
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
    margin-top: 5px;
    font-size: 24px;    
    font-weight: 700;
}
.error{
    color: red;
    margin-bottom: 5px;
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

@media (max-width: 768px) {
height: 42px;
width: 42px;
margin-bottom: 30px;
}
`;