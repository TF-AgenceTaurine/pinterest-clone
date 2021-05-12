import './App.css'
import Logout from './components/Logout'
import Login from './components/Login'
import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/* Nécessaire pour le Pinterest Wall */
import './styles/normalise.css'
import FinalBoard from './components/FinalBoard.js'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/connected">
            <Connected />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
  <div>
    <h2>Home</h2>
    <Login></Login>
  </div>
  )
}

function Connected() {
  return (
    <div>
      <h2>Bienvenue</h2>
      <Logout></Logout>
      <FinalBoard />
    </div>
    )
}

function Users() {
  return <h2>Users</h2>;
}