import React from 'react';
import Post from './post'

import {TransitionGroup, CSSTransition} from 'react-transition-group'

const PostList = ({posts, title, remove}) => {

    if(!posts.length) {
        return <h1>Публикации не найдены!</h1>
    }
    

  return (
    <div className="postList">
        <h2 style={{textAlign: "center"}}>{title}</h2>
        <TransitionGroup>
            {
                posts.map((post) => 
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post remove={remove} post={post}/>
                    </CSSTransition>
                )
            }
        </TransitionGroup>
    </div>
  );
}

export default PostList;