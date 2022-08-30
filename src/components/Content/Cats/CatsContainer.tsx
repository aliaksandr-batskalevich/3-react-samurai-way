import {connect} from "react-redux";
import {Cats} from "./Cats";
import {ActionType, StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {CatsType, followAC, setCatsAC, setCurrentPageAC, setTotalPageAC, unfollowAC} from "../../../redux/cats-reducer";

let mapStateToProps = (state: StateType) => {
    return {
        cats: state.catsPage.cats,
        currentPage: state.catsPage.currentPage,
        // num of cats on ine page
        catsOnPage: state.catsPage.catsOnPage,
        // num of pages
        totalPage: state.catsPage.totalPage,
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
    };
};

const CatsContainer = connect(mapStateToProps, mapDispatchToProps)(Cats);

export default CatsContainer;