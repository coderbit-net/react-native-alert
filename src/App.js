import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button
} from 'react-native';
import Alert from './components/Alert';
import TouchIcon from './components/graphics/TouchIcon';

export default class App extends Component {

  _onSimpleAlert = () => {
    this._simpleAlert._show();
  };

  _onChoiceAlert = () => {
    this._choiceAlert._show();
  };

  _onNegativePress = () => {
    console.log('Negative button pressed');
  };

  _onPositivePress = () => {
    console.log('Positive button pressed');
  };

  _onNeutralPress = () => {
    console.log('Neutral button pressed');
  };

  _alertChoiceButtons = [
    {
      text: 'No',
      onPress: this._onNegativePress,
      style: 'negative'
    },
    {
      text: 'Yes, I do',
      onPress: this._onPositivePress,
      style: 'positive'
    }
  ];

  _alertSimpleButton = [
    {
      text: 'Cancel',
      onPress: this._onNeutralPress,
      style: 'neutral'
    }
  ];

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.info}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            This is a sample applicatoin for {"\n"}
            custom alert popup component
          </Text>
        </View>
        <View style={styles.actions}>
          <View style={styles.buttonWrap}>
            <Button
              onPress={this._onSimpleAlert}
              color="white"
              title="Simple Alert"
            />
          </View>
          <View style={styles.buttonWrap}>
            <Button
              onPress={this._onChoiceAlert}
              color="white"
              title="Choice Alert"
            />
          </View>
        </View>
        <Alert
          ref={(a) => {
            this._simpleAlert = a
          }}
          icon={<TouchIcon />}
          title="Just FYI"
          text="React native is the fastest way to build a multiplatform application "
          buttons={this._alertSimpleButton}
        />
        <Alert
          ref={(a) => {
            this._choiceAlert = a
          }}
          icon={<TouchIcon />}
          title="Touch ID"
          text="Would you like to activate your Touch ID to log in?"
          buttons={this._alertChoiceButtons}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006EB2',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    flex: 1,
  },
  buttonWrap: {
    width: 200,
    alignSelf: 'center',
    marginVertical: 20,
    paddingVertical: 6,
    backgroundColor: '#2BADFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 2,
  }
});
