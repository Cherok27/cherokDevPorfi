import { TextInput, StyleProp, TextStyle } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props{
    value: string,
    style?: StyleProp<TextStyle>,
    placeholder?: string,
    onChangeText?: ((text: string) => void)
}
export const CustomTextInput = ({style, value, placeholder, onChangeText}: Props) =>  {
    const {colors} = useContext(ThemeContext);
    return (
      <TextInput style={[{color: colors.text}, style]} value={value} onChangeText={onChangeText} placeholder={placeholder} />
    );

};
