import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ButtonComponent from './ButtonComponent';
import TextComponent from './TextComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ButtonComponent />
      <TextComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;