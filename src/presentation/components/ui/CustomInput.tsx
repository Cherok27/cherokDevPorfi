import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { ThemeContext } from '../../context/ThemeContext';
import { IconCustom } from '../../icons/Icons';


interface Props {
    placeholder: string;
    secureText?: boolean;
    value?: string;
    error: boolean;
    email?: boolean;
    icon?: React.ComponentType<{ name: string; size:number; color:string;}>;
    iconName?: string;
    onChangeText: (value: string) => void;
}
export const CustomInput = ({placeholder, secureText = false, value, error, email = false, icon: IconComponent,iconName, onChangeText}: Props) => {
    const {colors} = useContext(ThemeContext);
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(!secureText);
  return (
    <View style={styles.container}>
     <View style={[styles.inputContainer, isFocused && {borderColor: colors.primary}, error && styles.inputError]}>
     {iconName && IconComponent && (<IconComponent name={iconName} size={20} color={colors.primary}/>) }
        <TextInput
        style={[styles.input,{color: colors.text}]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        keyboardType={email ? 'email-address' : 'default'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={!isPasswordVisible}
      />
      {secureText && (<TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
        <IconCustom name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} color={colors.primary} />
      </TouchableOpacity>)}
     </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        marginVertical: 10,
    },
    errorText:{
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 50,
        width: '40%',
      },
      inputError: {
        borderColor: 'red',
      },
      icon: {
        marginRight: 8,
      },
      input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
      },
});
