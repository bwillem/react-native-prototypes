import React from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

const CardComponent = () => {
  return (
    <Card
      title='Ryan Luker'
      containerStyle={{ marginTop: 40 }}>
      <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure than actual design.
      </Text>
      <Button
        small
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW PORTFOLIO' />
    </Card>
  );
};

export default CardComponent;
