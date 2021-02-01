// Node
import {makeStyles} from '@material-ui/core/styles';

const useStyleMui = (props) => {    
    return makeStyles((theme) => ({
        avatar: {
            cursor: 'pointer',
        },               
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },                
    }))();   
}

// Экспорт стиля
export default useStyleMui;
