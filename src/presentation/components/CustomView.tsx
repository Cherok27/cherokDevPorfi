import { ReactNode, useContext } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import {  globalStyles } from '../../config/theme/Theme';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    margin?: boolean;
}
export const CustomView = ({style, children, margin}:Props) => {
    const {colors} = useContext(ThemeContext);
    return (
        <View style={[
            globalStyles.mainContainer,
            margin ? globalStyles.globalMargin : null,
            {backgroundColor: colors.background},
            style,
        ]}>
            {children}
        </View>
    );
};
