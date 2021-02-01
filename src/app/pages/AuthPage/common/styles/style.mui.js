// Node
import {makeStyles} from '@material-ui/core/styles';

const useStyleMui = (props) => {    
    return makeStyles((theme) => ({
        purpleButton: {
            color: theme.palette.getContrastText('#9a0036'),
            backgroundColor: '#9a0036',
            '&:hover': {
                backgroundColor: '#9a0036',
            },
        },        
    }))();   
}

// Экспорт стиля
export default useStyleMui;
