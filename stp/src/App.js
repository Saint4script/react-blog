import React, { useState } from 'react';
import PostList from './Components/postList'
import MyButton from './Components/UI/Button/MyButton';
import MyInput from './Components/UI/Input/MyInput';
// common styles
import styles from './styles/app.css';

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
    );

    const[post, setPost] = useState({
            title: '',
            author: '',
            postText: '',
            shortText: '',
    });

    const addNewPost = (e) => {
        e.preventDefault();
        // oooouf, some *** date magic ***
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = mm + '-' + dd + '-' + yyyy;

        setPosts([...posts, {...post, id: Date.now(), pubDate: today,}]);
        setPost({
            title: '',
            author: '',
            postText: '',
            shortText: '',
        });
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={post.title}
                    onChange={(e) => setPost({...post, title: e.target.value})}
                    type="text" 
                    placeholder="Заголовок поста"
                ></MyInput>
                <MyInput 
                    value={post.author}
                    onChange={(e) => setPost({...post, author: e.target.value})}
                    type="text" 
                    placeholder="Автор">
                </MyInput>
                <MyInput 
                    value={post.postText}
                    onChange={(e) => setPost({...post, postText: e.target.value})}
                    type="text" 
                    placeholder="Текст поста">
                </MyInput>
                <MyInput 
                    value={post.shortText}
                    onChange={(e) => setPost({...post, shortText: e.target.value})}
                    type="text" 
                    placeholder="Краткий текст">
                </MyInput>
                <MyButton onClick={addNewPost}>Создать</MyButton>
            </form>
            <PostList posts={posts} title="Все публикции"/>
        </div>
    );
}

export default App;
