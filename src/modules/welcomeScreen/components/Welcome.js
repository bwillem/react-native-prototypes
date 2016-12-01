import React from 'react';
import { View, Text } from 'react-native';
// import { Card } from 'react-native-elements';

const Welcome = (props) => {
  console.log(props);
  return(
    <View>
      <Card title='HERE IS SOME DATA!'>
        <Text>Firstname: {props.firstname}</Text>
        <Text>Email: {props.email}</Text>
        <Text>School: {props.schoolName}</Text>
      </Card>
    </View>
  );
};

export default Welcome;
