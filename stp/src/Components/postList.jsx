import React, { useState } from 'react';
import Post_ from './post_'

const PostList = ({posts, title}) => {
    

  return (
    <div className="postList">
        <h2 style={{textAlign: "center"}}>{title}</h2>
        {
            posts.map(
                (post) => <Post_ post_={post} key={post.id}/>
            )
        }
    </div>
  );
}

export default PostList;