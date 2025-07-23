import React, { useState, useMemo } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, CustomView, Texto } from '../../components';
import { abecedario, palabrasAhorcado } from '../../../data/dataConfig';
import { Dibujo } from '../../components/ui/dibujo';


function getRandomWord() {
  const idx = Math.floor(Math.random() * palabrasAhorcado.length);
  return palabrasAhorcado[idx];
}

export const GameSc = () => {
  const [word, setWord] = useState(getRandomWord());
  const [guessed, setGuessed] = useState<string[]>([]);
  const [fails, setFails] = useState(0);
  const maxFails = 6;

  const displayWord = useMemo(
    () =>
      word
        .split('')
        .map((l) => (guessed.includes(l) ? l : '_'))
        .join(' '),
    [word, guessed]
  );

  const isWinner = word.split('').every((l) => guessed.includes(l));
  const isLoser = fails >= maxFails;

  const handleLetter = (letter: string) => {
    if (guessed.includes(letter) || isWinner || isLoser) {return;}
    if (word.includes(letter)) {
      setGuessed([...guessed, letter]);
    } else {
      setGuessed([...guessed, letter]);
      setFails(fails + 1);
    }
  };

  const resetGame = () => {
    setWord(getRandomWord());
    setGuessed([]);
    setFails(0);
  };

  return (
    <CustomView style={styles.container}>
      <Dibujo fails={fails}/>
      <Texto style={styles.word} text={displayWord}/>
      <Texto style={styles.info} text={`Errores: ${fails} / ${maxFails}`}/>
      <View style={styles.letters}>
        {abecedario.map((l) => (
          <TouchableOpacity
            key={l}
            style={[
              styles.letterBtn,
              guessed.includes(l) && styles.letterBtnDisabled,
            ]}
            onPress={() => handleLetter(l)}
            disabled={guessed.includes(l) || isWinner || isLoser}
          >
            <Texto style={styles.letter} text={l}/>
          </TouchableOpacity>
        ))}
      </View>
      {(isWinner || isLoser) && (
        <View style={styles.result}>
          <Texto style={styles.resultText} text={isWinner ? '¡Ganaste!' : `Perdiste. La palabra era: ${word}`}/>
          <Button onPress={resetGame} text="Jugar de nuevo" />
        </View>
      )}
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  word: {
     fontSize: 32,
     letterSpacing: 2,
     marginBottom: 20,
    },
  info: {
     fontSize: 18,
     marginBottom: 10,
    },
  letters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  letterBtn: {
    backgroundColor: '#efb810',
    margin: 3,
    padding: 10,
    borderRadius: 5,
    minWidth: 32,
    alignItems: 'center',
  },
  letterBtnDisabled: {
    backgroundColor: '#ccc',
  },
  letter: {
    fontSize: 18,
    color: '#222',
  },
  result: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 22,
    marginBottom: 10 },
  resetBtn: {
    backgroundColor: '#0b2562',
    padding: 10,
    borderRadius: 5,
  },
  resetText: {
    color: '#fff',
    fontSize: 16 },
});
