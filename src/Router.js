import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import StudentList from './modules/addStudents/components/StudentList';
import StudentDetail from './modules/addStudents/components/StudentDetail';
import AddStudent from './modules/addStudents/components/AddStudent';
import LoginContainer from './modules/login/components/LoginContainer';
import Welcome from './modules/welcomeScreen/components/Welcome';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key='auth'>
        <Scene key='login' component={LoginContainer} title="Welcome Back" />
      </Scene>

      <Scene key='welcomeScreen'>
        <Scene key='welcome' component={Welcome} title="Login Success"/>
      </Scene>

      <Scene key='addStudents'>
        <Scene key='studentList'
          component={StudentList}
          title='Classroom'
          rightTitle='Add'
          onRight={() => Actions.addStudent()}
          initial
        />
        <Scene
          key='studentProfile'
          component={StudentDetail}
          title='Classroom'
          rightTitle='Edit'
          onRight={() => Actions.addStudent()}
        />
        <Scene
          key='addStudent'
          component={AddStudent}
          title='Add Students'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
