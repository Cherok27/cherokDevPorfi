import { createStackNavigator, StackCardStyleInterpolator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LoginSc, LogoutSc, RegisterSc } from '../screens/auth';
import { ConfigSc, GameSc, MeinNutzerSc } from '../screens';




export type RootStackParams = {
 LoginSc: undefined;
 LogoutSc: undefined;
 RegisterSc: undefined;
 ConfigSc: undefined;
 MeinNutzerSc: undefined;
 GameSc: undefined;
}
const Stack = createStackNavigator<RootStackParams>();
const fadeAnimation: StackCardStyleInterpolator = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
});
export const StackkNavigator = () => {
    const {colors} = useContext(ThemeContext);
  return (
    <Stack.Navigator
    initialRouteName="ConfigSc"
    screenOptions={{
        headerShown: true,
        headerTintColor: colors.text,
        cardStyleInterpolator: fadeAnimation,
        headerStyle: {
            backgroundColor: colors.background,
            elevation: 0,
            },
    }}
    >
      <Stack.Screen name="LoginSc" component={LoginSc} options={{ headerShown: false }}/>
      <Stack.Screen name="LogoutSc" component={LogoutSc}/>
      <Stack.Screen name="RegisterSc" component={RegisterSc}/>
      <Stack.Screen name="ConfigSc" component={ConfigSc} options={{ title: 'Ajustes' }}/>
      <Stack.Screen name="MeinNutzerSc" component={MeinNutzerSc} options={{ title: 'Usuario' }}/>
      <Stack.Screen name="GameSc" component={GameSc} options={{ title: 'Game' }}/>
    </Stack.Navigator>
  );
};
