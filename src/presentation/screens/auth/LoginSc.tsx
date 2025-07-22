import { Alert, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, CustomInput, CustomView, Texto } from '../../components';
import { StackScreenProps } from '@react-navigation/stack';
import { IconCustom } from '../../icons/Icons';
import { colors } from '../../../config/theme/Theme';
import { RootStackParams } from '../../routes/StackNavigator';
import { useAuthStore } from '../../store';

interface Props extends StackScreenProps<RootStackParams, 'LoginSc'> {}
export const LoginSc = ({navigation}: Props) => {
    const [form, setForm] = React.useState({email: '', password: ''});
    const [errorEmail, setErrorEmail] = React.useState(false);
    const [errorPassword, setErrorPassword] = React.useState(false);
    const [isPosting, setIsPosting] = React.useState(false);
    const {login} = useAuthStore();
    const eventoLogin = async () => {
        let hasError = false;
        if (form.email.length === 0) {
          setErrorEmail(true);
          hasError = true;
        } else {
          setErrorEmail(false);
        }
        if (form.password.length === 0) {
          setErrorPassword(true);
          hasError = true;
        } else {
          setErrorPassword(false);
        }
        if (hasError) {return;}
        console.log(form);
        setIsPosting(true);
        const success = await login(form.email,form.password);
        console.log(success);
        setIsPosting(false);
        if(success) {return;}
        Alert.alert('Error', 'Usuario o contraseña incorrectos');
    };
  return (
    <CustomView margin style={styles.customView}>
     <View style={styles.closeButton}>
            <IconCustom name="close" color={colors.primary} onPress={ ()=> navigation.goBack() } />
     </View>
     <View>
        <Image source={require('../../assets/HeroImg.png')} style={styles.logoImage}/>
     </View>
     <CustomInput
        placeholder="E-mail"
        email={true}
        value={form.email}
        error={errorEmail}
        icon={IconCustom}
        iconName="at-circle-sharp"
        onChangeText={(email)=>setForm({...form, email})}
     />
     <CustomInput
        placeholder="Password"
        secureText={true}
        value={form.password}
        error={errorPassword}
        onChangeText={(password) => setForm({...form, password})}
     />
     <View style={styles.separator} />
      <Button text="Ingresar" disable={isPosting} onPress={eventoLogin} />
     <View style={styles.separator} />
     <View style={styles.register}>
        <Texto text="¿No tienes Cuenta? " />
        <Texto text=" Crea Una" style={styles.boldText} onPress={() => navigation.navigate('RegisterSc')} />
     </View>
    </CustomView>
  );
};

const styles = StyleSheet.create({
    logoImage:{
        height: 140,
        width: 150,
    },
    customView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 35,
        right: 20,
      },
    separator: {
        marginTop: 5,
      },
    boldText: {
        fontWeight: 'bold',
      },
    register:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});
