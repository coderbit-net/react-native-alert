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
import EmailIcon from './components/graphics/EmailIcon';
import EmailErrorIcon from './components/graphics/EmailErrorIcon';

export default class App extends Component {

  _onSimpleAlert = () => {
    this._simpleAlert._show();
  };

  _onChoiceAlert = () => {
    this._choiceAlert._show();
  };

  _onThankYouAlert = () => {
    this._thankYouAlert._show();
  };

  _onEmailErrorAlert = () => {
    this._emailErrorAlert._show();
  };

  _onMultiOptionAlert = () => {
    this._multiOptionAlert._show();
  };

  _onPhoneAlert = () => {
    this._phoneAlert._show();
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

  _alertSimpleButton = [
    {
      text: 'Got it',
      onPress: this._onNeutralPress,
      style: 'neutral'
    }
  ];

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

  _alertThankYouButton = [
    {
      text: 'OK',
      onPress: this._onNeutralPress,
      style: 'positive'
    }
  ];

  _alertEmailErrorButton = [
    {
      text: 'OK',
      onPress: this._onNeutralPress,
      style: 'positive'
    }
  ];

  _alertPhoneButton = [
    {
      text: 'OK',
      onPress: this._onNeutralPress,
      style: 'positive'
    }
  ];

  _alertMultiOptionButton = [
    {
      text: 'No',
      onPress: this._onNegativePress,
      style: 'negative'
    },
    {
      text: 'Yes',
      onPress: this._onPositivePress,
      style: 'positive'
    },
    {
      text: 'Later',
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
            This is a sample application for {'\n'}
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
          <View style={styles.buttonWrap}>
            <Button
              onPress={this._onThankYouAlert}
              color="white"
              title="Thank You Alert"
            />
          </View>
          <View style={styles.buttonWrap}>
            <Button
              onPress={this._onEmailErrorAlert}
              color="white"
              title="Email Error Alert"
            />
          </View>
          <View style={styles.buttonWrap}>
            <Button
              onPress={this._onMultiOptionAlert}
              color="white"
              title="Multi Option Alert"
            />
          </View>
          <View style={styles.buttonWrap}>
            <Button
              onPress={this._onPhoneAlert}
              color="white"
              title="Phone Alert"
            />
          </View>
        </View>
        <Alert
          ref={(a) => {
            this._simpleAlert = a;
          }}
          visible
          icon={<TouchIcon />}
          title="Just FYI"
          text="React native is the fastest way to build a multi platform application "
          buttons={this._alertSimpleButton}
        />
        <Alert
          ref={(a) => {
            this._choiceAlert = a;
          }}
          visible
          icon={<TouchIcon />}
          title="Touch ID"
          text="Would you like to activate your Touch ID to log in?"
          buttons={this._alertChoiceButtons}
        />
        <Alert
          ref={(a) => {
            this._thankYouAlert = a;
          }}
          visible
          icon={<EmailIcon />}
          title="Thank You!"
          text={ <Text>Please verify your email address by clicking the link we sent to <Text style={{color: '#007aff'}}>yehor.kol@gmail.com</Text></Text> }
          buttons={this._alertThankYouButton}
        />
        <Alert
          ref={(a) => {
            this._emailErrorAlert = a;
          }}
          visible
          icon={<EmailErrorIcon />}
          title="Notification!"
          text={
            <Text>Email, <Text style={{fontWeight: '600', color: '#2d363d'}}>mail@gmail.com</Text> is used for another
              account</Text>
          }
          buttons={this._alertEmailErrorButton}
        />
        <Alert
          ref={(a) => {
            this._multiOptionAlert = a;
          }}
          visible
          icon={<TouchIcon color="#ff3b30"/>}
          title="Notification!"
          text="Email is linked with another account, reset it?"
          buttons={this._alertMultiOptionButton}
        />
        <Alert
          ref={(a) => {
            this._phoneAlert = a;
          }}
          visible
          icon={<TouchIcon color="#ff3b30"/>}
          title="Notification!"
          text={
            <Text>Phone number <Text style={{fontWeight: '600', color: '#2d363d'}}>+380935697845</Text> is used for
              another account</Text>
          }
          buttons={this._alertPhoneButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006EB2'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actions: {
    flex: 3
  },
  buttonWrap: {
    width: 200,
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 6,
    backgroundColor: '#2BADFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 2
  }
});
