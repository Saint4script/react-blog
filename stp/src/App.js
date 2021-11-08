import React, { useState, useEffect, } from 'react';
import PostList from './Components/postList'
import PostForm from './Components/postForm'

// common styles
import styles from './styles/app.css';

import PostFilter from './Components/UI/PostFilter/PostFilter';
import SearchModal from './Components/UI/SearchModal/SearchModal';
import MyButton from './Components/UI/Button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import Preloader from './Components/UI/Preloader/Preloader';
import { useFetching } from './hooks/useFetching';
import Pagination from './Components/UI/Pagination/Pagination';

function App() {

    const [posts, setPosts] = useState([]);
    const [pagesCount, setPagesCount] = useState(0);

    let pagesArray = [];

    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchPosts();
    }, [page])
    
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(page);
        const currentPagesCount = response.data.meta.pagination.pages;

        if(currentPagesCount !== pagesCount) {
            setPagesCount(currentPagesCount);
        }
        setPosts(response.data.data);
    })


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
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Все публикации"/>
            }

            {
                <Pagination pagesArray={pagesArray} pagesCount={pagesCount} curPage={page} setPage={setPage}/>
            }
        </div>
    );
}

export default App;
