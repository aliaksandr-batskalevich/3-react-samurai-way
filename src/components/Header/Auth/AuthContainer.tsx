import React from "react";
import {Auth} from "./Auth";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {logoutTC} from "../../../redux/auth-reducer";

export type AuthContainerPropsType = {
    isAuth: boolean
    login: null | string
    avatarSrc: null | string

    logOut: () => void
}

class AuthContainer extends React.Component<AuthContainerPropsType, {}> {

    componentDidMount() { }

    render() {
        return <Auth
            isAuth={this.props.isAuth}
            login={this.props.login}

            avatarSrc={this.props.avatarSrc}
            logOut={this.props.logOut}
        />
    }
}

let mapStateToProps = (state: RootStateType) => {
    return (
        {
            isAuth: state.authData.isAuth,
            login: state.authData.login,
            avatarSrc: state.authData.avatarSrc,
        }
    )
}

export default connect(mapStateToProps, {logOut: logoutTC})(AuthContainer)