import { PorfolioNestApi } from '../../config/api/porfolioNestApi';
import { User } from '../../domain/entities/user';
import { AuthResponse } from '../../infrastructures/interfaces/auth.responses';

const returnUserToken = (data: AuthResponse) => {
    const user: User = {
        id: data.id,
        email: data.email,
        username: data.username,
        pasword: data.pasword,
        createdAt: data.createdAt,
        lastLogin: data.lastLogin,
        roles: data.roles,
    };
    return {
        user: user,
        token: data.token,
    };
};

export const authLogin = async (email: string, pasword: string) => {
    console.log(email,pasword);
    email = email.toLowerCase();
    try {
        const {data} = await PorfolioNestApi.post<AuthResponse>('auth/login',{
            email,
            pasword,
        });
        return returnUserToken(data);
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const authCheckStatus = async () => {
    try {
        console.log('authchekc')
        const {data} = await PorfolioNestApi.get<AuthResponse>('auth/check-status');
        console.log(data, 'auth puert')
        return returnUserToken(data);
    } catch (error) {
        return null;
    }
};

export const authRegister = async (email: string, pasword: string, username: string) => {
    email = email.toLowerCase();
    try {
        const {data} = await PorfolioNestApi.post<AuthResponse>('auth/register',{
            email,
            pasword,
            username,
        } );
        return returnUserToken(data);
    } catch (error) {
        return null;
    }
};
