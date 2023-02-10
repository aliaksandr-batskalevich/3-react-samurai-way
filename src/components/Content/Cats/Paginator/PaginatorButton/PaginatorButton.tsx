import React from 'react';
import s from './PaginatorButton.module.css';

type PaginatorButtonType = 'toFirst' | 'toLast' | 'jumpDownByOne' | 'jumpUpByOne' | 'jumpDownBig' | 'jumpUpBig';
type PaginatorButtonPropsType = {
    buttonType: PaginatorButtonType
    onClick: () => void
}

export const PaginatorButton: React.FC<PaginatorButtonPropsType> = ({}) => {

    return (
        <div className={s.paginatorButtonWrapper}>

        </div>
    );
};