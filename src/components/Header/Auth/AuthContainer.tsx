import React from "react";
import {Auth} from "./Auth";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {authUserTC} from "../../../redux/auth-reducer";

export type AuthContainerPropsType = {
    isAuth: boolean
    login: null | string
    avatarSrc: null | string

    authUser: () => void
}

class AuthContainer extends React.Component<AuthContainerPropsType, {}> {

    componentDidMount() {
       this.props.authUser();
    }

    render() {
        return <Auth
            isAuth={this.props.isAuth}
            login={this.props.login}

            avatarSrc={this.props.avatarSrc}
        />
    }
}

let mapStateToProps = (state: StateType) => {
    return (
        {
            isAuth: state.authData.isAuth,
            login: state.authData.login,
            avatarSrc: state.authData.avatarSrc,
        }
    )
}

export default connect(mapStateToProps, {authUser: authUserTC})(AuthContainer)