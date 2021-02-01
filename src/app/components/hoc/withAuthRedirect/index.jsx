import React from 'react';
// Node
import {withRouter} from 'react-router';
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";

/*
 * HOC "Редирект"
 */

const withAuthRedirect = exceptPaths => Component => {    
    let mapStateToProps = (state) => {
        return {isAuth: state.authStore.isAuth}
    }
    if(!exceptPaths) exceptPaths = [];
    
    class HOComponent extends React.Component {
        construct() {
            this.redirect = null;
        }                
        
        render() {
            // Если пользователь не аутентифицирован и УРЛ не входит в массив исключений
            if(this.props.isAuth === false &&
               !exceptPaths.includes(this.props.location.pathname)) {
                this.redirect = <Redirect to="/login" />;
            }
            // Если пользователь аутентифицирован, но УРЛ - аутентификация
            else if(this.props.isAuth && this.props.location.pathname === '/login'){
                this.redirect = <Redirect to="/" />;
            }
            
            return (
                <div>
                    {this.redirect}
                    <Component {...this.props} />
                </div>
            );            
        }
    }

    return compose(
        connect(mapStateToProps),
        withRouter
    )(HOComponent);    
}

// Экспорт HOC
export default withAuthRedirect;