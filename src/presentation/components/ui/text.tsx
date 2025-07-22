import { useContext } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props{
    text: string,
    style?: StyleProp<TextStyle>;
    onPress?: () => void;
}
export const Texto = ({text, style, onPress}:Props) => {
    const {colors} = useContext(ThemeContext);
    return(
        <Text style={[{color: colors.text},style]} onPress={onPress}>{text}</Text>
    );
};
