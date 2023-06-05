import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpPage from './components/SignUp'
import SignInPage from './components/SignIn'
import homepage from './components/home'
import './App.css'

function App(){
  return (
    <Router>
      <Switch>
        <Route exact path= '/signup' component={SignUpPage} />
        <Route exact path= '/' component={SignInPage} />
        <Route exact path= '/homepage' component={homepage} />
      </Switch>
    </Router>
  )
}
export default App; 