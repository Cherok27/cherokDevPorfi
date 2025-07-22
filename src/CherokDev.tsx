import * as React from 'react';
import { StackNavigatorMain } from './presentation/routes/StackNavigatiorMain';
import { ThemeProvider } from './presentation/context/ThemeContext';
import { AuthProvider } from './presentation/providers';

export const CherokDev = () => {
    return(
        <ThemeProvider>
            <AuthProvider>
                <StackNavigatorMain/>
            </AuthProvider>
        </ThemeProvider>
    );
};
