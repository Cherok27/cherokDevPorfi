import { StyleSheet } from 'react-native';
import { CustomView } from '../../components/CustomView';
import LottieView from 'lottie-react-native';

export const LoadingSc = () => {
    return (
        <CustomView style={styles.container}>
            <LottieView style={styles.animation} source={require('../../assets/LOTRLoading.json')} autoPlay loop/>
        </CustomView>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation:{
        width:600,
        height:600,
    },
});
