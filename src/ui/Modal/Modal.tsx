import { Dialog, IconButton } from '@mui/material';
import React from 'react';
import { CharactersInfo } from '../../state/Reducers/MainReducer/MainReducer';
import cl from './Modal.module.scss';
import CloseIcon from '../../assets/close.svg';

interface Props {
    isOpen: boolean;
    currentCharacter: CharactersInfo;
    handleClickClose: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, currentCharacter, handleClickClose }) => {
    return (
        <Dialog className={cl.container} open={isOpen}>
            <IconButton className={cl.close} onClick={handleClickClose}>
                <img alt='' src={CloseIcon} />
            </IconButton>
            <div className={cl.header}>
                <img alt='' src={currentCharacter.image} />
            </div>
            <div className={cl.content}>
                Name: {currentCharacter.name} <br />
                Status: {currentCharacter.status} <br />
                Gender: {currentCharacter.gender} <br />
                Number of episodes: {currentCharacter.episode.length}
            </div>
        </Dialog>
    )
}

export default Modal;