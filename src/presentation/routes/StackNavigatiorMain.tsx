import { createStackNavigator } from '@react-navigation/stack';
import { HomeSc, LoadingSc } from '../screens';
import { HeroeSc } from '../screens/Heroe/HeroeSc';
import { usefadeAnimation } from '../hooks';
import { StackkNavigator } from './StackNavigator';

export type RootStackParamList = {
  LoadingSc : undefined;
  LoginSc: {userId:undefined};
  RegisterSc: undefined;
  LogoutSc: undefined;
  HomeSc: undefined;
  HeroeSc: undefined;
  StackNavigator: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();
export const StackNavigatorMain = () => {
  return (
    <Stack.Navigator initialRouteName="HeroeSc" screenOptions={{
      headerShown: false,
      cardStyleInterpolator: usefadeAnimation,
    }} >
      <Stack.Screen name="HomeSc" component={HomeSc} />
      <Stack.Screen name="LoadingSc" component={LoadingSc} />
      <Stack.Screen name="HeroeSc" component={HeroeSc} />
      <Stack.Screen name="StackNavigator" component={StackkNavigator}/>
    </Stack.Navigator>
  );
};
