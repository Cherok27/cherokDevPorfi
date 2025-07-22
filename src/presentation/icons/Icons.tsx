import Icon from '@react-native-vector-icons/ionicons';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
    name: string;
    size?: number;
    color?: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>
}

export const Icons = ({name, size = 30, onPress, color}: Props) => {
 const {isDark} = useContext(ThemeContext);
 isDark ? color = 'white' : color = 'black';
 return(<Icon onPress={onPress} name={name as any} size={size} color={color} />);
};
export const IconCustom = ({name, size = 30, onPress, color, style}: Props) => {
 return(<Icon onPress={onPress} name={name as any} size={size} color={color} style={style}/>);
};
