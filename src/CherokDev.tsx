import * as React from 'react';
import { StackNavigatorMain } from './presentation/routes/StackNavigatiorMain';
import { ThemeProvider } from './presentation/context/ThemeContext';
import { AuthProvider } from './presentation/providers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export const CherokDev = () => {
    return(
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <AuthProvider>
                    <StackNavigatorMain/>
                </AuthProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
};
