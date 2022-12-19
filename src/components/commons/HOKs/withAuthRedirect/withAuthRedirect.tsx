import React from "react";
import {RootStateType} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

type MapStateToPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsType) {
        const {isAuth, ...restProps} = props;
        if (!isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...restProps as T}/>;
    }


    let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
        return {isAuth: state.authData.isAuth};
    };

    let ConnectedRedirectComponent = connect(mapStateToProps, {})(RedirectComponent);

    return ConnectedRedirectComponent;
}
