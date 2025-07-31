import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card, CustomView, Texto } from '../../components';
import { LineCard } from '../../components/ui';
export const  PremiumSc = ()=> {

    return (
      <CustomView margin style={styles.container}>
        <Card style={styles.cardContainer} >
          <Texto text= "CherokDev" style={styles.h1} />
          <Texto text= "PREMIUM ACCESS"/>
          <View style={styles.Separator} />
          <LineCard style={styles.cardLine} />
          <View style={styles.Separator} />
          <Texto text= "⧫ Premium benefits"/>
          <View style={styles.olText}>
          <Texto text= " • Early access"/>
          <Texto text= " • Exclusive content"/>
          <Texto text= " • Priority support"/>
          </View>
          <Texto text= "⧫ Subcription Plan"/>
          <View style={styles.Separator} />
          <Button text= "Pagar" onPress={() =>{}} />
        </Card>
      </CustomView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
  },
  cardLine: {
    // width: 20,
  },
  h1:{
        fontSize:40,
  },
  Separator:{
        marginTop:20,
  },
  olText: {
    marginTop: 10,
    marginBottom: 10,
  },
});
