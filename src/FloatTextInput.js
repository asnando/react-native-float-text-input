import React, { PureComponent } from 'react';
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const initialState = {
  isFocused: false,
};

const floatTextInputInactive = {
  color: '#808080',
  top: 18,
  fontSize: 20,
};

const floatTextInputActive = {
  color: '#000000',
  top: 0,
  fontSize: 14,
};

const styles = StyleSheet.create({
  floatTextInputContainer: {
    paddingTop: 18,
    width: '100%',
    borderBottomWidth: 1,
  },
  floatTextInputLabel: {
    position: 'absolute',
    left: 0,
  },
  floatTextInputArea: {
    height: 32,
  },
});

class FloatTextInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentWillMount() {
    const { value } = this.props;
    this.animation = new Animated.Value(value ? 1 : 0);
  }

  componentDidUpdate() {
    const { isFocused } = this.state;
    const { value } = this.props;
    Animated.timing(this.animation, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 200,
    }).start();
  }

  handleFocus() {
    return this.setState({ isFocused: true });
  }

  handleBlur() {
    return this.setState({ isFocused: false });
  }

  render() {
    const { props, animation } = this;
    const { label, value } = props;
    const { isFocused } = this.state;
    const hasValue = !!value;

    const labelStyle = {
      top: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [
          floatTextInputInactive.top,
          floatTextInputActive.top,
        ],
      }),
      fontSize: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [
          floatTextInputInactive.fontSize,
          floatTextInputActive.fontSize,
        ],
      }),
      color: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [
          floatTextInputInactive.color,
          floatTextInputActive.color,
        ],
      }),
    };

    return (
      <View style={[
        styles.floatTextInputContainer,
        {
          borderColor: (
            isFocused || hasValue ? floatTextInputActive.color : floatTextInputInactive.color
          ),
        },
      ]}
      >
        <Animated.Text
          style={[
            styles.floatTextInputLabel,
            labelStyle,
          ]}
        >
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={styles.floatTextInputArea}
          onBlur={() => this.handleBlur()}
          onFocus={() => this.handleFocus()}
        />
      </View>
    );
  }
}

FloatTextInput.defaultProps = {
  value: '',
};

FloatTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default FloatTextInput;
