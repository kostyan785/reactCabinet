import React from 'react';
// Node
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {NavLink} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// Redux
import {login, setMesages} from '../../../redux/reducers/auth-reducer';
// Own
import AuthPage from './common/AuthPage';
import {authData, loginFields} from "./data/data";
import styleMod from './styles/style.module.css';
import useStyleMui from "./styles/style.mui";

/*
 * Страница "Логин"
 */

const LoginPage = (props) => {
    const styleMui = useStyleMui();
    
    if(props.isAuth === true || props.isAuth === null) {
        return <Redirect to="/" />;
    }
    if(props.isAuth === false) {
        let bottomContent =
            <div>
                <br/>
                <Alert className={styleMod.alert} variant="outlined" severity="error">                    
                    <NavLink to="/help" onClick={() => props.setMesages()}>
                        {authData.login.bottomText}
                    </NavLink>
                </Alert>
            </div>;
        let headerIconContent =
                <Avatar className={styleMui.pinkAvatar}><LockOutlinedIcon /></Avatar>;
        return (
            <AuthPage 
                windowHeader={authData.auth.windowHeader}
                modalHeader={authData.auth.modalHeader}
                headerIcon={headerIconContent}
                submitText={authData.login.submitText}
                fields={loginFields}
                captionMess={authData.login.captionMess}
                errorMess={props.errorMess}
                authMethod={props.login}
                showModal={true}
                bottomContent={bottomContent} 
            />
        );
    }
}

// Маппинг стейта в пропсы страницы
let mapStateToProps = (state) => {
    return {
        isAuth:     state.authStore.isAuth,
        errorMess:  state.authStore.errorMess,
    }
}

// Экспорт контейнера страницы
export default connect(mapStateToProps, {login, setMesages})(LoginPage);