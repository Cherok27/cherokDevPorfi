import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Button, CustomView, Texto } from '../../components';
import { CustomTextInput } from '../../components/ui';

export const ChatSc = () => {
  const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') {return;}

    const newMessage = {
      id: Date.now().toString(),
      text: input,
    };

    setMessages((prev) => [newMessage, ...prev]);
    setInput('');
  };

  return (
    <CustomView margin style={styles.container}>
      <FlatList
        data={messages}
        inverted
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageBubble}>
            {/* <Texto text={item.} style={styles.messageText}  /> */}
            <Texto text={item.text} style={styles.messageText}  />
          </View>
        )}
        contentContainerStyle={styles.messagesList}
      />

      <View style={styles.inputContainer}>
        <CustomTextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder=""
        />
        {input.length > 0 &&
        <Button text="enviar" onPress={sendMessage} styles={styles.sendText} /> }
      </View>
    </CustomView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagesList: {
    padding: 10,
  },
  messageBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    padding: 10,
    marginBottom: 8,
    maxWidth: '80%',

  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
  sendText: {
    marginLeft:10,
  },
});
