import React, {Component} from 'react';
import {Button, StyleSheet, Text, View , BackHandler,  TouchableOpacity} from 'react-native';


export default class Settings extends Component {

  static navigationOptions = {
    header:null
  }

  profilOnPress = () => {
    console.log('bastım bastım');
  }

  oneriOnPress = () => {
    var SendIntentAndroid = require('react-native-send-intent');
    SendIntentAndroid.sendMail("sametoglu-sas@hotmail.com", "Oneri", "Bu uygulama Bok gibi :D");
  }

  paylasOnPress = () => {
    var SendIntentAndroid = require('react-native-send-intent');

    SendIntentAndroid.openFileChooser({
        subject: 'File subject', //optional,
        fileUrl: '/path_or_url/to/file',
        type: 'file_mimetype'
    }, 'Open file with:')
  }
  cıkısOnPress = () => {
    BackHandler.exitApp()
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.profilOnPress}
          style={styles.button_container}>
          <Text style={styles.buttonText}>Profil</Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.paylasOnPress}
          style={styles.button_container}>
          <Text style={styles.buttonText}>Paylas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.oneriOnPress}
          style={styles.button_container}>
          <Text style={styles.buttonText}>Öneri</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.cıkısOnPress}
          style={styles.button_container}>
          <Text style={styles.buttonText}>Cıkıs</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 50,
    backgroundColor: '#b3c2bf',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',

  },
  button_container:{
    height: 40,
    backgroundColor: '#c0dfd9',
    marginBottom: 20,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonText:{
    textAlign: 'center',
    color: '#3b3a36',
    fontWeight: '700',
  },
});
