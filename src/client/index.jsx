import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
// import {ThemeProvider} from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import christmasTheme from './themes/christmasTheme';
// import {CacheProvider} from '@emotion/react';
// import createEmotionCache from './createEmotionCache';


hydrateRoot(document.getElementById('root'),
//   <React.StrictMode>    
    <BrowserRouter>
        <App />
    </BrowserRouter>  
//    </React.StrictMode> 
);