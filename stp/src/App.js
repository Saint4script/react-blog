import React, { useState } from 'react';
import PostList from './Components/postList'
import PostForm from './Components/postForm'
// common styles
import styles from './styles/app.css';
import MySelect from './Components/UI/Select/mySelect';

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
            {id: 1, title: "errrrrr", author: "Bob Rockrr", pubDate: "11-31-2021", shortText: "lalala lololo olalaoapsakjdsad rollo go go go..."},
            {id: 2, title: "aaaaa", author: "Bob Rockas", pubDate: "12-31-2021", shortText: "lalala lololo olalaoapsakjdsad rollo go go go..."},
            {id: 3, title: "aome title 3 bobs", author: "Bob Rocky", pubDate: "9-31-2021", shortText: "lalala lololo olalaoapsakjdsad rollo go go go..."},
        ]
    );

    const [selectedSort, setSelectedSort] = useState('')

    const sortPosts = sort => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (delPost) => {
        setPosts(posts.filter(p => p.id !== delPost.id));
    }
    

    return (
        <div className="App">
            <PostForm create={createPost} />
            <div>
                <MySelect 
                    value={selectedSort}
                    onChange={sortPosts}
                    options={[
                        {value: "pubDate", name: "Дата публикации"},
                        {value: "title", name: "Заголовок"},
                    ]} 
                    defaultOption="Сортировка"
                />
            </div>

            {
                posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title="Все публикции"/>
                : <h1>Публикации не найдены!</h1>
            }
            
        </div>
    );
}

export default App;
