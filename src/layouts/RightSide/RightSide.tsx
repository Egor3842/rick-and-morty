import React from 'react';
import cl from './RightSide.module.scss';

interface Props {
    children: React.ReactNode;
}

const RightSide: React.FC<Props> = ({ children }) => {
    return (
        <div className={cl.container}>
            {children}
        </div>
    )
}

export default RightSide;