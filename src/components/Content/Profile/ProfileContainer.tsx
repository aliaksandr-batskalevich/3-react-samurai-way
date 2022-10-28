import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {StateType} from "../../../redux/redux-store";
import {
    ProfilePageType,

    addLikeToPost,
    addPost,
    changeNewPostText,

    getProfileTC,
} from "../../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";

type ProfileContainerPropsType = {
    isAuth: boolean
    profilePage: ProfilePageType

    changeNewPostText: (textData: string) => void
    addPost: () => void
    addLikeToPost: (id: string) => void

    getProfileTC: (id: number) => void
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
        this.props.getProfileTC(this.props.params);
    }


    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'}/>
        }

        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.authData.isAuth,
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
    changeNewPostText,
    addPost,
    addLikeToPost,

    getProfileTC,
})(WithRouterProfileContainer);