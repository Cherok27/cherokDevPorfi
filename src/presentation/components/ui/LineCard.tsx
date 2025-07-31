import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>;
}
export const LineCard = ({style}: Props) =>  {
    const {colors} = useContext(ThemeContext);
    return (
        <View style={[styles.lineCard, { backgroundColor: colors.text },style]} />
    );
};
const styles = StyleSheet.create({
    lineCard: {
        height: 1,
        width: '100%',
        flexDirection:'row',
        alignContent:'center',
    },
});
