import React, { useState } from 'react';
import MyButton from './UI/Button/MyButton';

const Post = (props) => {
    

  return (
    <div className="post">
        <h3>{props.post.title}</h3>
        <span>{props.post.author}</span>
        <span>{props.post.pubDate}</span>
        <div className="short-text">
            <p>{props.post.shortText}</p>
        </div>
        <div className="postText">
            <p>{props.post.postText}</p>
        </div>
        
        <MyButton onClick={() => props.remove(props.post)}>remove</MyButton>
    </div>
  );
}

export default Post;