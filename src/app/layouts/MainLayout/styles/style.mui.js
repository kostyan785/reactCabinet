// Node
import {makeStyles} from '@material-ui/core/styles';

const useStyleMui = (props) => {    
    return makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexGrow: 1,
        },       
    }))();   
}

// Экспорт стиля
export default useStyleMui;
