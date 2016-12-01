import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  Icon
} from 'react-native-elements';

class Login extends Component {

  login() {
    const { email, password } = this.props;
    this.props.startLogin();
    this.props.loginUser(email, password);
  }

  renderButton() {
    return this.props.loading ? 'Just a sec' : 'LOGIN';
  }

  render() {
    return(
      <View style={{ paddingTop: 40 }}>
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
        <Button
          small
          backgroundColor='#03A9F4'
          title={String(this.props.loading)}
          buttonStyle={{ marginLeft: 18, marginRight: 18, marginTop: 20 }}
          onPress={this.login.bind(this)}
        />
      </View>
    );
  }
}

export default Login;
