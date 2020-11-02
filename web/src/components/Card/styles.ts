import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    background: #6c757d;
    border-radius: 7px;
    min-height: 100px;
    max-height: 300px;
    max-width: 400px;
    width: 100%;
    font-family: 'Trispace';
    
    opacity: 0.95;
    
`;

export const Text = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 14px;

`;

export const Title = styled.p`
    margin: 10px 0 0 20px;
    font-weight: 600;
`;

export const Description = styled.p`
    margin: 10px 0 10px 20px;

`;

export const Buttons = styled.div`
    margin-right: 5px;
    margin-left: 10px;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const NextButton = styled.button`
    background: none;
    border: none;
    color: #fff;
`;

export const CheckButton = styled.button`
    background: none;
    border: none;
    color: #fff;
`;