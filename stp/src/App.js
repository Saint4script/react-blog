import React, { useMemo, useState, useEffect, } from 'react';
import PostList from './Components/postList'
import PostForm from './Components/postForm'

// common styles
import styles from './styles/app.css';


import SearchInput from './Components/UI/SearchInput/SearchInput';

import PostFilter from './Components/UI/PostFilter/PostFilter';
import SearchModal from './Components/UI/SearchModal/SearchModal';
import MyButton from './Components/UI/Button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import Preloader from './Components/UI/Preloader/Preloader';
import { useFetching } from './hooks/useFetching';

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

    const [posts, setPosts] = useState([]);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts);
    })

    useEffect(() => {
        fetchPosts();
    }, [])

    const [filter, setFilter] = useState({
        sort: '', 
        query: '',
    })
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (delPost) => {
        setPosts(posts.filter(p => p.id !== delPost.id));
    }

    return (
        <div className="App">

            <MyButton onClick={fetchPosts}>POSTS</MyButton>
            <MyButton onClick={() => setModal(true)}>
                Создать публикацию
            </MyButton>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <SearchModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </SearchModal>

            {
                postError &&
                <h1>Возникла ошибка при попытке получить список публикаций: ${postError}</h1>
            }

            {
                isPostsLoading
                ? <Preloader/>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Все публикции"/>
            }
        </div>
    );
}

export default App;
