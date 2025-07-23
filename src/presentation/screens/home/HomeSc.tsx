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
            <Card style={styles.cardContainer}>
                <View style={styles.rightButton}>
                  <Icons name="settings" onPress={() => navigation.navigate('StackNavigator')}/>
                </View>
                <View style={styles.Separator}/>
                <LogoImg/>
                <View style={styles.Separator}/>
                <Card style={styles.imageCenterView}>
                    <Image style={styles.imageCenterMain}
                    resizeMode="contain"   source={require('../../assets/PorfoliFoto.png')}/>
                </Card>
                <View style={styles.Separator}/>
                <Card style={styles.cardDescription}>
                    <View style={styles.Separator}/>
                    <Texto text="José Carlos Ramos Hernández" style={styles.h1} />
                    <View style={styles.Separator}/>
                    <View style={styles.ViewInfo}>
                        <View style={styles.ViewInfo2}>
                            <Icons name="location" size={15}/>
                            <Texto text="Las Palmas,Gran canaria" />
                        </View>
                        <View style={styles.ViewInfo2}>
                            <Icons name="pin" size={15}/>
                            <Texto text="Full-Stack Developer" />
                        </View>
                        <View style={styles.ViewInfo2}>
                            <Icons name="gift" size={15}/>
                            <Texto text="Agosto 1993" />
                        </View>
                    </View>
                </Card>
                <View style={styles.Separator}/>
                <Texto text="Últimos Proyectos"/>
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
            </Card>
          </ScrollView>
        </CustomView>
    );
};
const styles = StyleSheet.create({
    cardContainer: {
        borderLeftColor: '#efb810',
        borderRightColor: '#efb810',
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderRadius: 0,
    },
    Separator:{
        marginTop:20,
      },
    ViewInfo:{
        flexDirection:'column',
        justifyContent: 'center',
    },
    ViewInfo2: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    cardDescription:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        margin: -10,
        borderRadius: 0,
    },
    imageCenter:{
        height: 50,
        width: 50,
    },
    imageCenterMain:{
        height: '100%',
        width: '100%',
    },
    imageCenterView:{
        height: 150,
        width:150,
        alignSelf: 'center',
        backgroundColor: '#333333',
        borderColor: '#efb810',
        borderWidth: 0.5,
        borderRadius: 100,
        paddingBottom: 0,
        overflow: 'hidden',
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
        marginTop: 10,
    },
});
