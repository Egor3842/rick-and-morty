import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getError, getFetching, getGenders, getMainData, getPagesAmount, getStatuses } from '../../state/Reducers/MainReducer/selectors';
import { getInfoThunk } from '../../state/Reducers/MainReducer/thunks';
import Modal from '../../ui/Modal/Modal';
import CharacterCard from './components/CharacterCard';
import cl from './MainPage.module.scss';
import cn from 'classnames';
import { setCurrentPage } from '../../state/Reducers/MainReducer/actions';
import Input from '../../ui/Input/Input';
import Selector from '../../ui/Selector/Selector';
import { Button } from '@mui/material';
import LoadingPage from '../../ui/LoadingPage/LoadingPage';

export interface FiltersData {
    name: string;
    gender: string;
    status: string;
}

const MainPage = () => {
    const data = useSelector(getMainData);
    const isFetching = useSelector(getFetching);
    const pagesAmount = useSelector(getPagesAmount);
    const currentPage = useSelector(getCurrentPage);
    const genders = useSelector(getGenders);
    const statuses = useSelector(getStatuses);
    const error = useSelector(getError);

    const [filtersData, setFiltersData] = useState<FiltersData>({ name: '', gender: '', status: '' });
    const [activeCharacterId, setActiveCharacterId] = useState<null | number>(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfoThunk(currentPage));
    }, [currentPage, dispatch])

    const currentCharacter = useMemo(() => activeCharacterId ? data?.results.find(el => el.id === activeCharacterId) : null, [activeCharacterId, data?.results])

    const handleClickPage = useCallback((page: number) => {
        dispatch(setCurrentPage(page));
    }, [dispatch]);

    const handleClickClose = useCallback(() => {
        setActiveCharacterId(null);
    }, [setActiveCharacterId]);

    const handleSubmit = useCallback(() => {
        dispatch(getInfoThunk(1, filtersData));
    }, [dispatch, filtersData]);

    if (error) return <div>{error}</div>;
    if (!data || isFetching) return <LoadingPage />;

    let pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i);
    }
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFiltersData(state => ({ ...state, [name]: value }));
    }
    const handleChangeSelector = (name: string, event: any) => {
        const value = event.target.value;
        setFiltersData(state => ({ ...state, [name]: value }));
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.filter}>
                <Input name={'name'} handleChange={handleChange} value={filtersData.name} />
                <Selector name={'gender'} handleChange={handleChangeSelector.bind(null, 'gender')} value={filtersData.gender} menuItems={genders} />
                <Selector name={'status'} handleChange={handleChangeSelector.bind(null, 'status')} value={filtersData.status} menuItems={statuses} />
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
            <div className={cl.container}>
                {data && data.results.map(el => {
                    return (
                        <CharacterCard setActiveCharacterId={setActiveCharacterId} key={el.id} info={el} />
                    )
                })}
                {currentCharacter && <Modal handleClickClose={handleClickClose} currentCharacter={currentCharacter} isOpen={activeCharacterId !== null} />}
            </div>
            <div className={cl.pagination}>
                {pages.map(el => <div onClick={() => handleClickPage(el)} className={cn(cl.item, el === currentPage && cl.active)} key={el}> {el} </div>)}
            </div>
        </div>
    )
}

export default MainPage;