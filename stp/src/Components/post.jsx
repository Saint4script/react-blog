import React from 'react';
import MyButton from './UI/Button/MyButton';

const Post = (props) => {
    

  return (
    <div className="post">
        <h3 className="post-header">{props.post.title}</h3>
        <span className="post-user-id">{props.post.user_id}</span>
        <div className="post-body">
            <p>{props.post.body}</p>
        </div>
        
        <MyButton onClick={() => props.remove(props.post)}>remove</MyButton>
    </div>
  );
}

export default Post;