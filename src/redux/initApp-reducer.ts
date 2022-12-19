type InitialStateType = {
    isInit: boolean
}
export type InitAppReducerActionType = ReturnType<typeof setInit>;

const SET_INIT = 'SET_INIT';

const initialState: InitialStateType = {
    isInit: false
};

export const initAppReducer = (state: InitialStateType = initialState, action: InitAppReducerActionType) => {
    switch (action.type) {
        case SET_INIT: {
            return {...state, isInit: true}
        }
        default:
            return state;
    }
}

export const setInit = () => {
    return {
        type: SET_INIT,
    } as const;
};
