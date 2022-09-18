import { createContext, useState } from "react";

const defaultStoreValue = {
    posts : [],
    addpost : () => null
}

export const PostStore = createContext(defaultStoreValue);

export const PostStoreProvider = (props) => {
    const [posts , setPosts] = useState([]);
    const addPosts = (postData) => {
        const allPosts = [...posts];
        allPosts.push(postData);
        setPosts(allPosts);
    }
    return (
        <PostStore.Provider value={{posts ,addPosts}}>
            {props.children}
        </PostStore.Provider>
    )
} 