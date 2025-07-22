import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { CustomView } from '../../components/CustomView';
import { Card } from '../../components/ui/Card';
import { Texto } from '../../components';
import { Icons, IconCustom } from '../../icons/Icons';
import { LogoImg } from '../../components/ui/LogoImg';
import { emailPage, webPage } from '../../../helpers/linking';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/StackNavigatiorMain';

interface Props extends StackScreenProps<RootStackParamList,'HomeSc'>{}
export const HomeSc = ({navigation}:Props) => {

    return(
        <CustomView margin >
            <ScrollView>
                <View style={styles.Separator}/>
                <LogoImg/>
                <View style={styles.rightButton}>
                  <Icons name="settings" onPress={() => navigation.navigate('StackNavigator')}/>
                </View>
                <View style={styles.Separator}/>
                <Card style={styles.imageCenterView}>
                    <Image style={styles.imageCenterMain} resizeMode="contain" source={require('../../assets/PorfoliFoto.png')}/>
                </Card>
                <Card style={styles.card}>
                <View style={styles.Separator}/>
                <Texto text="José Carlos Ramos Hernández" style={styles.h1} />
                <View style={styles.Separator}/>
                <View style={styles.ViewInfo}>
                    <Icons name="location" size={15}/>
                    <Texto text="Las Palmas,Gran canaria" />
                </View>
                <View style={styles.ViewInfo}>
                    <Icons name="pin" size={15}/>
                    <Texto text="Full-Stack Developer" />
                </View>
                <View style={styles.ViewInfo}>
                  <Icons name="gift" size={15}/>
                  <Texto text="Agosto 1993" />
                </View>
                </Card>
                <View style={styles.Separator}/>
                <View style={styles.rowCards}>
                  <Pressable style={styles.flex1} onPress={() => emailPage('josecarlosrh93@gmail.com')}>
                  <Card style={styles.emailCard} >
                      <IconCustom name="mail"  color="white"/>
                      <Texto text= "Email" style={styles.emailText} />
                      <Texto text= "josecarlosrh93@gmail.com" style={styles.emailText} />
                  </Card>
                  </Pressable>
                  <Pressable onPress={() => webPage('https://github.com/Cherok27')}>
                  <Card style={styles.githubCard}>
                      <IconCustom name="logo-github" color="white"/>
                      <Texto text="@Cherok27" style={styles.emailText}/>
                  </Card>
                  </Pressable>
                </View>
                <View style={styles.Separator}/>
                <View style={styles.rowCards}>
                <Card>
                  <Image style={styles.imageCenter} resizeMode="contain" source={require('../../assets/node.png')}/>
                </Card>
                <Card>
                  <Image style={styles.imageCenter} resizeMode="contain" source={require('../../assets/api.png')}/>
                </Card>
                <Card>
                 <Image style={styles.imageCenter} resizeMode="contain" source={require('../../assets/react.png')}/>
                </Card>
                <Card>
                  <Image style={styles.imageCenter} resizeMode="contain" source={require('../../assets/js.png')}/>
                </Card>
                </View>
            </ScrollView>
        </CustomView>
    );
};
const styles = StyleSheet.create({
    Separator:{
        marginTop:20,
      },
    ViewInfo:{
        flexDirection:'row',
        alignItems: 'center',
    },
    card:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageCenter:{
        height: 50,
        width: 50,
    },
    imageCenterMain:{
        height: 90,
        width:70,
    },
    imageCenterView:{
        alignSelf: 'center',
        backgroundColor: '#efb810',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderRadius:0,
        // backgroundColor: 'none',
        paddingTop: 10,
        paddingBottom: 0,
    },
    h1:{
        fontSize:20,
    },
    emailCard:{
        backgroundColor: '#0b2562',
        paddingLeft:20,
    },
    emailText:{
        color: '#ffff',
        // fontWeight: 'bold',
    },
    rowCards:{
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
    },
    flex1:{
        flex: 1,
        marginRight: 10,
    },
    githubCard: {
        // width: 90, // ajusta el ancho según lo que necesites
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#404040',
        flex: 1,
    },
    rightButton:{
        flexDirection:'row',
        justifyContent: 'flex-end',
    },
});
