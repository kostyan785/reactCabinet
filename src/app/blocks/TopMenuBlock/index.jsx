import React from "react";
// Node
import {connect} from 'react-redux';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
// Assets
import userImg from "../../../assets/images/user.jpg";
// Components
import MaterialAvatar from "../../components/material/MaterialAvatar";
import MaterialMenu from "../../components/material/MaterialMenu";
// Redux
import {logout} from '../../../redux/reducers/auth-reducer';
// Own
import {useMenuItems, mobileMenuItems} from "./data/data";
import useStyleMui from "./styles/style.mui";

/*
 * Блок "Верхняя навигация"
 */

const TopMenuBlock = (props) => {      
    const styleMui = useStyleMui(props);
    const menuItems = useMenuItems(props);
    
    // Меню
    const menuId = 'top-menu';    
    // Мобильное Меню
    const mobileMenuId = 'top-menu-mobile';
    
    return (
        <>
            <div className={styleMui.sectionDesktop}>
                {
                    mobileMenuItems.map((item, index) =>
                        <IconButton key={`mobileMenuItem_${index}`} aria-label={item.label} color="inherit">
                            <Badge badgeContent={item.badgeContent} color="secondary">
                                {item.icon}
                            </Badge>
                        </IconButton>    
                    )
                }                            
            </div>

            <div className={styleMui.sectionMobile}>
                <MaterialMenu 
                    id={mobileMenuId}                    
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    menuItems={mobileMenuItems} 
                >
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"                        
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </MaterialMenu>
            </div>               

            <MaterialMenu 
                id={menuId}                
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}                
                menuItems={menuItems} 
            >
                <div                     
                    className={styleMui.avatar} 
                    aria-controls={menuId}
                    aria-haspopup="true"                    
                >
                    <MaterialAvatar isOnline userImg={userImg} userName="Y" />
                </div>
            </MaterialMenu>                        
        </>
    );
}

// Экспорт блока
export default connect(null, {logout})(TopMenuBlock);  