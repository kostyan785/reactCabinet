import React, {useContext} from "react";
// Node
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
// Assets
import logoImg from "../../../assets/images/logo_eagle_little.svg";
// Layouts
import {MainLayoutContext} from "../../layouts/MainLayout";
// Own
import useStyleMui from "./styles/style.mui";

/*
 * Блок "Лого"
 */

const LogoBlock = (props) => {      
    const styleMui = useStyleMui(props);
    
    const [panelOpenContext, setPanelOpenContext] = useContext(MainLayoutContext);
    
    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setPanelOpenContext(true)}
                edge="start"
                className={clsx(styleMui.menuButton, {
                    [styleMui.hide]: panelOpenContext,
                })}
            >
                <MenuIcon />
            </IconButton>

            <div className={styleMui.logo}>
                <img src={logoImg} alt="" />                                                          
            </div>
            <Typography className={styleMui.header} variant="h6" noWrap>
                Личный кабинет
            </Typography>
        </>
    );
}

// Экспорт блока
export default LogoBlock;    