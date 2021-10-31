import React, { useState } from 'react';

function Post() {

    const [id, setID] = useState(0)
    const [title, setTitle] = useState("default title")
    const [text, setText] = useState("Default text")
    const [shortText, setShortText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non mi sit amet lorem mollis gravida. Maecenas vel blandit tellus. Cras scelerisque placerat nulla eget efficitur. Curabitur ligula justo,")
    const [author, setAuthor] = useState("Author Bauthor")
    const [pubDate, setPubDate] = useState("1999-12-31")

    function setID_(id) {
        setID(id);
    }

    function setTitle_(title) {
        setTitle(title);
    }

    function setText_(text) {
        setText(text);
    }

    function setShortText_(text) {
        setShortText(text);
    }
    
    function setAuthor_(author) {
        setAuthor(author);
    }

    function setPubDate_(pubDate) {
        setPubDate(pubDate);
    }
    

  return (
    <div className="post">
        <h3>{title}</h3>
        <span>{author}</span>
        <span>{pubDate}</span>
        <div className="short-text">
            <p>{shortText}</p>
        </div>
        
        <button onClick={() => {alert('deleted!')}}>delete</button>
      
    </div>
  );
}

export default Post;