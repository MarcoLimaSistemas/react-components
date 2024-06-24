import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
const SelectSearch = (props) => {

    const { label, id, options } = props;
    const [value, setValue] = React.useState();
    const [inputValue, setInputValue] = React.useState('');


    const handleOnChange = (v) => {
        setValue(v)
        localStorage.setItem(id, v.label)

        const evento = new CustomEvent(id, {
            detail: v,
        });
        window.dispatchEvent(evento);
    }
    return <ThemeProvider theme={theme}>
        <p>teste</p>
        <Autocomplete
            value={value}
            onChange={(_, newValue) => {
                handleOnChange(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(_, newInputValue) => {
                setInputValue(newInputValue);
            }}
            disablePortal
            id={id}
            options={options}
            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            renderInput={(params) => <TextField {...params} label={label} variant="standard" />}
        />

    </ThemeProvider>
};


export default SelectSearch;
