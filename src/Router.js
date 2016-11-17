import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import StudentList from './students/components/StudentList';
import StudentDetail from './students/components/StudentDetail';
import AddStudent from './students/components/AddStudent';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 40 }}>
      <Scene key="studentList"
        component={StudentList}
        title="Classroom"
        rightTitle="Add"
        onRight={() => Actions.addStudent()}
        initial
      />
      <Scene
        key="studentProfile"
        component={StudentDetail}
        title="Classroom"
        rightTitle="Edit"
        onRight={() => Actions.addStudent()}
      />
      <Scene
        key="addStudent"
        component={AddStudent}
        title="Add Students"
      />
    </Router>
  );
};

export default RouterComponent;
