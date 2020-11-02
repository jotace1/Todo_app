import React, { useCallback, useRef } from 'react';
import { FiCheckSquare, FiLock, FiMail } from 'react-icons/fi'
import Input from '../../components/Input';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/auth';


import { Header, Logo, Container, SignInBox, Button } from './styles';
import { Link } from 'react-router-dom';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { signIn } = useAuth();


    const handleSubmit = useCallback(({email, password} : SignInFormData)=> {
        signIn({email, password});
    },[signIn]);

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
                    <strong>Faça seu login</strong>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input icon={FiMail} name="email" placeholder="E-mail" />
                        <Input
                            icon={FiLock}
                            name="password"
                            type="password"
                            placeholder="Senha" />

                            <Button type="submit">Entrar</Button>
                            <span>ou <Link to="/signup">crie sua conta</Link></span>
                    </Form>
                </SignInBox>

            </Container>
            </>
    )
    
}

export default SignIn;