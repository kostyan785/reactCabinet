import React, {useEffect} from 'react';
// Node
import {connect} from 'react-redux';
import {compose} from "redux";
// Components
import MaterialProgress from './app/components/material/MaterialProgress';
import withAuthRedirect from './app/components/hoc/withAuthRedirect';
// Layouts
import AuthLayout from './app/layouts/AuthLayout';
import MainLayout from './app/layouts/MainLayout';
// Redux
import {getAuthData} from './redux/reducers/auth-reducer';
// Own
import './App.css';

/*
 * Приложение "Личный кабинет"
 */

export function App(props) {
    useEffect(() => {
        // Получение информации об аутентификации
        props.getAuthData();
    });
    
    return (
        <div>            
            {
                // Если пользователь аутентифицирован, вывод главного шаблона
                props.isAuth                
                ? <>
                      <MaterialProgress variant="indeterminate" color="primary" />
                      <MainLayout />
                  </>
                // ... в противном случае, вывод шаблона аутентификации
                : <>
                      <MaterialProgress variant="indeterminate" color="secondary" />
                      <AuthLayout />
                  </>
            }
        </div>
    );
}

// Маппинг стейта в пропсы приложения
let mapStateToProps = (state) => {    
    return {isAuth: state.authStore.isAuth}
}

// Экспорт контейнера приложения
export default compose(   
    connect(mapStateToProps, {getAuthData}),
    withAuthRedirect()
)(App);