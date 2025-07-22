import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { PropsWithChildren, useEffect } from 'react';
import { RootStackParamList } from '../routes/StackNavigatiorMain';
import { useAuthStore } from '../store';


export const AuthProvider = ({children}: PropsWithChildren) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const {status, checkStatus} = useAuthStore();
    useEffect(() =>{
        checkStatus();
    },[checkStatus]);
    useEffect(() =>{
        console.log(status);
    if (status !== 'checking') {
         if (status === 'authenticated') {
            navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeSc' }],
                });
        }else {
            navigation.reset({
                    index: 0,
                    routes: [{ name: 'HeroeSc'}],
                });
        }
      }
    },[status, navigation]);

  return (
    <>
      {children}
    </>
  );
};
