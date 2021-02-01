// Node
import {makeStyles} from '@material-ui/core/styles';

const useStyleMui = (props) => {    
    return makeStyles((theme) => ({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },      
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),                        
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },       
    }))();   
}

// Экспорт стиля
export default useStyleMui;