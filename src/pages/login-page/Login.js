import React, {Component} from 'react';
import { StyleSheet, Text,Image, View , TouchableOpacity, KeyboardAvoidingView  } from 'react-native';
import LoginForm from './LoginForm';


export default class Login extends Component {

  static navigationOptions = {
    header:null
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.login}>
        <View style={styles.logo_container}>
          <Image
          style={styles.logo}
          source={require('../../image/profile.png')}/>
          <Text style={styles.text_template}>Bu uygulama React-Native kullanılarak yapılmıstır.</Text>
        </View>
        <View style={styles.form_container}>
          <LoginForm/>
          <TouchableOpacity>
            <Text
              style={styles.button_container}
              onPress = {() => this.props.navigation.navigate('Settings')}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#ba68c8'
  },
  logo:{
    width: 100,
    height: 100,
  },
  logo_container:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_container:{
    paddingVertical: 10,
    textAlign: 'center',
    height: 50,
    backgroundColor: '#512da8',
  },
  text_template:{
    color: 'white',
    marginTop: 20,
    width: 250,
    textAlign: 'center',
    opacity: 0.75
  },

});
