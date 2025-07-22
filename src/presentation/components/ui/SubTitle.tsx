import { Text, View } from 'react-native';
import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';
import { globalStyles } from '../../../config/theme/Theme';

interface Props {
    text: string;
    safe?: boolean;
}
export const SubTitle = ({text, safe}: Props) => {
    const {top} = useSafeAreaInsets();
    const {colors} = useContext(ThemeContext);
  return (
    <View>
      <Text style={{...globalStyles.subTitle,
        color: colors.text,
        marginTop: 0,
        marginBottom: safe ? 10 : 0 }}>{text}</Text>
    </View>
  );
};

