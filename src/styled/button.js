import styled from 'styled-components';

export const Button = styled.button
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

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover{
        background-color: black;
        border: 1px solid transparent; 
        color: white;
    }
`;


