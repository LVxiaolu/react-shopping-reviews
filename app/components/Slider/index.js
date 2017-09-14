import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';//轮播图插件
import './index.less';
import {Link} from 'react-router-dom';
export default class Slider extends Component {
  constructor(){
    super();
    this.state = {
      index:0
    }
  }
  render() {
    let opts = {
      continuous: false,
      callback:(index)=>{
        this.setState({
          index
        });
      }
    };
    return (
      <div>
        <ReactSwipe className="carousel" swipeOptions={opts}>
          <div>
            <ul>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-canyin"></i>
                <span>美食</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-mao"></i>
                <span>猫眼电影</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-zhusu"></i>
                <span>酒店</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-yule"></i>
                <span>休闲娱乐</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-motuo"></i>
                <span>外卖</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-huoguo"></i>
                <span>火锅</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-liren"></i>
                <span>丽人</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-jingdian"></i>
                <span>周边游</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-ktv"></i>
                <span>KTV</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-diamond"></i>
                <span>婚纱摄影</span>
              </li></Link>
            </ul>
          </div>
          <div>
            <ul>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-canyin"></i>
                <span>美食</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-mao"></i>
                <span>猫眼电影</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-zhusu"></i>
                <span>酒店</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-yule"></i>
                <span>休闲娱乐</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-motuo"></i>
                <span>外卖</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-huoguo"></i>
                <span>火锅</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-liren"></i>
                <span>丽人</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-jingdian"></i>
                <span>周边游</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-ktv"></i>
                <span>KTV</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-diamond"></i>
                <span>婚纱摄影</span>
              </li></Link>
            </ul>
          </div>
          <div>
            <ul>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-canyin"></i>
                <span>美食</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-mao"></i>
                <span>猫眼电影</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-zhusu"></i>
                <span>酒店</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-yule"></i>
                <span>休闲娱乐</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-motuo"></i>
                <span>外卖</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-huoguo"></i>
                <span>火锅</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-liren"></i>
                <span>丽人</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-jingdian"></i>
                <span>周边游</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-ktv"></i>
                <span>KTV</span>
              </li></Link>
              <Link to="/search/jingdian"><li>
                <i className="iconfont icon-diamond"></i>
                <span>婚纱摄影</span>
              </li></Link>
            </ul>
          </div>
        </ReactSwipe>
        <ul className="dots">
          <li className={this.state.index==0?"active":""}></li>
          <li className={this.state.index==1?"active":""}></li>
          <li className={this.state.index==2?"active":""}></li>
        </ul>
      </div>
    )
  }
}
