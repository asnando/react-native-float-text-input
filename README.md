# react-native-float-text-input
React Native text input with floating label

# Installation
```bash
npm i react-native-float-text-input --save
```

# Usage
```javascript
import { FloatTextInput } from 'react-native-float-text-input';

const App = () => {
  return (
    <View>
      <FloatTextInput
        label="RNFloatTextInputPlayground"
        value={this.state.value}
        onChangeText={value => this.setState({ value })}
      />
    </View>
  );
};
```
