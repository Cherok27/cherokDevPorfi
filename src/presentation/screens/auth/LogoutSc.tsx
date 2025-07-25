import React from 'react';
import { useAuthStore } from '../../store';

export const LogoutSc = () => {
    const {logout} = useAuthStore();
    React.useEffect(() =>{
      logout();
    });
  return (
    <></>
  );
};
