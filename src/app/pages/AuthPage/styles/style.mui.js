// Node
import {makeStyles} from '@material-ui/core/styles';
import {pink} from '@material-ui/core/colors';

const useStyleMui = (props) => {    
    return makeStyles((theme) => ({
        pinkAvatar: {
            color: theme.palette.getContrastText(pink[500]),
            backgroundColor: pink[500],
        },       
    }))();   
}

// Экспорт стиля
export default useStyleMui;
