import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {
  FormLabel,
  FormInput
} from 'react-native-elements';
import { Button } from '../../../uiComponents';

class Login extends Component {

  login() {
    const { email, password, loading } = this.props;
    console.log(email, password);
    this.props.startLogin();
    this.props.loginUser(email, password);
  }

  render() {
    console.log('top of the render - app redrawn', this.props);
    return (
      <View style={styles.container}>
        <FormLabel>EMAIL</FormLabel>
        <FormInput
          value={this.props.email}
          placeholder='Enter your email address'
          onChangeText={this.props.usernameChanged}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <FormLabel>PASSWORD</FormLabel>
        <FormInput
          secureTextEntry
          value={this.props.password}
          placeholder='Enter your password'
          onChangeText={this.props.passwordChanged}
        />
        <Text style={{ marginTop: 10, marginLeft: 20, color: 'red' }}>{this.props.error}</Text>
        <Button style={styles.btn} onPress={this.login.bind(this)} isLoading={this.props.loading}>
          Login
        </Button>
        <Text>Sign up!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  btn: {
    marginLeft:20,
    marginRight:20
  }
})

export default Login;
