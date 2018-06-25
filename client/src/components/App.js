import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import Beers from './Beers'; 
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';


class App extends Component {
  state = { beers: [] }

  componentDidMount() {
      axios.get('/api/all_beers')
          .then( res => this.setState({ beers: res.data }) )
          debugger  
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={4} >
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={10}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
