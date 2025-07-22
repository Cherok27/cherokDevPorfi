import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { Card, CustomView, Texto } from '../../components';
import { useAuthStore } from '../../store';
import LinearGradient from 'react-native-linear-gradient';
import { LoadingSc } from '../loading/LoadingSc';


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
            <Texto text={user.username}/>
          </Card>
          <View style={styles.Separator}/>
          <View>
              <Texto text={`Joined ${new Date(user.createdAt).toLocaleDateString('es-Es',{ year: 'numeric', month: 'long'})}`}/>
          </View>
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

      },
      Separator:{
        marginTop:20,
      },
});
