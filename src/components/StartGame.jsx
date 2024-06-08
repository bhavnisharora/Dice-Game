import styled from 'styled-components';

const StartGame = () => {
    return (
        <Container>
            <div>
                <img src="/images/dice.png" />
            </div>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame;


const Container = styled.div
    `max-width: 1180px;
    display:flex;
    height: 100vh;
    align-items: center;
    margin: 0 auto;
    
    .content h1{
        font-size: 76px;
        margin-bottom: 20px;
        white-space: nowrap;
    }
    
    `;

const Button = styled.button
    `
    color: #fff;
    background-color: #000;
    border-radius: 5px;
    padding: 10px 20px;
    border: none;
    min-width: 220px;
    font-size: 15px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: white;
        border: 1px solid #000;
        color: #000;
        transition: 0.3s background ease-in;
    }

    `;