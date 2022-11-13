import {useDispatch} from "react-redux";
import {DispatchThunkType} from "./redux-store";

export const useAppDispatch = () => useDispatch<DispatchThunkType>()