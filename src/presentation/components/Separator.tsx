import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>
}
export const Separator = ({style}: Props) => {
    const {colors} = useContext(ThemeContext);
  return (
    <View style={{ backgroundColor: colors.cardBackground }}>
        <View style={[styles.separator, { backgroundColor: colors.text}, style]} />
    </View>
  );
};


const styles = StyleSheet.create({
    separator:{
        alignSelf: 'center',
        width: '95%',
        height: 1,
        opacity: 0.1,
        marginVertical: 3,
    },
});
