import { StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomView, MenuConfig, SubTitle } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { cuenta, cuentaOn, helper, info, legal, premium } from '../../../data/dataConfig';
import { useAuthStore } from '../../store';
import { ButtonDarkLight } from '../../components/ui/ButtonDarkLight';

export const ConfigSc = () => {
    const {status} = useAuthStore();
  return (
    <CustomView margin style={styles.container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.buttonTheme} >
          <ButtonDarkLight/>
          <View style= {styles.separador} />
          </View>
          <SubTitle  text="Premium" safe />
          {premium.map((pri,index) => (<MenuConfig key={pri.component} {...pri} isFirst={index === 0} isLast={index === premium.length - 1} />))}
          <View style= {styles.separador} />
          <SubTitle safe text="Cuenta" />
          { status === 'authenticated' ?
          cuentaOn.map((pri,index) => ( <MenuConfig key={pri.component} {...pri} isFirst = {index === 0} isLast = {index === cuentaOn.length - 1}/>
            ))
            :
            cuenta.map((pri,index) => (<MenuConfig key={pri.component} {...pri} isFirst = {index === 0} isLast = {index === cuenta.length - 1}/>))
          }
          <View style= {styles.separador} />
          <SubTitle text="Ayuda " safe />
          {helper.map((pri,index)=>(
              <MenuConfig key={pri.component} {...pri} isFirst = {index === 0} isLast = {index === helper.length - 1}/>
            ))}
          <View style= {styles.separador} />
          <SubTitle text="Sobre mi y las App" safe />
          {info.map((pri,index) => (
              <MenuConfig key={pri.component} {...pri} isFirst = {index === 0}  isLast = {index === info.length - 1} />
            ))}
          <View style= {styles.separador} />
          <SubTitle text="Legal" safe/>
          {legal.map((pri,index) => (
              <MenuConfig key={pri.component} {...pri} isFirst = {index === 0}  isLast = {index === legal.length - 1}/>
            ))}
          <View style= {styles.separador} />
        </ScrollView>
    </CustomView>
  );
};
const styles = StyleSheet.create({
 separador:{
    marginTop:30,
    },
 container:{
    paddingBottom: 90,
    },
 buttonTheme:{
    flexDirection: 'row-reverse',
    marginRight: 7.5,
    },
});
