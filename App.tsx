import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import Programmer from './assets/programmer.jpeg';
import Title from './src/components/Title';
import Input from './src/components/Input';

const App = () => {
  return (
    <View>
      <Title text="RN" />
      <ScrollView>
        <Input placeholder="Masukan nama anda" />
        <Input placeholder="Masukan password anda" />
        <Input placeholder="Masukan email anda" />
        <View style={style.container}>
          <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
        </View>
        <Image
          source={require('./assets/programmer.jpeg')}
          style={{width: 200, height: 200}}
        />
        <Image source={Programmer} style={{width: 200, height: 200}} />
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={{width: 200, height: 200}}
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default App;
