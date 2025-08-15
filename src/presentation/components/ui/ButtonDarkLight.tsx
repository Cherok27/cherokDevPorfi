import {  View } from 'react-native';
import React, { useContext } from 'react';
import { Switch } from 'react-native-switch';
import { IconCustom } from '../../icons/Icons';
import { ThemeContext } from '../../context/ThemeContext';

export const ButtonDarkLight = () => {
  const { setTheme , isDark} = useContext(ThemeContext);
    const [isLight, setIsLight] = React.useState(isDark);
    console.log(isLight);
    console.log( setTheme ,isDark);
    const changeTheme = (pri: boolean) =>{
        console.log(pri);
        setIsLight(pri);
        setTheme(pri ? 'dark' : 'light');
    };
  return (
    <View>
      <Switch
        value={isLight}
        onValueChange={changeTheme}
        renderInsideCircle={() =>
          <IconCustom
            name={isLight ? 'moon' : 'sunny'}
            size={20}
            color={isLight ? '#fff' : '#efb810'}
          />
        }
        circleSize={30}
        backgroundActive="#222"
        backgroundInactive="#efb810"
        circleActiveColor="#222"
        circleInActiveColor="#fff"
        inActiveText=""
        activeText=""
      />
    </View>
  );
};
