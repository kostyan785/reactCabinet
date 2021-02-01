import React, {useContext} from "react";
// Node
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// Layouts
import {MainLayoutContext} from "../../layouts/MainLayout";
// Own
import useStyleMui from "./styles/style.mui";
import {panelListItems} from "./data/data";

/*
 * Область "Левое меню"
 */

const LeftMenuArea = (props) => { 
    const theme = useTheme();   
    const styleMui = useStyleMui(props);
       
    const [panelOpenContext, setPanelOpenContext] = useContext(MainLayoutContext);    
    
    return (
        <Drawer
            variant="permanent"
            className={clsx(styleMui.drawer, {
              [styleMui.drawerOpen]: panelOpenContext,
              [styleMui.drawerClose]: !panelOpenContext,
            })}
            classes={{
              paper: clsx({
                [styleMui.drawerOpen]: panelOpenContext,
                [styleMui.drawerClose]: !panelOpenContext,
              }),
            }}
        >
            <div className={styleMui.toolbar}>
                <IconButton onClick={() => setPanelOpenContext(false)}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {panelListItems.map((item, index, array) => (
                    <div key={`panellistItem_${index}`}>
                        {
                            item.map((sub, ind) => (
                                <ListItem button key={sub.text}>                                        
                                    <ListItemIcon>{sub.icon}</ListItemIcon>
                                    {sub.header && sub.header}
                                    {sub.text && <ListItemText primary={sub.text} /> }                                        
                                </ListItem>
                            ))
                        }
                        {index !== array.length - 1  &&
                            <Divider />
                        }
                    </div>
                ))}
            </List>                
        </Drawer>            
    );
}

// Экспорт области
export default LeftMenuArea;