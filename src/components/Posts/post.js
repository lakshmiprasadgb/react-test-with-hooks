import { useContext } from "react";
import { useSelector } from "react-redux";
import { PostStore } from "../../store/postStore";
import { store } from "../../store/postStore-redux";
import Card from "../UI/card";
import classes from './post.module.css';

const Post = () => {
    const posts = useSelector((state) => state.postStore.posts)
    return (
        <div className={classes.postWrapper}>
            <h1>Post</h1>
            <Card>
            <ul>
                {posts.map(post => {
                    return <li>{post.title}</li>
                })}
            </ul>
            </Card>
        </div>
    )
}

export default Post;