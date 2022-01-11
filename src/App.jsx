import Nav from './components/navbar/nav'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Discount from './components/Discount';
import Dashboard from './components/Dashboard';
import Message from './components/Message';
import Notification from './components/Notification';
import Setting from './components/Setting';
import Notfound from './components/Notfound';
import Login from './components/Login';
import React, { useState } from 'react';


const App = () => {
  const [token, setToken] = useState();

  
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <div className="m-auto bg-bacdark rounded-2xl flex h-screen  overflow-hidden">
          <Nav/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/discount' component={Discount}/>
              <Route path='/dashboard' component={Dashboard}/>
              <Route path='/message' component={Message}/>
              <Route path='/notification' component={Notification}/>
              { token && <Route path='/setting' component={Setting}/> }
              <Route path='/login' component={Login}/>
              <Route path='*' component={Notfound}/>
          </Switch>
      </div> 
    </BrowserRouter>
  );
}

 
export default App;
