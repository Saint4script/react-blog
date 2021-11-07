import React, {useState} from 'react';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';

const PostForm = ({create}) => {

    const[post, setPost] = useState({
            title: '',
            user_id: '',
            body: '',
    });

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {...post, id: Date.now(),};
        create(newPost); 
        setPost({
            title: '',
            user_id: '',
            body: '',
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
            value={post.user_id}
            onChange={(e) => setPost({...post, user_id: e.target.value})}
            type="text" 
            placeholder="Автор">
        </MyInput>
        <MyInput 
            value={post.body}
            onChange={(e) => setPost({...post, body: e.target.value})}
            type="text" 
            placeholder="Текст поста">
        </MyInput>
        <MyButton onClick={addNewPost}>Создать</MyButton>
    </form>
  );
}

export default PostForm;