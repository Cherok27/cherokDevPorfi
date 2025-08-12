import { useContext } from 'react';
import { Image, StyleProp, ImageStyle, StyleSheet, Dimensions } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?:  StyleProp<ImageStyle>
}
const {width, height} = Dimensions.get('window');
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
        width: width * 0.9,
        height: height * 0.5,
        opacity: 0.3,
        position: 'absolute',
        top: height * 0.38,
        right: width * 0.05,
    },
});

