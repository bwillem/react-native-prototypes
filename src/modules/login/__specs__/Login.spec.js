import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Text, View } from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  Icon
} from 'react-native-elements';
import Login from '../components/Login';

describe('Login form', () => {
  it('renders inputs', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find(FormInput)).to.have.length(2);
  });
})
