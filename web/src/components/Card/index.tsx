import React, { useCallback } from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import api from '../../services/api';
import { Box, Text, Title, Description, Buttons, NextButton, CheckButton } from './styles';

interface CardData {
    title: string;
    priority: string;
    message: string;   
}

interface Request {
    card: CardData;
}

const Card: React.FC<Request> = ({card}: Request) => {

    const handlePriority = useCallback(async()=> {
        if (card.priority === 'low') {
            await api.put('/cards', {
                title: card.title,
                priority: 'medium',
            });
        } else if (card.priority === 'medium') {
            await api.put('/cards', {
                title: card.title,
                priority: 'high',
            });
        } else {
            await api.put('/cards', {
                title: card.title,
                priority: 'low',
            });
        }
    }, [card.priority, card.title]);

    const handleCheckTask = useCallback(async ()=>{
        await api.post('/cards/delete', {
            title: card.title,
        });
    },[card.title]);

    return( 
        <Box>
            <Text>
            <Title>{card.title}</Title>

    <Description>{card.message}</Description>
            </Text>
            <Buttons>
                <NextButton onClick={handlePriority} title="Increase priority" ><FiArrowRight size={30}/></NextButton>
                <CheckButton onClick={handleCheckTask} title="Task done"><FiCheck size={30}/></CheckButton>
            </Buttons>
        </Box>
    )
}

export default Card;