import { useContext, useState } from 'react';
import useFormHook from '../../hooks/use-form-hook';
import {PostStore} from '../../store/postStore';
import classes from './AddPost.module.css'

const AddPost = () => {
    const validateFunction = (value) => {
        return value.trim() !== ''
    }
    const {addPosts} = useContext(PostStore);
    const [postTitle,isPostTitleTouched,isPostTitleValid,handlePostChange,resetPostTitle] = useFormHook('',validateFunction);
    const [postDescription,isPostDescriptioTouched,isPostDescriptionValid,handleDescriptionChange,resetPostDescription] = useFormHook('' , validateFunction);
    const handleSubmit = (event) => {
        event.preventDefault();
        if(postTitle && postDescription) {
            addPosts({title : postTitle , description : postDescription})
            resetPostTitle();
            resetPostDescription();
        }
    }
    return (
        <div className={classes.formWrapper}>
            <form className="form" onSubmit={handleSubmit}>
                <div className={classes.inputWrapper}>
                    <label htmlFor='postTitle'>Title</label>
                    <input type="text" id="postTitle" value={postTitle} onChange={handlePostChange}/>
                    {(isPostTitleTouched && !isPostTitleValid) && <p className='error'>Please enter a valid title for the post</p> }
                </div>
                <div>
                    <label htmlFor='postDescription'>Description</label>
                    <textarea type="text" id="postDescription" value={postDescription} onChange={handleDescriptionChange}/>
                    {(isPostDescriptioTouched && !isPostDescriptionValid) && <p className='error'>Please enter a valid description for the post</p> }
                </div>
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default AddPost;