import React from "react";
import {StoreType} from "../../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {addLikeToPostAC, addPostAC, changeNewPostTextAC} from "../../../../redux/profile-reducer";

type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    let posts = props.store.getState().profilePage.posts;
    let newPostText = props.store.getState().profilePage.newPostText;

    const addPostHandler = () => {
        let action = addPostAC();
        props.store.dispatch(action);
    };
    const changePostTextHandler = (textData: string) => {
        let action = changeNewPostTextAC(textData);
        props.store.dispatch(action);
    };
    const addLikeToPostHandler = (id: string) => {
        let action = addLikeToPostAC(id);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            posts={posts}
            newPostValue={newPostText}
            addPostCallback={addPostHandler}
            changePostTextCallback={changePostTextHandler}
            addLikeToPostCallback={addLikeToPostHandler}
        />
    )
}