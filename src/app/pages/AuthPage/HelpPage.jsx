import React from 'react';
// Node
import {NavLink} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// Pages
import AuthPage from '../../pages/AuthPage/common/AuthPage';
// Own
import {authData} from "./data/data";
import styleMod from './styles/style.module.css';
import useStyleMui from "./styles/style.mui";

/*
 * Страница "Помощь"
 */

const HelpPage = (props) => {
    const styleMui = useStyleMui();
    
    let bottomContent =
        <>                
            {authData.help.bottomContent}         
            <Alert className={styleMod.alert} variant="outlined" severity="info">                    
                <NavLink to="/login">
                    {authData.help.bottomText}
                </NavLink>
            </Alert>
        </>;

    let headerIconContent =
            <Avatar className={styleMui.pinkAvatar}><LockOutlinedIcon /></Avatar>;

    return (
        <div>                
            <AuthPage 
                windowHeader={authData.auth.windowHeader}
                modalHeader={authData.auth.modalHeader}
                headerIcon={headerIconContent}
                captionMess={authData.help.captionMess}                
                authMethod={props.register}
                showModal
                bottomContent={bottomContent} 
            />
        </div>
    );    
}

// Экспорт страницы
export default HelpPage;