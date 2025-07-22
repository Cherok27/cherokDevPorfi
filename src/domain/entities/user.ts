export interface User {
    id: string;
    username: string;
    email: string;
    pasword: string;
    createdAt: Date
    lastLogin: Date;
    roles: string[];
}
