import React from 'react';

import { Header, Icon } from 'semantic-ui-react'

import Search from './components/Search.component';
import './App.css';

import './loader.js'
import './tablesort.js'

const App = () => {
  return (
    <div className="App">
      <h1>SEER</h1>
      <br />
      <Header as='h1'>
        <Icon name='lab' />
        <Header.Content>Software Engineering Evidence Repository</Header.Content>
      </Header>
      <br />
      <Search />
    </div>
  );
}

export default App;