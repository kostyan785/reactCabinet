import React, {useContext} from "react";
// Node
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// Blocks
import LogoBlock from "../../blocks/LogoBlock";
import TopMenuBlock from "../../blocks/TopMenuBlock";
// Layouts
import {MainLayoutContext} from "../../layouts/MainLayout";
// Own
import useStyleMui from "./styles/style.mui";

/*
 * Область "Шапка"
 */

const HeaderArea = (props) => {      
    const styleMui = useStyleMui(props);
    
    const [panelOpenContext] = useContext(MainLayoutContext);      
    
    return (
        <AppBar
            position="fixed"
            className={clsx(styleMui.appBar, {
                [styleMui.appBarShift]: panelOpenContext,
            })}
        >
            <Toolbar>
                <LogoBlock />
                <TopMenuBlock /> 
            </Toolbar>          
        </AppBar>            
    );
}

// Экспорт области
export default HeaderArea;    