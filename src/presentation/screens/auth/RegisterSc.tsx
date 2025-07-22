import { Alert, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, CustomInput, CustomView, Texto } from '../../components';
import { IconCustom } from '../../icons/Icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/StackNavigatiorMain';
import { useAuthStore } from '../../store';

interface Props extends StackScreenProps<RootStackParamList,'RegisterSc'>{}
export const RegisterSc = ({navigation}: Props) => {
  const [form,setForm] = React.useState({username: '', email: '', password: ''});
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorUsername, setErrorUsername] = React.useState(false);
  const [isPosting,setIsPosting] = React.useState(false);
  const {register} = useAuthStore();
  const eventoRegister = async () => {
    let hasError = false;
        if (form.username.length === 0) {
          setErrorUsername(true);
          hasError = true;
        } else {
          setErrorUsername(false);
        }
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
    setIsPosting(true);
    const success = await register(form.username,form.email,form.password);
    setIsPosting(false);
    if (success){return;}
    Alert.alert('Error','No se pudo registrar');
  };
  return (
    <CustomView margin style={styles.customView}>
      <View>
        <Image source={require('../../assets/HeroImg.png')} style={styles.logoImage}/>
      </View>
      <CustomInput
        placeholder="UserName"
        icon={IconCustom}
        iconName="person"
        error={errorUsername}
        value={form.username}
        onChangeText={(username) => setForm({...form,username}) }
      />
      <CustomInput
        placeholder="E-mail"
        icon={IconCustom}
        iconName="at-circle-sharp"
        email
        error={errorEmail}
        value={form.email}
        onChangeText={(email) => setForm({...form, email})}
      />
      <CustomInput
        placeholder="Password"
        error={errorPassword}
        value={form.password}
        onChangeText={(password) => setForm({...form, password})}
        secureText
      />
      <View style={styles.separator} />
            <Button text="Ingresar" disable={isPosting} onPress={eventoRegister} />
      <View style={styles.separator} />
      <View style={styles.register}>
              <Texto text="¿Ya tienes Cuenta? " />
              <Texto text=" Inicia Sesion" style={styles.boldText} onPress={() => navigation.goBack()} />
           </View>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  logoImage:{
    height: 140,
    width: 150,
},
  customView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
  separator: {
  marginTop: 5,
},
register:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
},
  boldText: {
  fontWeight: 'bold',
},
});
