 import React, { createContext, useCallback, useContext, useState } from 'react';
 import api from '../services/api';

 interface AuthState {
     token: string;
     user: User;
 }

 interface User {
    id: number;
    name: string;
    email: string;
  }
 

 interface SignInCredentials {
    email: string;
    password: string;
  }

 interface AuthContextData {
    user: User;
    signIn(credentials: SignInCredentials): Promise<any>;
    signOut():void;
 }

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

 export const AuthProvider: React.FC = ({children}) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@ToDo:token');
        const user = localStorage.getItem('@ToDo:user');

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;

            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;

    });


    const signIn = useCallback(async({ email, password }: SignInCredentials)=>{
        const response = await api.post('sessions', {
            email,
            password,
        });

        const {token, updatedUser } = response.data;
        
        localStorage.setItem('@ToDo:token', token);
        localStorage.setItem('@ToDo:user', JSON.stringify(updatedUser));

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({token, user: updatedUser});
    },[]);


    const signOut = useCallback(()=>{
        localStorage.removeItem('@ToDo:token');
        localStorage.removeItem('@ToDo:user');

        setData({} as AuthState);
    },[]);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
 }

 export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider!');
    }

    return context;
 }