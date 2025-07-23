import { StyleSheet, View } from 'react-native';

export const Dibujo = ({ fails }: { fails: number }) => (
  <View style={styles.hangmanContainer}>
    {/* Base */}
    <View style={styles.base} />
    {/* Poste */}
    <View style={styles.pole} />
    {/* Viga */}
    <View style={styles.beam} />
    {/* Soga */}
    <View style={styles.rope} />
    {fails > 0 && <View style={styles.head} />}
    {fails > 1 && <View style={styles.body} />}
    {fails > 2 && <View style={styles.leftArm} />}
    {fails > 3 && <View style={styles.rightArm} />}
    {fails > 4 && <View style={styles.leftLeg} />}
    {fails > 5 && <View style={styles.rightLeg} />}
  </View>
);
const styles = StyleSheet.create({
  hangmanContainer: {
    height: 180,
    width: 120,
    alignItems: 'center',
    marginBottom: 10,
  },
  base: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    width: 100,
    height: 10,
    backgroundColor: '#efb810',
    borderRadius: 5,
  },
  pole: {
    position: 'absolute',
    bottom: 6, left: 30,
    width: 10, height: 170,
    backgroundColor: '#efb810',
    borderRadius: 5,
  },
  beam: {
    position: 'absolute',
    top: 0, left: 30,
    width: 50,
    height: 10,
    backgroundColor: '#efb810',
    borderRadius: 5,
  },
  rope: {
    position: 'absolute',
    top: 10, left: 75,
    width: 2, height: 25,
    backgroundColor: '#efb810',
  },
  head: {
    position: 'absolute',
    top: 35,
    left: 62,
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: '#efb810',
  },
  body: {
    position: 'absolute',
    top: 63,
    left: 75,
    width: 2,
    height: 35,
    backgroundColor: '#efb810',
  },
  leftArm: {
    position: 'absolute',
    top: 70,
    left: 75,
    width: 2,
    height: 20,
    backgroundColor: '#efb810',
    transform: [{ rotate: '-45deg' }],
  },
  rightArm: {
    position: 'absolute',
    top: 70,
    left: 75,
    width: 2,
    height: 20,
    backgroundColor: '#efb810',
    transform: [{ rotate: '45deg' }],
  },
  leftLeg: {
    position: 'absolute',
    top: 98,
    left: 75,
    width: 2,
    height: 22,
    backgroundColor: '#efb810',
    transform: [{ rotate: '-30deg' }],
  },
  rightLeg: {
    position: 'absolute',
    top: 98,
    left: 75,
    width: 2,
    height: 22,
    backgroundColor: '#efb810',
    transform: [{ rotate: '30deg' }],
},
});
