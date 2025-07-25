import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { CustomView } from '../../components/CustomView';
import { Card } from '../../components/ui/Card';
import { Texto } from '../../components';
import { Icons, IconCustom } from '../../icons/Icons';

import { emailPage, webPage } from '../../../helpers/linking';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/StackNavigatiorMain';
import { BannerName } from '../../components/ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { STAGE,API_URL_IOS,API_URL_ANDROID ,API_URL as  PROD_URL } from '@env';
interface Props extends StackScreenProps<RootStackParamList,'HomeSc'>{}
export const HomeSc = ({navigation}:Props) => {
const {top} = useSafeAreaInsets();
console.log(STAGE,API_URL_ANDROID,API_URL_IOS,PROD_URL)
    return(
        <CustomView   >
          <ScrollView>
            <Card style={[styles.cardContainer, {marginTop: top}]}>
                <BannerName/>
                <View style={styles.rightButton}>
                  <Icons name="settings" onPress={() => navigation.navigate('StackNavigator')}/>
                </View>
                <Card style={styles.imageCenterView}>
                    <Image style={styles.imageCenterMain}
                    resizeMode="contain"   source={require('../../assets/PorfoliFoto.png')}/>
                </Card>
                <View style={styles.Separator}/>
                <Card style={styles.cardDescription}>
                    <View style={styles.Separator}/>
                    <Texto text="José Carlos" style={styles.h1} />
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
                <Card style={styles.lineCardContainer}>
                    <Texto text="Últimos Proyectos" style={styles.h1}/>
                    <View style={styles.lineCard}/>
                </Card>
                <View style={[styles.rowCards]}>
                    {/*Hacer la route /lastedProyect  */}
                  <Pressable onPress={() => webPage('josecarlosrh93@gmail.com')}>
                    <Card style={styles.proyectCard} >
                        <View style={styles.proyectImg}>
                            <Image source={{uri:'https://res.cloudinary.com/dypt8ovw2/image/upload/v1753347617/StrategosBiotech_vqhbt1.png'}} resizeMode= "contain" style={styles.imageCenterMain} />
                        </View>
                        <Texto text= "Grima Scale"  style={styles.proyectText}/>
                    </Card>
                  </Pressable>
                  <Pressable onPress={() => webPage('https://github.com/Cherok27')}>
                    <Card style={styles.proyectCard}>
                        <View style={styles.proyectImg}>
                            <Image source={{uri:'https://res.cloudinary.com/dypt8ovw2/image/upload/v1749826339/Bluey_k5sjhz.png'}} resizeMode= "contain" style={styles.imageCenterMain} />
                        </View>
                        <Texto text="Bluey" style={styles.proyectText} />
                    </Card>
                  </Pressable>
                  <Pressable onPress={() => webPage('https://github.com/Cherok27')}>
                    <Card style={styles.proyectCard}>
                        <View style={styles.proyectImg}>
                            <Image source={{uri:'https://res.cloudinary.com/dypt8ovw2/image/upload/v1753349225/Cafeteria-4all_br5noh.png'}} resizeMode= "contain" style={styles.imageCenterMain} />
                        </View>
                        <Texto text="Cafeteria 4All" style={styles.proyectText} />
                    </Card>
                  </Pressable>
                </View>

                <Card style={styles.lineCardContainer}>
                    <Texto text="Tech Stack" style={styles.h1}/>
                    <View style={styles.lineCard}/>
                </Card>
                <View style={styles.rowCards}>
                    <ScrollView horizontal ={true}>
                    <Card>
                        <Image style={styles.imageCenter} resizeMode="contain" source={require('../../assets/node.png')}/>
                    </Card>
                    <Card>
                        <Image style={styles.imageCenter} resizeMode="contain" source={{uri: 'https://res.cloudinary.com/dypt8ovw2/image/upload/v1753351768/Typescript_logo_b88mup.png'}}/>
                    </Card>
                    <Card>
                        <Image style={styles.imageCenter} resizeMode="contain" source={require('../../assets/react.png')}/>
                    </Card>
                    <Card>
                        <Image style={styles.imageCenter} resizeMode="contain" source={require('../../assets/js.png')}/>
                    </Card>
                    <Card>
                        <Image style={styles.imageCenter} resizeMode="contain" source={{uri: 'https://res.cloudinary.com/dypt8ovw2/image/upload/v1753350772/nestjs-icon_bbygmh.png'}}/>
                    </Card>
                    <Card>
                        <Image style={styles.imageCenter} resizeMode="contain" source={{uri: 'https://res.cloudinary.com/dypt8ovw2/image/upload/v1753353257/css-3_bynqoe.png'}}/>
                    </Card>
                    <Card>
                        <Image style={styles.imageCenter} resizeMode="contain" source={{uri: 'https://res.cloudinary.com/dypt8ovw2/image/upload/v1753353463/Cornmanthe3rd-Plex-Other-html-5.512_hy3lep.png'}}/>
                    </Card>
                    <Card>
                        <Image style={styles.imageCenter} resizeMode="contain" source={{uri: 'https://res.cloudinary.com/dypt8ovw2/image/upload/v1753353613/icons8-mongodb-96_c7fnlm.png'}}/>
                    </Card>
                    </ScrollView>
                </View>
                <Card style={styles.lineCardContainer}>
                    <Texto text="Contacto" style={styles.h1}/>
                    <View style={styles.lineCard}/>
                </Card>
                <View style={styles.rowCards}>
                  <Pressable style={styles.flex1} onPress={() => emailPage('josecarlosrh93@gmail.com')}>
                  <Card style={styles.emailCard} >
                      <IconCustom name="mail"  color="white"/>
                      <Texto text= "Email:" style={styles.emailText} />
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
        // marginTop: top,
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
        alignItems: 'center',
        justifyContent: 'space-around',
        // paddingBottom: 30,
    },
    flex1:{
        flex: 1,
        marginRight: 10,
    },
    githubCard: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#272727',
        flex: 1,
    },
    rightButton:{
        flexDirection:'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    lineCard: {
        height: 0.3,
        backgroundColor: '#efb810',
        flex:1,
        marginLeft: 9,
    },
    lineCardContainer: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    proyectCard: {
        height: 100,
        width: 100,
    },
    proyectImg: {
        height: '100%',
        backgroundColor: '#919bc9',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        // marginBottom: 3,
    },
    proyectText: {
        borderColor: '#efb810',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        padding: 3,
    },
});
