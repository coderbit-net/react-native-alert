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
          icon: PropTypes.node,
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
    const {
      icon,
      title,
      text,
      buttons
    } = this.props;

    return (
      <View style={styles.alert}>
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
