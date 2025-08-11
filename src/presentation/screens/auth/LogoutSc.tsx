import React from 'react';
import { useAuthStore } from '../../store';
import { LoadingSc } from '../loading/LoadingSc';

export const LogoutSc = () => {
    const {logout} = useAuthStore();
    React.useEffect(() =>{
      logout();
    });
  return (
    <LoadingSc/>
  );
};
