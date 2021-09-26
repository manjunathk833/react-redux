import React, {Component} from 'react';
import List from './List.js';
import Title from './Title.js';

class Main extends Component{
    render(){
        return ( 
        <div> 
            <Title title={'TO DOS'}/>
            <List tasks = {['Do react project 2', 'Do react project 3']}/>
            <List tasks = {['Dont do dumb stuff', 'dont mess around', 'sleep']}/>
        </div>
            )
    }
}

export default Main;