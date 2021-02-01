// Node
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

export const useStyledBadge = (props) => {
    // Преобразование пропсов в локальные константы
    const {primary, secondary} = props;
    
    // Цвет бейджа "онлайн"
    let badgeColor = 'success';    
    if(primary) badgeColor = 'primary';
    if(secondary) badgeColor = 'secondary';
    
    return withStyles((theme) => ({
        badge: {
            backgroundColor: theme.palette[badgeColor].light,           
            color: theme.palette[badgeColor].light,
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: '$ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }))(Badge)
};

const useStyleMui = (props) => {    
    return makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },        
    }))();   
}

// Экспорт стиля
export default useStyleMui;
