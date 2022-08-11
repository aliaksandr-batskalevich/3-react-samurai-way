import React from 'react'
import {store, StoreType} from "./redux-store";

type ProviderPropsType = {
    value: StoreType
    children: React.ReactNode
}

export const StoreContext = React.createContext<StoreType>(store);


export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.value}>
            {props.children}
        </StoreContext.Provider>
    )
}