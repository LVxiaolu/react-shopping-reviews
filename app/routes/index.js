import React, {Component} from 'react';
//路由的两种类型 HashRouter BrowserRoute
import {
  HashRouter as Router,
  Route,//单条路由
  Switch //只匹配一次
} from 'react-router-dom'
import Home from '../contaniers/Home';
import Detail from "../contaniers/Detail";
import Login from "../contaniers/Login";
import User from "../contaniers/User";


export default class RouterMap extends Component {
  render() {
    return (
      <div>
        <Router>
          <switch>
            <Route exact path="/" component={Home}/>
            <Route path='/detail/:id' component={Detail}/>
            {/*点击先跳转到登录页，登录后 再回到登录之前的页面，在login路径后可能需要保存上次点击login的路径,如果登录过在登录跳转到用户页面*/}
            <Route path="/login/:route?" component={Login}/>
            <Route path="/user" component={User}/>
          </switch>
        </Router>
      </div>
    )
  }
}

