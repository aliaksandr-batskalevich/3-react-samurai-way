import {connect} from "react-redux";
import {Cats} from "./Cats";
import {ActionType, StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {CatsType, followAC, setCatsAC, unfollowAC} from "../../../redux/cats-reducer";

let mapStateToProps = (state: StateType) => {
    return {
        cats: state.catsPage.cats
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
            dispatch((setCatsAC(catsToSet)))
        }
    };
};

const CatsContainer = connect(mapStateToProps, mapDispatchToProps)(Cats);

export default CatsContainer;