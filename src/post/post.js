import React, { useState, useEffect } from "react";
import "./post.css";


const Post = (props) => {
    const [postData, setPostData] = useState([]);

    const getPostsFromAPI = () => {
        return fetch("https://dummyjson.com/posts")
            .then(response => response.json())
            .then(data => {
                const { posts = [] } = data;
                return posts;
            })
            .catch(error => {
                console.log(error);
            })
    };

    useEffect(() => {
        getPostsFromAPI()
            .then(posts => {
                setPostData(posts);
            })
    }, []);

    return (
        <div className="container">
            <div className="row text-center">
                {postData.map((post) => {
                    return (
                        <div key={post.id}>
                            <div className="card">
                                <div className="user-id"> User-Id: {post.userId}</div>
                                <div className="title"> {post.title}</div>
                                <div className="body"> {post.body}</div>
                                <div className="tags"> {post.tags[0]}</div>
                                <div className="tags"> {post.tags[1]}</div>
                                <div className="tags"> {post.tags[2]}</div>
                                <div className="reaction">Reaction: {post.reactions}</div>
                              
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Post;

