// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF5246',  // Azul padrão
        },
        secondary: {
            main: '#181818',  // Vermelho padrão
        },
        error: {
            main: '#f44336',  // Vermelho de erro
        },
        warning: {
            main: '#ffa726',  // Laranja de aviso
        },
        info: {
            main: '#29b6f6',  // Azul de informação
        },
        success: {
            main: '#66bb6a',  // Verde de sucesso
        },
        background: {
            default: '#f5f5f5',  // Cor de fundo padrão
        },
    },
});

export default theme;
