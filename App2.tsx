import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    // Lakukan logika sign-in di sini
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Welcome</Text>
      <Text style={styles.user}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan username anda"
        value={username}
        onChangeText={text => setUsername(text)}
      />
        <Text style={styles.user}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan password anda"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#FF7F50',
    padding: 20,
    marginVertical: 20,
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  user:{
    fontWeight: 'regular',
    textAlign: 'left',
    marginBottom: 10,
  },
});

export default App;
