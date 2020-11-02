import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
display:flex;
flex: 1;
height: 100px;
align-items: center;
justify-content: space-between;
margin-left: 30px;


`;

export const Logo = styled.p`
    display: flex;
    align-items: center;
    font-family:  'Trispace';
    font-size: 30px;
    margin-bottom: 10px;

    svg {
        margin-right: 10px;
    }

`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
`;

export const Logout = styled.button`
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
    background: none;
    margin-right: 20px;
    color: #fff;
    font-family: 'Trispace';

    svg {
        margin-right: 5px;
    }

    &:hover{
        background: ${shade(0.4, '#312E38')}
    }
   
`;

export const AddTask = styled.button`
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
    background: none;
    margin-right: 20px;
    color: #fff;
    font-family: 'Trispace';

    svg {
        margin-right: 5px;
    }

    &:hover{
        background: ${shade(0.4, '#312E38')}
    }
`;


export const Container = styled.div`
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100vh;
`;

export const LowPriorityBox = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   border-right: 1px solid #fff;

   padding: 30px;
`;

export const MediumPriorityBox = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   border-right: 1px solid #fff;

   padding: 30px;

`;

export const HighPriorityBox = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;

   padding: 30px;

`;

export const Title = styled.h2`
    font-family: 'Trispace';
`;

