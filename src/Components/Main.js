import React, {Component} from 'react';
import Title from './Title.js';
import PhotoWall from './PhotoWall.js';
import AddPhoto from './AddPhoto.js';
import {Route, Link} from 'react-router-dom';
import {removePost} from '../redux/actions';

class Main extends Component{
    constructor(){
        super(); //super needs to be declared since you're extending component
    }


    render(){ 
        console.log(this.props);
        return ( 
        <div> 
            <h1>
                <Link to='/'> PhotoWall </Link>
            </h1>    
        <Route exact path = "/" render= {() => ( //render is a render prop which takes in a function and renders it and exact path means only on / display this and ignore partial match
            <div>
                <PhotoWall {...this.props}/>
               {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>*/}
            </div>
        )}/>

           
        <Route path = "/AddPhoto" render = {({history}) => (
            <AddPhoto {...this.props} onHistory={history}/>
        )}/> 
        
        </div>
            )
    }
}

export default Main;