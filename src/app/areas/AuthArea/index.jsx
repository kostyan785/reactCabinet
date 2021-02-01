import React from 'react';
// Node
import {Route} from "react-router-dom";
// Pages
import LoginPage from '../../pages/AuthPage/LoginPage';
import HelpPage from '../../pages/AuthPage/HelpPage';

/*
 * Область "Аутентификация"
 */

const AuthArea = (props) => {        
    return (
        <>
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="/help" render={() => <HelpPage />} />
        </>
    );
}

// Экспорт области
export default AuthArea;