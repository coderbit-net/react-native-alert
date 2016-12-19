import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import DashboardIcon from './components/graphics/DashboardIcon';
import AddIcon from './components/graphics/AddIcon';
import AccountIcon from './components/graphics/AccountIcon';
import SettingsIcon from './components/graphics/SettingsIcon';
import CardsIcon from './components/graphics/CardsIcon';
import DashIcon from './components/graphics/DashIcon';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.content}>
          <DashboardIcon />
          <Text style={styles.title}>Dashboard is empty!</Text>
          <Text style={styles.message}>
            Add your cards to send money
            instantly and see all history
            of transactions
          </Text>
          <TouchableOpacity style={styles.addCard}>
            <View>
              <Text style={styles.addCardText}>Add Card</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tabBar}>
          <View style={styles.linksContainer}>
            <View style={styles.link}>
              <DashIcon />
              <Text style={styles.linkText}>
                Dashboard
              </Text>
            </View>
            <View style={styles.link}>
              <CardsIcon />
              <Text style={styles.linkText}>
                My Cards
              </Text>
            </View>
            <View style={styles.link}>
              <Text style={styles.linkText}>
                &bsp;
              </Text>
            </View>
            <View style={styles.link}>
              <AccountIcon />
              <Text style={styles.linkText}>
                Account
              </Text>
            </View>
            <View style={styles.link}>
              <SettingsIcon />
              <Text style={styles.linkText}>
                Settings
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <AddIcon />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: '600',
    color: '#2d363d',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 10
  },
  addCard: {
    margin: 20,
    width: 210,
    height: 50,
    borderRadius: 4,
    borderColor: '#95a5b2',
    borderWidth: StyleSheet.hairlineWidth * 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addCardText: {
    color: '#95a5b2',
    fontSize: 18,
    textAlign: 'center'
  },
  message: {
    width: 250,
    color: '#95a5b2',
    fontSize: 18,
    textAlign: 'center'
  },
  tabBar: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    bottom: 0,
    right: 0,
    left: 0,
    height: 55,
    backgroundColor: '#ffffff'
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'transparent',
    borderWidth: StyleSheet.hairlineWidth * 1,
    backgroundColor: '#ffb144',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  linksContainer: {
    width: Dimensions.get('window').width,
    height: 50,
    borderTopWidth: 1,
    borderColor: '#cad2d8',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30
  },
  linkText: {

    color: '#95a5b2',
    fontSize: 10,
    textAlign: 'center'
  }

});
