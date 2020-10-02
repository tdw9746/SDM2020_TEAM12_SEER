import React from 'react';

import { Header, Icon } from 'semantic-ui-react'

import Search from './components/Search.component';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <br/>
      <Header as='h1'>
        <Icon name='lab' />
        <Header.Content>Software Engineering Evidence Repository(SEER)</Header.Content>
      </Header>
      <br/>
      <Search />
    </div>
  );
}

export default App;