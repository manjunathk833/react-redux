import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class List extends Component{
    render(){
        return (
            <ol>
             {this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ol>)
    }

}

class Title extends Component{
    render(){
        return <h1>{this.props.title}</h1>
    }
}

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
ReactDOM.render(<Main/>, document.getElementById('root'));