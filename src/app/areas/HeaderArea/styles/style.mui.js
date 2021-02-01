// Node
import {makeStyles} from '@material-ui/core/styles';

const useStyleMui = (props) => {    
    return makeStyles((theme) => ({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: props.drawerWidth,
            width: `calc(100% - ${props.drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },               
    }))();   
}

// Экспорт стиля
export default useStyleMui;
