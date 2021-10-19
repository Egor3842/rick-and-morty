import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

interface Props {
    value: string;
    handleChange: (e: any) => void;
    name: string;
    menuItems: string[];
}

const Selector: React.FC<Props> = ({ value, handleChange, name, menuItems }) => {
    return (
        <FormControl style={{ width: '200px' }}>
            <InputLabel id="demo-simple-select-label">{name}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                name={name}
                onChange={handleChange}
            >
                {menuItems?.map(el => {
                    return (
                        <MenuItem key={el} value={el}>{el}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>

    )
}

export default Selector;