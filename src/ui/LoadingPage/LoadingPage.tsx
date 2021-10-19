import { CircularProgress } from '@mui/material';
import React from 'react';
import cl from './Loading.module.scss';

const LoadingPage = () => {
    return (
        <div className={cl.container}>
            <CircularProgress />
        </div>
    )
}

export default LoadingPage;