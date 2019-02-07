import React, {Component} from 'react';
import { StyleSheet, Text , TextInput , Image , View  ,StatusBar }  from 'react-native';



export default class LoginForm extends Component {



  render() {

    return (

      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />

        <TextInput
          placeholder="e-mail"
          placeholderTextColor="#f3e5f5"
          returnKeyType="Next"
          onSubmitEditing={() => this.passwordInput.focus()}
          KeyboardType="e-mail-address"
          actualCapitalize="none"
          autoCorrext={false}
          style = {styles.input}/>
        <TextInput
          placeholder="password"
          placeholderTextColor="#f3e5f5"
          returnKeyType = "Go"
          secureTextEntry
          ref={(input) => this.passwordInput = input}
          style = {styles.input}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  input:{
    height: 40,
    backgroundColor: '#e1bee7',
    marginBottom: 20,
    color: 'white',
    paddingHorizontal: 10,
  },

  buttonText:{
    textAlign: 'center',
    color: '#f3e5f5',
    fontWeight: '700',
  }

});
