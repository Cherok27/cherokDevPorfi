import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { Card, CustomView, Texto } from '../../components';
import { useAuthStore } from '../../store';
import LinearGradient from 'react-native-linear-gradient';
import { LoadingSc } from '../loading/LoadingSc';
import { IconCustom } from '../../icons/Icons';


export const MeinNutzerSc = () => {
    const user = useAuthStore((state) => state.user);
    console.log(user);
    if (user) {
      return (
        <CustomView margin>
          <Card style={styles.avatarContainer}>
            <LinearGradient
                colors={['#efb810', '#FFFFFF00']}
                style={styles.avatarRing}
              >
              <Card style={styles.avatarContainer}>
                <Image style={styles.avatar} resizeMode="contain" source={require('../../assets/PorfoliFoto2.png')}/>
              </Card>
            </LinearGradient>
          </Card>
          <Card style={styles.usernameContainer}>
            <Texto text={`${user.username} `}/>
            <IconCustom name= "pencil" size={20} color="#83817c"/>
          </Card>
          <View style={styles.Separator}/>
          <View>
              <Texto text={`Joined ${new Date(user.createdAt).toLocaleDateString('es-Es',{ year: 'numeric', month: 'long'})}`}/>
          </View>
          <View style={styles.Separator}/>
          <Card style={styles.emailCard} >
              <IconCustom name="mail"  color="white"/>
              <Texto text= "Email" style={styles.emailText} />
              <Texto text={user.email} style={styles.emailText} />
          </Card>
          <View style={styles.Separator}/>
          <Card style={styles.guardsCard} >
              <IconCustom name="shield-outline"  color="white"/>
              <Texto text= "Rols" style={styles.emailText} />
              <Texto text={user.roles.join(', ')} style={styles.emailText} />
          </Card>
          <View style={styles.Separator}/>
          <Card style={styles.lastLoginCard} >
              <IconCustom name="hourglass-outline"  color="white"/>
              <Texto text= "Last Login" style={styles.emailText} />
              <Texto text={new Date(user.createdAt).toLocaleDateString('es-Es',{ day: '2-digit',year: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'})} style={styles.emailText} />
          </Card>
        </CustomView>
      );
    } else {
      return(
        <LoadingSc/>
      );
    }
};
const styles = StyleSheet.create({
      avatarRing: {
        padding: 3,
        borderRadius: 100,
      },
      avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
      },
      avatarContainer: {
        padding: 6,
        alignSelf: 'center',
        borderRadius: 100,
      },
      usernameContainer:{
        alignSelf: 'center',
        flexDirection:'row',
      },
      Separator:{
        marginTop:20,
      },
      emailCard:{
        backgroundColor: '#0b2562',
        paddingLeft:20,
      },
      emailText:{
        color: '#ffff',
      },
      guardsCard:{
        backgroundColor: '#e57373',
        paddingLeft:20,
      },

      lastLoginCard:{
        backgroundColor: '#96b297',
        paddingLeft:20,
      },

});
