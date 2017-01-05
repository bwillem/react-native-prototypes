import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import I18n from 'react-native-i18n';
import Translations from '../../../lib/Translations';
import { Actions } from 'react-native-router-flux';
import { Button, Input } from '../../../uiComponents';
import DS from '../../../designSystem';

// Translations
I18n.fallbacks = true;
I18n.translations = Translations;

class Login extends Component {
  state = {
    errorMsg: ''
  }

  validateEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  goToPasswordScene () {
    // console.log('this', this);
    // console.log('this.props', this.props);
    // Validation action will occur here
    if ( this.validateEmail(this.props.email) ) {
      this.setState({ errorMsg: '' });
      Actions.password();
    } else {
      this.setState({ errorMsg: 'That\'s not a proper email address' })
    }
  }

  render () {
    console.log('top of the render - app redrawn', DS.padding);
    return (
      <View style={ DS.padding(2) }>
        <Input
          style={ DS.paddingTop(4) }
          label='email'
          value={this.props.value}
          placeholder={I18n.t('Login.email.placeholder')}
          onChangeText={this.props.usernameChanged}
          autoCapitalize='none'
        />
        <Button
          style={ DS.marginTop(2) }
          onPress={this.goToPasswordScene.bind(this)}>
          {I18n.t('Login.email.next')}
        </Button>
        <Text>{this.state.errorMsg}</Text>
      </View>
    );
  }
}

export default Login;
