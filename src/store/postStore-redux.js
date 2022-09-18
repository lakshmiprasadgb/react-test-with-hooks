import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialPostState = {
    posts : [],
    isLoading : false
}

const postStoreReducer = createSlice({
    name : 'postReducer',
    initialState : initialPostState,
    reducers : {
        addPost : (state,action) => {
            state.isLoading = false;
            state.posts.push(action.payload)
        },
        addingPost : (state) => {
            state.isLoading = true;
        }
    }
})

const store = configureStore({
    reducer : {
        postStore : postStoreReducer.reducer
    }
})

const postActions = postStoreReducer.actions

export const addPostAsync = (payload) => {
    return (dispatch) => {
        dispatch(postActions.addingPost())
        setTimeout(() => {
            dispatch(postActions.addPost(payload))
        }, 2000);
    } 
} 

export {
    store,
    postActions
}