import React from 'react';
// Node
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
// Own
import MaterialMenu from '../index';

export default {
    title: 'Material/MaterialMenu',
    component: MaterialMenu,
    argTypes: {
        anchorEl: {
            control: { 
                type: "radio", 
                options: [true, false] 
            }
        },       
    },    
    args: {
        anchorEl:    true,
        id: 'materialMenu',
        anchorOrigin: {vertical: 'top', horizontal: 'right' },
    }    
};

const Template = (args) => <MaterialMenu {...args} />;

export const MenuSimple = Template.bind({});
MenuSimple.args = {
    menuItems: [
        {name: 'Профиль'}, 
        {name: 'Мой аккаунт'}, 
        {name: 'Выход', onClick: () => console.log('menuItem onClick event')}
    ],
};

export const MenuWithIcons = Template.bind({});
MenuWithIcons.args = {        
    menuItems: [
        {icon: <MailIcon />, name: 'Электронная почта', badgeContent: 4, label: 'посмотреть 4 новых письма'},
        {icon: <NotificationsIcon />, name: 'Уведомления', badgeContent: 11, label: 'посмотреть 11 новых уведомлений'},
    ],
};