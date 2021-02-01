import React from 'react';
// Node
import {Route} from "react-router-dom";
// Pages
import MainPage from '../../pages/MainPage';
// Own
import useStyleMui from "./styles/style.mui";

/*
 * Область "Контент"
 */

const ContentArea = (props) => {
    const styleMui = useStyleMui(props);
        
    return (
        <main className={styleMui.content}>
            <div className={styleMui.toolbar} />
            
            <Route path="/" exact render={() => <MainPage />} />
        </main>            
    );
}

// Экспорт области
export default ContentArea;