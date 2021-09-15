import React, { Component } from 'react';
import Home from './Pages/Home/Home'
import { Redirect, Switch } from 'react-router';



class App extends Component {


  render () {

    let routes = (
      <Switch>
        <Redirect to="/" />
      </Switch>
    )


    return(
      <div>
        <Home />
        {routes}
      </div>
    )
  }
}


export default App;
