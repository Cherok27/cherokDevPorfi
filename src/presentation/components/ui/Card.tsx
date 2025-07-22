import { PropsWithChildren, ReactNode, useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props extends PropsWithChildren {
    style?: StyleProp<ViewStyle>
    children?: ReactNode;
}
export const Card = ({style, children}: Props) => {
    const {colors} = useContext(ThemeContext);
  return (
    <View  style={[{ backgroundColor: colors.cardBackground },styles.card, style]}>
      {children}
    </View>
  );
};


const styles = StyleSheet.create({
    card:{
        borderRadius:10,
        padding:10,
    },
});
