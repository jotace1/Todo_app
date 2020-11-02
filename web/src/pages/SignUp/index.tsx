import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiCheckSquare, FiLock, FiMail, FiUser } from 'react-icons/fi'
import Input from '../../components/Input';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';


import { Header, Logo, Container, SignInBox, Button } from './styles';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

interface SignInFormData {
    name: string;
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const history = useHistory();
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data : SignInFormData)=> {
        await api.post('/users', {
            name: data.name,
            email: data.email,
            password: data.password,    
        });

        history.push('/');
    },[history]);

    return (
        <>
        <Header>
            <Logo>
                <FiCheckSquare />
                todo
            </Logo>
        </Header>

            <Container>
                <SignInBox>
                    <Link to="/"><FiArrowLeft size={25} color="#fff" /></Link>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                    <strong>Faça seu cadastro</strong>

                    <Input icon={FiUser} name="name" placeholder="Nome" />
                    <Input icon={FiMail} name="email" placeholder="E-mail" />
                    <Input
                    icon={FiLock}
                    name="password"
                    type="password"
                    placeholder="Senha"
                    />

                    <Button type="submit">Cadastrar</Button>

                    </Form>
                </SignInBox>

            </Container>
            </>
    )
    
}

export default SignIn;