import { AuthStatus } from '../../../infrastructures/interfaces/auth.status';
import { User } from '../../../domain/entities/user';
import { create } from 'zustand';
import { authCheckStatus, authLogin, authRegister } from '../../../actions/auth/auth';
import { StorageAdapter } from '../../../config/adapters/storage-adapter';

export interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;
    register: (email: string, pasword: string, username: string) => Promise<boolean>
    login: (email: string, pasword: string) => Promise<boolean>;
    checkStatus: () => Promise<void>;
    logout: () => Promise<void>;
}
export const useAuthStore = create<AuthState>()(set =>({
    status:'checking',
    token: undefined,
    user: undefined,
    register: async (email: string, pasword: string, username: string) => {
        const resp = await authRegister(username, email, pasword);
        console.log(resp);
        if (!resp) {
            set({ status: 'unauthenticated', token: undefined, user: undefined});
            return false;
        }
        await StorageAdapter.setItem('token', resp.token);
        set({ status: 'authenticated', token: resp.token, user: resp.user });
        return true;
    },
    login: async (email: string, pasword: string) => {
        console.log(email,'store');
        const resp = await authLogin(email, pasword);
        if (!resp) {
            set({ status: 'unauthenticated', token: undefined, user: undefined});
            return false;
        }
        await StorageAdapter.setItem('token', resp.token);
        set({ status: 'authenticated', token: resp.token, user: resp.user});
        return true;
    },
    checkStatus: async () => {
        const resp = await authCheckStatus();
        console.log(resp);
        if (!resp) {
            set({ status: 'unauthenticated', token: undefined, user: undefined});
            return;
        }
        await StorageAdapter.setItem('token', resp.token);
        set({ status: 'authenticated', token: resp.token, user: resp.user});
    },
    logout: async () => {
        await StorageAdapter.removeItem('token');
        set({ status: 'unauthenticated', token: undefined, user: undefined});
    },
}));
