import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Welcome from '../components/Welcome';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

describe('Welcome screen', () => {
  it('renders', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper).to.contain.string('HERE IS SOME DATA!');
  });
});
