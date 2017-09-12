import React,{Component} from 'react';
import ListItem from "./ListItem/index";
export default class ListComponent extends Component{
    render(){
        return (
            <div>
                <h3 style={{paddingLeft:16,color:"orange"}}>猜你喜欢</h3>
                {this.props.data.map((item,index)=>(
                    <ListItem key={index} data={item}/>
                ))}
            </div>
        )
    }
}