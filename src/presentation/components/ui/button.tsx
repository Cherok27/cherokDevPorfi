import { useContext } from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { globalStyles } from '../../../config/theme/Theme';

interface Props{
    text: string;
    styles?: StyleProp<ViewStyle>
    disable?:boolean;
    onPress: () => void;
}
export const Button = ({text, styles, disable, onPress}:Props) => {
    const {colors} = useContext(ThemeContext);
    return(
        <Pressable onPress={onPress} disabled={disable} style={({pressed}) => ([
            globalStyles.btnPrimary,
            {opacity: pressed ? 0.8 : 1, backgroundColor: colors.primary},
            styles,
        ])} >
            <Text style={[globalStyles.btnPrimaryText]} >{text}</Text>
        </Pressable>
    );
};
