import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {
    CatsType,

    getUsersTC,
    setCurrentPageTC, followTC, unfollowTC
} from "../../../redux/cats-reducer";
import React from "react";
import {Cats} from "./Cats";

type CatsContainerPropsType = {
    cats: CatsType
    currentPage: number
    catsOnPage: number
    totalPage: number
    toggleIsFetching: boolean
    followingInProgress: Array<number>

    getUsersTC: (currentPage: number, catsOnPage: number) => void
    setCurrentPageTC: (currentPage: number, catsOnPage: number) => void
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

    setCurrentPageHandler = (currentPage: number) => {
        this.props.setCurrentPageTC(currentPage, this.props.catsOnPage);
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
            currentPage={this.props.currentPage}
            totalPage={this.props.totalPage}
            toggleIsFetching={this.props.toggleIsFetching}
            followingInProgress={this.props.followingInProgress}

            follow={this.followHandler}
            unfollow={this.unfollowHandler}
            setCurrentPage={this.setCurrentPageHandler}
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
    getUsersTC,
    setCurrentPageTC,
    followTC,
    unfollowTC,
})(CatsContainer);