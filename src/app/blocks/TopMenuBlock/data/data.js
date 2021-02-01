// Node
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

export const useMenuItems = (props) => 
    [
        {name: 'Профиль'},
        {name: 'Мой аккаунт'},
        {name: 'Выход', onClick: props.logout},         
    ];
   
export const mobileMenuItems =
    [
        {icon: <MailIcon />, name: 'Электронная почта', badgeContent: 4, label: 'посмотреть 4 новых письма'},
        {icon: <NotificationsIcon />, name: 'Уведомления', badgeContent: 11, label: 'посмотреть 11 новых уведомлений'},       
    ];    