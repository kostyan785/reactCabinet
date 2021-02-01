export const loginFields = 
    {
        email:        {title: 'Логин', required: true, type: "text"},
        password:     {title: 'Пароль', required: true, type: "password"},         
    };
   
export const authData =
    {
        auth:
        {                
            windowHeader:   'Российский университет транспорта (МИИТ)',
            modalHeader:    'Личный кабинет',            
        },
        login:
        {            
            submitText:     'Войти',
            captionMess:    'Для продолжения, пожалуйста, введите логин и пароль',      
            bottomText:     'Новый пользователь или не можете войти?',
        },
        help:
        {                        
            captionMess:    'Новый пользователь или не можете войти?',
            bottomText:     'Вернуться к форме авторизации',
            bottomContent:
                [
                    <>
                        <p>
                            Для получения логина и пароля Вам необходимо обратиться в отдел кадров, если Вы сотрудник МИИТа, или в деканат,
                            если Вы студент.
                        </p>
                        <p>При себе требуется иметь документ, удостоверяющий личность.</p>
                        <p>По вопросам участия в олимпиаде Вам необходимо обратиться по контактам: тел. (495) 684-24-10, e-mail: <a target="_blank" rel="noreferrer" href="mailto:olymp@miit.ru?subject=Вход в Личный кабинет">olymp@miit.ru</a></p>

                        <p className="buttons">
                            <b>Телефон службы поддержки: </b>
                            (495) 684-29-34
                        </p>
                        <p>
                            <b>Email службы поддержки: </b>
                            <a target="_blank" rel="noreferrer" href="mailto:support@miit.ru?subject=Вход в Личный кабинет">support@miit.ru</a>
                        </p>
                        <p>
                            <b>Рекомендуемый браузер: </b>
                            <a target="_blank" rel="noreferrer" href="https://www.google.ru/search?q=Google+Chrome">Google Chrome</a> или <a target="_blank" rel="noreferrer" href="https://www.google.ru/search?q=Mozilla+Firefox">Mozilla Firefox</a>
                        </p>
                        <p>
                            <b>Узнайте Ваш браузер: </b>
                            <a target="_blank" rel="noreferrer" href="http://whatbrowser.ru">здесь</a>
                        </p>
                    </>
                ],
        },        
    };    