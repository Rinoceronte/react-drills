
import React, {Component} from 'react';


export default class Todo extends Component{
    constructor(){
        super();
    }

    render(){
        let list = this.props.todoList.map((el, i) => <h2 key={i}>{el}</h2>);
        return (
            <div>
                {list}
            </div>
        );
    }
}