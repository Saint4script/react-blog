import React, { useState } from 'react';
import PostList from './Components/postList'

// async function getPosts() {
//     fetch('http://127.0.0.1:3090/posts', {
//         method: "GET",
//         mode: "cors",
//     }).then((response) => {
//         console.log(response.status);
//         return response.json();
//     }).then((data) => {
//         return Array.from(data);
//     }).catch(function (err) {
//         console.log('Fetch Error :-S', err);
//     });;
// }
// console.log(await getPosts())

function App() {

    const [posts, setPosts] = useState(
        [
            {id: 1, title: "Some title 1", author: "Bob Rock", pubDate: "12-31-2021", shortText: "lalala lololo olalaoapsakjdsad rollo go go go..."},
            {id: 2, title: "Some title 2", author: "Bob Rock", pubDate: "12-31-2021", shortText: "lalala lololo olalaoapsakjdsad rollo go go go..."},
            {id: 3, title: "Some title 3", author: "Bob Rock", pubDate: "12-31-2021", shortText: "lalala lololo olalaoapsakjdsad rollo go go go..."},
        ]
        // getPosts()
    );

    // function setPosts_(posts) {
    //     // setPosts(getPosts());
    //     [
    //         {id: 1, title: "Some title", author: "Bob Rock", pubDate: "12-31-2021", shortText: "lalala lololo olalaoapsakjdsad rollo go go go..."},
    //         {id: 1, title: "Some title", author: "Bob Rock", pubDate: "12-31-2021", shortText: "lalala lololo olalaoapsakjdsad rollo go go go..."},
    //         {id: 1, title: "Some title", author: "Bob Rock", pubDate: "12-31-2021", shortText: "lalala lololo olalaoapsakjdsad rollo go go go..."},
    //     ]
        
    // }
    

  return (
    <div className="App">
        <PostList posts={posts} title="Все публикции"/>
    </div>
  );
}

export default App;
