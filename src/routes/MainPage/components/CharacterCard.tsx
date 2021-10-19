import React from 'react';
import cl from './CharacterCard.module.scss';
import { CharactersInfo } from '../../../state/Reducers/MainReducer/MainReducer';
import { CardActionArea, Card } from '@mui/material';

interface Props {
    info: CharactersInfo;
    setActiveCharacterId: (id: number) => void;
}

const CharacterCard: React.FC<Props> = ({ info, setActiveCharacterId }) => {
    const style = {
        backgroundImage: `url(${info.image})`,
    }
    return (
        <Card onClick={() => setActiveCharacterId(info.id)} style={style} className={cl.container}>
            <CardActionArea className={cl.content}>
                <div className={cl.info}>
                    Name : {info.name}
                </div>
            </CardActionArea>
        </Card>
    )
}

export default CharacterCard;