import { Linking } from 'react-native';

export const webPage = (url: string) => {
    Linking.openURL(url).catch(err => console.error('No se pudo cargar la pagina', err));
};
export const emailPage = (mail: string) => {
    Linking.openURL(`mailto:${mail}`).catch(err => console.error('Email no se pudo cargar',err));
};
