import { StyleSheet } from 'react-native';

export interface ThemeColors {
    primary: string;
    text: string;
    background: string;
    cardBackground: string;
    buttonTextColor: string;
    icons?: string;}
export const colors: ThemeColors = {
 primary: '#B69F5E', // Iconos activos
 text: '#919bc9', // Texto y letras
 background: '#2B2B2B', // Fondo principal
 cardBackground: '#404040',
 buttonTextColor: 'white',
 icons: '#8B8B8B', // Iconos inactivos
};
export const lightColors: ThemeColors = {
 primary: '#B69F5E',
 text: '#5e4b00',
 background: '#FFFFFF',
 cardBackground: '#F1F5F6',
 buttonTextColor: 'white',
};
export const darkColors: ThemeColors = {
  primary: '#B69F5E',
  text: '#efb810',
  background: '#2B2B2B',
  cardBackground: '#404040',
  buttonTextColor: 'black',
};
export const globalStyles = StyleSheet.create({
    globalMargin: {
        paddingHorizontal:20,
        paddingVertical:20,
        flex:1,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    btnPrimary: {
        backgroundColor: colors.primary, // Color principal para botones
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    btnPrimaryText: {
        color: colors.buttonTextColor, // Texto de los botones
        fontSize: 16,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
      },
});
