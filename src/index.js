import React from 'react';
import ReactDOM from 'react-dom/client';
import SelectSearch from './components/selectSearch';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Checkboxes from './components/fragosoComponent';
import ContinuousSlider from './components/larissaComponent';


const props = {
    label: 'label default:',
    id: 'select-search-default',
    options: [
        { label: 'Opção 1', id: 1 },
        { label: 'Opção 2', id: 2 },
        { label: 'Opção 3', id: 3 },
    ]
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SelectSearch {...props} />
            <Checkboxes {...props} />
            <ContinuousSlider {...props} />
        </ThemeProvider>
    </React.StrictMode>,
);