import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {

  _onSimpleAlert = () => {
    console.log('test');
  };

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
              onPress={this._onSimpleAlert}
              color="white"
              title="Choice Alert"
            />
          </View>
        </View>
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
    // paddingVertical: 40,
    flex: 1,
    // backgroundColor: 'red',
    // justifyContent: 'space-between'
  },
  buttonWrap: {
    width: 200,
    alignSelf: 'center',
    marginVertical: 20,
    paddingVertical: 6,
    backgroundColor: '#2BADFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 6,
  }
});
