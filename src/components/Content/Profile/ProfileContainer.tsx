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
import {useParams} from "react-router-dom";
import {profileApi} from "../../../api/api";

type ProfileContainerPropsType = {
    profilePage: ProfilePageType

    setProfileInfo: (profileInfo: ProfileInfoType) => void
    setToggleIsFetching: (toggleIsFetching: boolean) => void
    changeNewPostText: (textData: string) => void
    addPost: () => void
    addLikeToPost: (id: string) => void
}

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)

function withRouter(Component: (props: any) => any) {
    const PseComponent = (props: any) => {
        let params = useParams();
        return <Component {...props} params={params.userId}/>
    }
    return PseComponent;
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        // @ts-ignore
        profileApi.getProfile(this.props.params)
            .then(response => {
                this.props.setProfileInfo(response);
                this.props.setToggleIsFetching(false);
            })
    }


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

// @ts-ignore
const WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setProfileInfo,
    setToggleIsFetching,
    changeNewPostText,
    addPost,
    addLikeToPost,
})(WithRouterProfileContainer);