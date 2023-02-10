import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {CatsType, followTC, getUsersTC, unfollowTC} from "../../../redux/cats-reducer";
import React from "react";
import {Cats} from "./Cats";
import {
    getCats,
    getCatsOnPage,
    getCurrentPage,
    getFollowingInProgress,
    getToggleIsFetching
} from "../../../redux/selectors";

type CatsContainerPropsType = {
    cats: CatsType
    toggleIsFetching: boolean
    followingInProgress: Array<number>
    currentPage: number
    catsOnPage: number

    getUsersTC: (currentPage: number, catsOnPage: number) => void
    followTC: (id: number) => void
    unfollowTC: (id: number) => void
}

class CatsContainer extends React.Component<CatsContainerPropsType, {}> {
    // constructor(props: CatsPropsType) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.catsOnPage);
    }

    followHandler = (id: number) => {
        this.props.followTC(id);
    }

    unfollowHandler = (id: number) => {
        this.props.unfollowTC(id);
    }

    render() {
        return <Cats
            cats={this.props.cats}
            toggleIsFetching={this.props.toggleIsFetching}
            followingInProgress={this.props.followingInProgress}

            follow={this.followHandler}
            unfollow={this.unfollowHandler}
        />
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        cats: getCats(state),
        toggleIsFetching: getToggleIsFetching(state),
        // array of usersId, that following in progress
        followingInProgress: getFollowingInProgress(state),
        currentPage: getCurrentPage(state),
        catsOnPage: getCatsOnPage(state),
    };
};

// old version mapDispatchToProps
// let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
//     return {
//         follow: (id: number) => {
//             dispatch(followAC(id));
//         },
//         unfollow: (id: number) => {
//             dispatch(unfollowAC(id));
//         },
//         setCats: (catsToSet: CatsType) => {
//             dispatch(setCatsAC(catsToSet))
//         },
//         setTotalPage: (totalPage: number) => {
//             dispatch(setTotalPageAC(totalPage));
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setToggleIsFetching: (toggleIsFetching: boolean) => {
//             dispatch(setToggleIsFetchingAC(toggleIsFetching));
//         },
//     };
// };

export default connect(mapStateToProps, {
    getUsersTC,
    followTC,
    unfollowTC,
})(CatsContainer);