import React, { useState } from 'react';

const Post_ = (props) => {
    

  return (
    <div className="post">
        <h3>{props.post_.title}</h3>
        <span>{props.post_.author}</span>
        <span>{props.post_.pubDate}</span>
        <div className="short-text">
            <p>{props.post_.shortText}</p>
        </div>
        
        <button onClick={() => {alert('deleted!')}}>delete</button>
    </div>
  );
}

export default Post_;