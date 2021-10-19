import { TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';

interface Props {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    name: string;
}

const Input: React.FC<Props> = ({ handleChange, value, name }) => {
    return (
        <TextField id="outlined-basic" label={name} name={name} value={value} variant="outlined" onChange={handleChange} />
    )
}

export default Input;