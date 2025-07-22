import { useContext } from 'react';
import { Image, StyleProp, ImageStyle, StyleSheet } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?:  StyleProp<ImageStyle>
}
export const LogoImg = ({style}: Props) => {
    const {isDark} = useContext(ThemeContext);
    const logoImg = isDark ?
    require('../../assets/LogoDark.png')
    :
    require('../../assets/LogoLight.png');
    return (
      <Image source={logoImg} style={[styles.logoImg,style]}/>
    );
};
const styles = StyleSheet.create({
    logoImg:{
        width: 300,
        height: 300,
        opacity: 0.3,
        position: 'absolute',
        bottom: -260,
        right: 20,
    },
});

