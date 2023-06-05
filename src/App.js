import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpPage from './components/SignUp'
import SignInPage from './components/SignIn'
import './App.css'

function App(){
  return (
    <Router>
      <Switch>
        <Route exact path= '/signup' component={SignUpPage} />
        <Route exact path= '/' component={SignInPage} />
      </Switch>
    </Router>
  )
}
export default App; 