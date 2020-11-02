import React, { useCallback, useEffect, useState } from 'react';
import { FiCheckSquare, FiPower, FiPlus } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import ModalAddTask from '../../components/ModalAddTask';
import Card from '../../components/Card';

import { Header,Logo, Actions, AddTask, Logout, Container, LowPriorityBox, MediumPriorityBox, HighPriorityBox, Title } from './styles';
import api from '../../services/api';

interface Tasks {
  title: string;
  priority: string;
  message: string;   
}

const Dashboard: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const { user, signOut }  = useAuth();

    async function LoadPage() {
    const response = await api.get('/cards');
    setTasks(response.data);
    }

    useEffect(() => {
      LoadPage()
    }, [tasks]);


    const toggleModal = useCallback(()=>{
        setModalOpen(!modalOpen);
    }, [modalOpen]);

    async function handleAddTask(
        task : Tasks,
      ): Promise<void> {
        try {
          const response = await api.post('/cards', task);
    
          setTasks([...tasks, response.data]);
        } catch (err) {
          console.log(err);
        }
      }

    const handleLogout = useCallback(()=> {
        signOut();
    },[signOut]);

    return (
        <>
        <Header>
            <Logo>
                <FiCheckSquare />
                Bem vindo ao todo, {user.name}!
            </Logo>

            <Actions>
                <AddTask onClick={toggleModal}><FiPlus size={30} color="#fff" />Adicionar tarefa</AddTask>
                <Logout onClick={handleLogout}><FiPower size={30}  color="#fff"/>Sair</Logout>
            </Actions>
        </Header>

        <ModalAddTask setIsOpen={toggleModal} isOpen={modalOpen} handleAddTask={handleAddTask}/>

        <Container>
          <LowPriorityBox>
            <Title>Low Priority</Title>
            {tasks.map(task => {
              if (task.priority === 'low') {
               return <Card key={task.message} card={task} />
              }
})}

          </LowPriorityBox>

          <MediumPriorityBox>
            <Title>Medium Priority</Title>
            {tasks.map(task => {
              if (task.priority === 'medium') {
               return <Card key={task.message} card={task} />
              }
})}
          </MediumPriorityBox>

          <HighPriorityBox>
            <Title>High Priority</Title>

            {tasks.map(task => {
              if (task.priority === 'high') {
               return <Card key={task.message} card={task} />
              }
})}
          </HighPriorityBox>
        </Container>

        </>
    );
}

export default Dashboard;