import React, { PureComponent, PropTypes } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const Screen = Dimensions.get('window');

export default class Alert extends PureComponent {
  static propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
    text: PropTypes.string,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
          text: PropTypes.string.isRequired,
          onPress: PropTypes.func.isRequired,
          style: PropTypes.string.isRequired
        }
      )
    )
  };

  state = {
    visible: this.props.visible || false,
    animatedValue: new Animated.Value(1000)
  };

  _show = () => {
    this.setState({visible: true});
    Animated.timing(this.state.animatedValue, {
      toValue: 0,
      duration: 300
    }).start();
  };

  _hide = () => {
    this.setState({visible: false});
    Animated.timing(this.state.animatedValue, {
      toValue: 1000,
      duration: 400
    }).start();
  };

  _renderButtons(buttons) {
    return (
      buttons.map(
        (button, index) => {
          return (
            <TouchableOpacity
              style={buttonsStyles[button.style]}
              key={index}
              onPress={ () => {
                button.onPress();
                this._hide();
              }}
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
    const {animatedValue} = this.state;
    const {
      icon,
      title,
      text,
      buttons
    } = this.props;

    console.log(animatedValue);
    return (
      <Animated.View style={[
        styles.alert,
        {top: animatedValue}
      ]}>
        <View style={styles.overlay}/>
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.icon}>
              {icon}
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
          </View>
          <View style={styles.actions}>
            {this._renderButtons(buttons)}
          </View>
        </View>
      </Animated.View>
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
    ...absolutePosition,
  },
  overlay: {
    backgroundColor: '#000000',
    flex: 1,
    opacity: 0.7,
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
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  icon: {
    paddingVertical: 10
  },
  title: {
    paddingVertical: 6,
    fontSize: 18,
    fontWeight: '600',
    color: '#2d363d',
  },
  text: {
    width: 242,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#95a5b2',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#dadfe4'

  },
});

const buttonWrapper = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  height: 55,

};

const buttonsStyles = {
  negative: {
    ...buttonWrapper,
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 8,
    borderWidth: 0,
  },
  positive: {
    ...buttonWrapper,
    backgroundColor: '#FFB144',
    borderBottomRightRadius: 8,
    borderWidth: 0,
  },
  neutral: {
    ...buttonWrapper,
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 0,
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
