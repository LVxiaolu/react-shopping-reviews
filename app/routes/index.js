import React, {Component} from 'react';
//路由的两种类型 HashRouter BrowserRoute
import {
  HashRouter as Router,
  Route,//单条路由
  Switch //只匹配一次
} from 'react-router-dom'
import Home from '../contaniers/Home';
import Detail from "../contaniers/Detail";

export default class RouterMap extends Component {
  render() {
    return (
      <div>
        <Router>
          <switch>
            <Route exact path="/" component={Home}/>
            <Route path='/detail/:id' component={Detail}/>
          </switch>
        </Router>
      </div>
    )
  }
}

