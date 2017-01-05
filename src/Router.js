import React from 'react';
import { StyleSheet } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import I18n from 'react-native-i18n';
import Translations from './lib/Translations';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import DS from './designSystem';

I18n.translations = Translations;

// Import components
import StudentList from './modules/addStudents/components/StudentList';
import StudentDetail from './modules/addStudents/components/StudentDetail';
import AddStudent from './modules/addStudents/components/AddStudent';
import LoginContainer from './modules/login/components/LoginContainer';
import PasswordContainer from './modules/login/components/PasswordContainer';
import Welcome from './modules/welcomeScreen/components/Welcome';

const CameraIcon = () => {
    return <Icon name='camera' size={40} color='#666' />
}

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene initial key='auth' sceneStyle={ DS.paddingTop(4) }>
          <Scene
            key='login'
            component={LoginContainer}
            title={I18n.t('Router.Welcome')}
          />
          <Scene
            key='password'
            component={PasswordContainer}
            title={I18n.t('Router.Password')}
          />
        </Scene>

        {/* Tabbed nav */}
        <Scene
          key='tabbar'
          tabs={true}
          tabBarStyle={styles.tabBar}
        >
          <Scene
            key='camera'
            title='Tab #1'
            titleStyle={{color:'black'}}
            icon={CameraIcon}
          >
            <Scene
              key='tab1_1'
              component={Welcome}
              title='Tab #1_1'
              onRight={() => Actions.auth() }
              rightTitle='Logout'
            />
            <Scene
              key='tab1_2'
              component={PasswordContainer}
              title='Tab #1_2'
              titleStyle={{color:'black'}}
            />
          </Scene>
          <Scene key='tab2' title='Tab #2'>
            <Scene
              key='tab2_1'
              component={LoginContainer}
              title='Tab #2_1'
              onLeft={()=>alert('Left button!')}
              leftTitle='Left'
            />
            <Scene
              key='tab2_2'
              component={PasswordContainer}
              title='Tab #2_2'
            />
          </Scene>
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
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#b7b7b7'
  }
});

export default RouterComponent;
