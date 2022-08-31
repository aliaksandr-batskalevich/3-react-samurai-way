import {connect} from "react-redux";
import {ActionType, StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {
    CatsType,
    followAC,
    setCatsAC,
    setCurrentPageAC,
    setToggleIsFetchingAC,
    setTotalPageAC,
    unfollowAC
} from "../../../redux/cats-reducer";
import React from "react";
import axios from "axios";
import {Cats} from "./Cats";

type CatsContainerPropsType = {
    cats: CatsType
    currentPage: number
    catsOnPage: number
    totalPage: number
    toggleIsFetching: boolean

    follow: (id: number) => void
    unfollow: (id: number) => void
    setCats: (catsToSet: CatsType) => void
    setTotalPage: (totalPage: number) => void
    setCurrentPage: (currentPage: number) => void
    setToggleIsFetching: (toggleIsFetching: boolean) => void
}

class CatsContainer extends React.Component<CatsContainerPropsType, {}> {
    // constructor(props: CatsPropsType) {
    //     super(props);
    // }

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.catsOnPage}`)
            .then(response => {
                this.props.setCats(response.data.items);
                this.props.setTotalPage(Math.ceil(response.data.totalCount / this.props.catsOnPage));
                this.props.setToggleIsFetching(false);
            });
    }

    setCurrentPage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.setToggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.catsOnPage}`)
            .then(response => {
                this.props.setCats(response.data.items);
                this.props.setToggleIsFetching(false);
            });
    }

    render() {
        return <Cats
            cats={this.props.cats}
            currentPage={this.props.currentPage}
            totalPage={this.props.totalPage}
            toggleIsFetching={this.props.toggleIsFetching}

            follow={this.props.follow}
            unfollow={this.props.unfollow}
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
    };
};
let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id));
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id));
        },
        setCats: (catsToSet: CatsType) => {
            dispatch(setCatsAC(catsToSet))
        },
        setTotalPage: (totalPage: number) => {
            dispatch(setTotalPageAC(totalPage));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setToggleIsFetching: (toggleIsFetching: boolean) => {
            dispatch(setToggleIsFetchingAC(toggleIsFetching));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatsContainer);