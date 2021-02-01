import React from 'react';
// Node
import clsx from 'clsx';
import {CardTitle} from 'reactstrap';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import {Formik, Field, Form} from "formik";
// Components
import StrapModal from '../../../components/strap/StrapModal';
// Own
import styleMod from '../styles/style.module.css';
import useStyleMui from "./styles/style.mui";

/*
 * Страница "Аутентификация"
 */

const AuthPage = (props) => {
    const styleMui = useStyleMui(); 
    // Контент ошибок
    let errorsContent = [];
    if(props.errorMess) {
        for(let key in props.errorMess) {
            if(Array.isArray(props.errorMess[key])) {         
                props.errorMess[key].forEach(function(error) {
                    errorsContent.push(error);
                });
             }
             else { errorsContent.push(props.errorMess[key]); }
        }
    }
    
    // Контент полей формы
    let fieldsContent = [];    
    for(let key in props.fields) {       
        fieldsContent.push(
            <div key={`authPage_fields_${key}`}>
                <CardTitle className={styleMod.cardTitle}>{props.fields[key].title}</CardTitle>
                <Field name={key} className="form-control" type={props.fields[key].type} />
            </div>
        );            
    }             
    
    // Контент модального окна
    let modalContent = 
        <Formik onSubmit={values => {props.authMethod(values)}} initialValues= {{}}>            
            <Form className={styleMod.loginForm}>
                {props.captionMess &&
                    <p color="light">{props.captionMess}</p>
                }
                {props.successMess &&
                    <Alert variant="outlined" severity="success">{props.successMess}</Alert>
                }            
                {props.errorMess &&
                    <Alert variant="outlined" severity="warning">
                        <b>{props.errorsHeader}</b>
                        <ul>
                            {errorsContent.map((error, index) => 
                                <li key={`authPage_errors_${index}`}>{error}</li>
                            )}
                        </ul>
                    </Alert>
                }            
                
                {fieldsContent}
                
                {props.submitText &&
                    <Button className={clsx(styleMod.cardButton, styleMui.purpleButton)} type="submit">
                        {props.submitText}
                    </Button>
                }
                
                {props.bottomContent}
            </Form>            
        </Formik>;
    
    return (                        
        <StrapModal 
            className="authDialog"
            modalHeader={props.modalHeader}
            headerIcon={props.headerIcon}
            windowHeader={props.windowHeader}
            modalContent={modalContent}
            showModal={props.showModal}
            backdropClassName="authBackdrop"
            wrapClassName="authWrapper"
        />
    );
}

// Экспорт контейнера страницы
export default AuthPage;