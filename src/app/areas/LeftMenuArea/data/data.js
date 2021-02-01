// Node
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DvrIcon from '@material-ui/icons/Dvr';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MailIcon from '@material-ui/icons/Mail';
import MessageIcon from '@material-ui/icons/Message';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';

export const panelListItems = 
[
    [                        
        {text: 'Объявления', icon: <AnnouncementIcon />},
        {text: 'Взаимодействие', icon: <MessageIcon />},
        {text: 'Обо мне', icon: <PersonIcon />},
        {text: 'Мои приказы', icon: <AssignmentIcon />},
        {text: 'Моё поступление', icon: <SchoolIcon />},
    ],
    [                     
        {text: 'Электронная почта', icon: <MailIcon />},
        {text: 'Общие документы', icon: <LibraryBooksIcon />},
        {text: 'Рабочие пространства', icon: <DvrIcon />},
        {text: 'Конференции', icon: <PeopleIcon />},
        {text: 'Предпочтения', icon: <FavoriteIcon />},
    ]
 ];    