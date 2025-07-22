export interface AuthResponse {
    id:        string;
    username:  string;
    email:     string;
    pasword:   string;
    createdAt: Date;
    lastLogin: Date;
    roles:     string[];
    isActive:  boolean;
    token:     string;
}
