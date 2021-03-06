import React, {Component} from 'react';
import PhotoWall from './PhotoWall.js';
import AddPhoto from './AddPhoto.js';
import {Route, Link} from 'react-router-dom';
import Single from './Single'

class Main extends Component{

    state = { loading: true }
    
    componentDidMount(){
       this.props.startLoadingPost().then(() => {
           this.setState({loading: false})
       })
       this.props.startLoadingComments()
    }

    render(){ 
        //console.log(this.props);
        console.log(process.env)
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
        <Route path = "/single/:id" render = {(params) => (
                <Single loading = {this.state.loading} {...this.props} {...params}/>
            )}/>
        </div>
            )
    }
}

export default Main;