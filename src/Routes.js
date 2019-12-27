import React from "react"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

import Redirect from "./Redirect"
import App from './App'

export default function RouterComponent(){
  return(
    <Router>
      <Route exact path='/' component={Redirect} />
      <Route exact path='/default' component={App} />
    </Router>
  )
}