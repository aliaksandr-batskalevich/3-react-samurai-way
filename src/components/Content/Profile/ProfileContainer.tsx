import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {StateType} from "../../../redux/redux-store";
import {
    addLikeToPost,
    addPost,
    changeNewPostText,
    ProfileInfoType,
    ProfilePageType,
    setProfileInfo,
    setToggleIsFetching
} from "../../../redux/profile-reducer";

type ProfileContainerPropsType = {
    profilePage: ProfilePageType

    setProfileInfo: (profileInfo: ProfileInfoType) => void
    setToggleIsFetching: (toggleIsFetching: boolean) => void
    changeNewPostText: (textData: string) => void
    addPost: () => void
    addLikeToPost: (id: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    // componentDidMount() {
    //     axios
    //         .get(`https://social-network.samuraijs.com/api/1.0/profile/23516`)
    //         .then(response => {
    //             this.props.setProfileInfo(response.data);
    //             this.props.setToggleIsFetching(false);
    //         })
    // }



    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage
    }
};

// let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
//     return {
//         changeNewPostText: (textData: string) => {
//             dispatch(changeNewPostTextAC(textData));
//         },
//         addPost: () => {
//             dispatch(addPostAC());
//         },
//         addLikeToPost: (id: string) => {
//             dispatch(addLikeToPostAC(id));
//         }
//     };
// };

export default connect(mapStateToProps, {
    setProfileInfo,
    setToggleIsFetching,
    changeNewPostText,
    addPost,
    addLikeToPost,
})(ProfileContainer);