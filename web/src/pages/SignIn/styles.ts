import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Header = styled.div`
display:flex;
flex: 1;
height: 100px;
align-items: center;
margin-left: 30px;
`;

export const Logo = styled.p`
    display: flex;
    align-items: center;
    font-family:  'Trispace';
    font-size: 50px;

    svg {
        margin-right: 10px;
    }

`;

export const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;

`; 

export const SignInBox = styled.div`
    background: #6c757d;
    border-radius: 10px;
    box-shadow: 10px 5px 5px black;
    padding: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 200px;
    animation: ${appearFromLeft} 1s;

    strong {
        font-family: 'Trispace';
        font-size: 19px;
        margin-bottom: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        
        button {
            margin-top: 15px;
        }
    }

    span {
        font-family: 'Trispace';

        a {
            color: #232129;
        }
    }

`;

export const Button = styled.button`
    border: none;
    color:#fff;
    font-family: 'Trispace';
    background: #232129;
    height: 50px;
    width: 100%;
    border-radius: 10px;
    transition: 0.2s;
    margin-bottom: 20px;

    &:hover {
        background: ${shade(0.15 , '#232129')}
    }
`;

