import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {
    CatsType,
    follow,
    setCats,
    setCurrentPage, setFollowing,
    setToggleIsFetching,
    setTotalPage,
    unfollow
} from "../../../redux/cats-reducer";
import React from "react";
import {Cats} from "./Cats";
import {followApi, usersApi} from "../../../api/api";

type CatsContainerPropsType = {
    cats: CatsType
    currentPage: number
    catsOnPage: number
    totalPage: number
    toggleIsFetching: boolean
    followingInProgress: Array<number>

    follow: (id: number) => void
    unfollow: (id: number) => void
    setCats: (catsToSet: CatsType) => void
    setTotalPage: (totalPage: number) => void
    setCurrentPage: (currentPage: number) => void
    setToggleIsFetching: (toggleIsFetching: boolean) => void
    setFollowing: (id: number, isFollowing: boolean) => void
}

class CatsContainer extends React.Component<CatsContainerPropsType, {}> {
    // constructor(props: CatsPropsType) {
    //     super(props);
    // }

    componentDidMount() {
        usersApi.getUsers(this.props.currentPage, this.props.catsOnPage).then(response => {
            this.props.setCats(response.items);
            this.props.setTotalPage(Math.ceil(response.totalCount / this.props.catsOnPage));
            this.props.setToggleIsFetching(false);
        });
    }

    followHandler = (id: number) => {
        this.props.setFollowing(id, true);
        followApi.followUser(id).then(response => {
            if (response === 0) {
                this.props.follow(id);
                this.props.setFollowing(id, false);
            }
        });
    }

    unfollowHandler = (id: number) => {
        this.props.setFollowing(id, true);
        followApi.unfollowUser(id).then(response => {
            if (response === 0) {
                this.props.unfollow(id);
                this.props.setFollowing(id, false);
            }
        });
    }

    setCurrentPage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.setToggleIsFetching(true);
        usersApi.getUsers(currentPage, this.props.catsOnPage)
            .then(response => {
                this.props.setCats(response.items);
                this.props.setToggleIsFetching(false);
            });
    }

    render() {
        return <Cats
            cats={this.props.cats}
            currentPage={this.props.currentPage}
            totalPage={this.props.totalPage}
            toggleIsFetching={this.props.toggleIsFetching}
            followingInProgress={this.props.followingInProgress}

            follow={this.followHandler}
            unfollow={this.unfollowHandler}
            setCurrentPage={this.setCurrentPage}
        />
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        cats: state.catsPage.cats,
        currentPage: state.catsPage.currentPage,
        // num of cats on ine page
        catsOnPage: state.catsPage.catsOnPage,
        // num of pages
        totalPage: state.catsPage.totalPage,
        toggleIsFetching: state.catsPage.toggleIsFetching,
        followingInProgress: state.catsPage.followingInProgress
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
    follow,
    setCats,
    setCurrentPage,
    setToggleIsFetching,
    setTotalPage,
    unfollow,
    setFollowing,
})(CatsContainer);