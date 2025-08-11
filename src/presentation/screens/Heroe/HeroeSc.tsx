import { Image, StyleSheet, View } from 'react-native';
import { CustomView } from '../../components/CustomView';
import { Button, Texto } from '../../components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/StackNavigatiorMain';

interface Props extends StackScreenProps<RootStackParamList, 'HeroeSc'> {}
export const HeroeSc = ({navigation}:Props) => {
    return(
        <CustomView margin style={styles.customView}>
            <View>
                <Image source={require('../../assets/HeroImg.png')} style={styles.logoImage}/>
            </View>
            <View style={styles.Separator}/>
            <Texto text="Hello I am" style={styles.h2} />
            <Texto text="José Carlos" style={styles.h1} />
            <Texto text="Junnior Developer"/>
            <View style={styles.Separator}/>
            <Button text="Choose Wisely" onPress={() => navigation.navigate('HomeSc')}/>
        </CustomView>
    );
};
const styles = StyleSheet.create({
    customView:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage:{
        width:400,
        height:400,
    },
    Separator:{
        marginTop:20,
      },
    h1:{
        fontSize:30,
    },
    h2:{
        fontSize:20,
    },
});
