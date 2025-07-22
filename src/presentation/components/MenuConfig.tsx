import { Pressable, StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { Texto } from './ui/text';
import Icon from '@react-native-vector-icons/ionicons';
import { ThemeContext } from '../context/ThemeContext';
import { IconCustom } from '../icons/Icons';
import { useNavigation } from '@react-navigation/native';
import { Separator } from '.';

interface Props {
    name: string;
    icon: string;
    component: string;
    isFirst?: boolean;
    isLast?: boolean;
}
export const MenuConfig = ({name, icon, component ,isFirst = false, isLast = false}: Props) => {
    const navigation = useNavigation<any>();
    const {colors} = useContext(ThemeContext);
  return (
    <>
      <Pressable onPress={() => navigation.navigate(component)}>
        <View style={{...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingTop: 10,
            }), ...isLast && {
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                paddingBottom: 10,
            },
            }}>
            <IconCustom name={icon} size={25} style={styles.icon}/>
            <Texto text={name} />
            <Icon name="chevron-forward-outline" style={styles.chevronIcon} color={colors.primary} />
        </View>
      </Pressable>
      { !isLast && <Separator/>}
    </>
  );
};


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    icon:{
        marginRight: 10,
    },
    chevronIcon:{
        marginLeft: 'auto',
    },
});
