import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements';

class PortfolioList extends Component {
  // RN lifecycle method, like onRender
  componentWillMount() {
    const list = [
      {
        name: 'Deckard Cain',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Healer and Sage'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Ryan Luker',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Monkey Ear Cleaning Specialist'
      }
    ];

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(list),
    };

  }

  renderRow (rowData, sectionID) {
    return (
      <ListItem
        onPress={Actions.studentProfile}
        roundAvatar
        key={sectionID}
        title={rowData.name}
        subtitle={rowData.subtitle}
        avatar={{uri:rowData.avatar_url}}
      />
    )
  }

  render () {
    return (
      <List>
        <ListView
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
        />
      </List>
    )
  }
};

export default PortfolioList;
