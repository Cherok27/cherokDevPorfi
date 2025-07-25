import { useContext } from 'react';
import { Image, StyleProp, ImageStyle, StyleSheet } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?:  StyleProp<ImageStyle>
}
export const BannerName = ({style}: Props) => {
    const {isDark} = useContext(ThemeContext);
    const logoImg = isDark ?
    require('../../assets//BannerDark.png')
    :
    require('../../assets/BannerLi.png');
    return (
      <Image source={logoImg} style={[styles.logoImg,style]}/>
    );
};
const styles = StyleSheet.create({
    logoImg:{
        width: 222,
        height: 222,
        opacity: 0.3,
        position: 'absolute',
        top: -80,
        right: 80,
    },
});

