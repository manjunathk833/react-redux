//remove

const removePost = (index) => {
    return {
        type: 'REMOVE_POST',
        index
    }
}


//adding post
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export default removePost;


