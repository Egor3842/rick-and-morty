import React from 'react';
import { useHistory } from 'react-router';
import cl from './LeftSide.module.scss';

const LeftSide = () => {
    const history = useHistory();
    const handleClickItem = (url: string) => {
        history.push(url);
    }
    return (
        <div className={cl.container}>
            <div className={cl.content}>
                <div onClick={() => handleClickItem('/')}>Главная</div>
                <div onClick={() => handleClickItem('/about')}>Обо мне</div>
            </div>
        </div>
    )
}

export default LeftSide