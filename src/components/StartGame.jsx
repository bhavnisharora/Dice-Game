import styled from 'styled-components';
import { Button } from '../styled/button';
const StartGame = ({ toggle }) => {
    return (
        <Container >
            <div>
                <img src="/images/dice.png" />
            </div>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
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
    
    @media (max-width: 768px) {
    flex-direction: column;
}   

     img{
        max-width: 100%;
        height: auto;
    }

    .content{
    text-align: center;
    }

    .content h1{
        font-size: 76px;
        margin-bottom: 20px;
        white-space: nowrap;

        @media (max-width: 768px) {
            font-size: 56px;
        }

        @media (min-width: 1024px) {
            font-size: 76px;
        }
    }
    
    `;
