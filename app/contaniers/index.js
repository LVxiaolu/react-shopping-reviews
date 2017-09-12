import React, {Component} from 'react';
import RouterMap from "../routes/index";
import {connect} from 'react-redux'
//绑定actionCreator组成的对象
import {bindActionCreators} from 'redux';
//获取所有的actionCreator组成的对象
import * as Actions from '../actions/userInfo';

 class App extends Component {
  constructor(){
    super();
    this.state={
      done:false
    }
  }
  render() {
    return (
      <div>
        {
          this.state.done?<RouterMap/>:<div>正在加载，请稍等。。。</div>
        }
      </div>
    )
  }
  componentDidMount(){
      this.setState({
        done:true
      })
  }
}
export default connect(
  state=>{
    return {}
  },
  dispatch=>{
    return {
      userActions:bindActionCreators(Actions,dispatch)
    }
  }
)(App)//将状态和动作以属性的形式传递给了App