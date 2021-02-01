// Node
import {makeStyles} from '@material-ui/core/styles';

const useStyleMui = (props) => {    
    return makeStyles((theme) => ({         
        hide: {
            display: 'none',
        },   
        header: {          
            flexGrow: 1,
        },
        logo: {            
            marginRight: '12px',
        },             
        menuButton: {
            marginRight: theme.spacing(2),
        },                
    }))();   
}

// Экспорт стиля
export default useStyleMui;
