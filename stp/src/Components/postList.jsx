import React from 'react';
import Post from './post'

const PostList = ({posts, title}) => {
    

  return (
    <div className="postList">
        <h2 style={{textAlign: "center"}}>{title}</h2>
        {
            posts.map(
                (post) => <Post post={post} key={post.id}/>
            )
        }
    </div>
  );
}

export default PostList;