import { useContext } from "react";
import { PostStore } from "../../store/postStore";

const Post = () => {
    const ctx = useContext(PostStore);
    return (
        <>
            <h1>Post</h1>
            <ul>
                {ctx.posts.map(post => {
                    return <li>{post.title}</li>
                })}
            </ul>
        </>
    )
}

export default Post;