import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { Restaurants } from './components/Restaurants';
import {Home} from './components/Home';
import {SideBar} from './components/SideBar';

export default function App() {
  return (

    <BrowserRouter>
    <div>
      <Navbar/>
      <div style={{display:"flex"}}>
        <SideBar/>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route path='/restaurants' component={Restaurants} />
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

