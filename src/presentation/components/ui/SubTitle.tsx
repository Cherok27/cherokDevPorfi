import { Text, View } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { globalStyles } from '../../../config/theme/Theme';

interface Props {
    text: string;
    safe?: boolean;
}
export const SubTitle = ({text, safe}: Props) => {
    const {colors} = useContext(ThemeContext);
  return (
    <View>
      <Text style={{...globalStyles.subTitle,
        color: colors.text,
        marginBottom: safe ? 10 : 0 }}>{text}</Text>
    </View>
  );
};
