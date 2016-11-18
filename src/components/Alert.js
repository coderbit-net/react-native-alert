import React, { PureComponent, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Alert extends PureComponent {
  static propTypes = {
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
          text: PropTypes.string.isRequired,
          onPress: PropTypes.func.isRequired,
          style: PropTypes.string.isRequired
        }
      )
    )
  };

  _renderButtons(buttons) {
    return (
      buttons.map(
        (button, index) => {
          return (
            <TouchableOpacity
              style={buttonsStyles[button.style]}
              key={index}
              onPress={button.onPress}
            >
              <Text style={[buttonsStyles[button.style + 'Text'], buttonsStyles.text]}>
                {button.text}
              </Text>
            </TouchableOpacity>
          )
        }
      )
    )
  };

  render() {
    const {buttons} = this.props;

    return (
      <View style={styles.alert}>
        <View style={styles.overlay}/>
        <View style={styles.container}>
          <View style={styles.body}>
            <Text>Touch ID</Text>
            <Text>1234</Text>
          </View>
          <View style={styles.actions}>
            {this._renderButtons(buttons)}
          </View>
        </View>
      </View>
    )
  }
}

const absolutePosition = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};

const styles = StyleSheet.create({
  alert: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...absolutePosition
  },
  overlay: {
    backgroundColor: '#B26E0F',
    flex: 1,
    opacity: 0.5,
    ...absolutePosition,
  },
  container: {
    width: 305,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 0,
  },
  body: {},
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const buttonWrapper = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  height: 55
};

const buttonsStyles = {
  negative: {
    ...buttonWrapper,
    backgroundColor: 'transparent',
  },
  positive: {
    ...buttonWrapper,
    backgroundColor: '#FFB144'
  },
  neutral: {
    ...buttonWrapper,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 18
  },
  negativeText: {
    color: '#95a5b2',
  },
  positiveText: {
    color: '#FFFFFF',
  },
  neutralText: {
    color: '#FFB144'
  },
};
