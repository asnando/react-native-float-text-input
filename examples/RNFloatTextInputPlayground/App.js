import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { FloatTextInput } from 'react-native-float-text-input';

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <FloatTextInput
        label="RNFloatTextInputPlayground"
        value={value}
        onChangeText={value => setValue(value)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default App;
