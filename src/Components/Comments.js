import React, {Component} from 'react'

class Comments extends Component{
    render(){
        return <div className="comment">
                <form className="comment-form">
                    <input type="text" placeholder="Comment"/>
                    <input type="submit" hidden/>
                </form>

        </div>
    }
}

export default Comments;