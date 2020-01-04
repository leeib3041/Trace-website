import React from 'react'
import Teams from '../Teams/Teams'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {LinkContainer} from 'react-router-bootstrap'
import Home from '../Home/Home'

const App = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          <LinkContainer to="/teamspage"><Nav.Link>Teams</Nav.Link></LinkContainer>
          <LinkContainer to="/standings"><Nav.Link>Standings</Nav.Link></LinkContainer>
          <LinkContainer to="/stats"><Nav.Link>Stats</Nav.Link></LinkContainer>
          <LinkContainer to="/ranking"><Nav.Link>Ranking</Nav.Link></LinkContainer>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/teamspage" component={Teams}/>
        {/* <Route path="/team" component={Team}/> */}
        <Route path="/" exact component={Home} />
      </Switch>
    
   </div>
  )
}

export default App;
