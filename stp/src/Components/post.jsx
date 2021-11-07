import React, { useState } from 'react';
import MyButton from './UI/Button/MyButton';

const Post = (props) => {
    

  return (
    <div className="post">
        <h3>{props.post.title}</h3>
        <span>{props.post.user_id}</span>
        <div className="body">
            <p>{props.post.body}</p>
        </div>
        
        <MyButton onClick={() => props.remove(props.post)}>remove</MyButton>
    </div>
  );
}

export default Post;