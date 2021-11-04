import React, {useState} from 'react';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';

const PostForm = ({create}) => {

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

        // setPosts([...posts, {...post, id: Date.now(), pubDate: today,}]);
        const newPost = {...post, id: Date.now(), pubDate: today,};
        create(newPost); 
        setPost({
            title: '',
            author: '',
            postText: '',
            shortText: '',
        });
    }
    

  return (
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
  );
}

export default PostForm;