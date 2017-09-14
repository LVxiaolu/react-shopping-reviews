import React,{Component} from 'react';
import SearchHeader from "../../components/SearchHeader/index";
import {connect} from 'react-redux'
import SearchList from "./subpage/SearchList";

//可以从轮播图点击来 /search/jingdian  /search/huazhuangpin
//搜索框输入内容进入   /search/all/keyword
// /search/:kind/:keyword
class Search extends Component{
  render(){
    return (
      <div>
        <SearchHeader
          value={this.props.match.params.keyword || ''}
          history={this.props.history}
          fn={this.toSearch.bind(this)}
        />
        <SearchList cityName={this.props.userInfo.cityName}/>
      </div>
    )
  }
  toSearch(value){
    this.props.history.push('/search/all/'+value);
  }
}
export default connect(
  state=>{
    return {userInfo:state.userInfo} //取出redux state中userInfo的数据，赋予给变量userInfo
  }
)(Search)