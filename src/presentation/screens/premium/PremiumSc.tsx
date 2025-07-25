import { Text, StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomView } from '../../components';
import { STAGE,API_URL_IOS,API_URL_ANDROID ,API_URL as  PROD_URL } from '@env';

export const  PremiumSc = ()=> {
console.log(STAGE,API_URL_ANDROID,API_URL_IOS,PROD_URL)

    return (
      <CustomView>
        <Text>PremiumSc</Text>
      </CustomView>
    );
};

const styles = StyleSheet.create({});
