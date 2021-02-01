import React from 'react';
// Node
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
// Own
import useStyleMui, {useStyledBadge} from "./styles/style.mui";

/*
 * Компонент "Аватар" (обертка над MaterialUI)
 */

// Входящие свойства
const propTypes = {
    // Показывать ли бейдж "онлайн"
    isOnline: PropTypes.bool,
    // Фото на аватаре
    userImg: PropTypes.node, 
    // Инициалы на аватаре
    userName: PropTypes.string,     
    // Позиция бейджа
    anchorOrigin: PropTypes.shape({
        vertical: PropTypes.string,
        horizontal: PropTypes.string,
    }),        
};

// Свойства по умолчанию
const defaultProps = {
    isOnline: false,
    userImg: null,
    userName: null,
    anchorOrigin: {vertical: 'bottom', horizontal: 'right'},    
};

// Экспорт компонента
export const MaterialAvatar = (props) => {
    // Преобразование пропсов в локальные константы
    const {isOnline, userImg, userName, anchorOrigin} = props;    
          
    const styleMui = useStyleMui(props);
    const StyledBadge = useStyledBadge(props);
    
    return (
        <div className={styleMui.root}>
            <StyledBadge                
                overlap="circle"
                anchorOrigin={anchorOrigin}
                variant={isOnline ? "dot" : "standart"}
            >
                <Avatar alt="" src={userImg}>{userName}</Avatar>
            </StyledBadge>
        </div>
    );    
}

// Описание свойств и дефолтные значения компонента
MaterialAvatar.propTypes = propTypes;
MaterialAvatar.defaultProps = defaultProps;

// Экспорт компонента
export default MaterialAvatar;