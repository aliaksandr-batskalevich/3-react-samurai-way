import React from "react";
import {Auth} from "./Auth";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {setUserAvatar, setUserData} from "../../../redux/auth-reducer";
import {authApi, profileApi} from "../../../api/api";

export type AuthContainerPropsType = {
    isAuth: boolean
    login: null | string
    avatarSrc: null | string

    setUserData: (id: number, login: string, email: string) => void
    setUserAvatar: (avatarSrc: null | string) => void
}

class AuthContainer extends React.Component<AuthContainerPropsType, {}> {

    componentDidMount() {
        authApi.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    this.props.setUserData(id, login, email);
                    profileApi.getProfile(id)
                        .then(response => {
                            this.props.setUserAvatar(response.photos.small)
                        })
                }
            })
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

export default connect(mapStateToProps, {setUserData, setUserAvatar})(AuthContainer)