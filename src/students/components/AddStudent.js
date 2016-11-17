import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { studentUpdate } from '../actions'

class AddStudent extends Component {
  updateText(text) {
      console.log(text);
  }

  render() {
    return (
      <View style={{ paddingTop: 40 }}>
        <FormLabel>Firstname</FormLabel>
        <FormInput
          value={this.props.firstname}
          // Firing studentUpdate action on user input event
          onChangeText={text => this.props.studentUpdate({prop: 'firstname', value: text})}
        />
        <FormLabel>Lastname</FormLabel>
        <FormInput
          value={this.props.lastname}
          // Firing studentUpdate action on user input event
          onChangeText={text => this.props.studentUpdate({prop: 'lastname', value: text})}
        />
        <Button
          small
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginTop: 20}}
          title='SAVE STUDENT'
        />
      </View>
    );
  }
};

// @param object - state returned from reducer
// @param object - component props
const mapStateToProps = (state, ownProps) => {
  const {firstname, lastname, grade} = state.studentDetails;
  // these will now be accessible in the component via props
  return {firstname, lastname, grade};
}
// @param function - maps returned state object to component props
// @param object - action creators
// @param class or function - the component to be rendered
export default connect(mapStateToProps, { studentUpdate })(AddStudent);
