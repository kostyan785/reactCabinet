import React, {useState} from "react";
// Node
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

/*
 * Компонент "Меню" (обертка над MaterialUI)
 */

// Входящие свойства
const propTypes = {
    // Id меню
    id: PropTypes.string,
    // Якорь(компонент) элемента, вызвавшего меню
    anchorEl: PropTypes.element,
    // Позиция меню
    anchorOrigin: PropTypes.shape({
        vertical: PropTypes.string,
        horizontal: PropTypes.string,
    }),
    // Колбэк закрытия меню
    onClose: PropTypes.func,
    // Элементы(пункты) меню
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            // Заголовок
            name: PropTypes.string,
            // Иконка
            icon: PropTypes.node,
            // Текст в бейдже
            badgeContent: PropTypes.node,
            // Подсказка для бейджа
            label: PropTypes.string,
            // Колбэк закрытия пункта меню
            onClick: PropTypes.func,
        }),
    ),
};

// Свойства по умолчанию
const defaultProps = {
    anchorOrigin: {vertical: 'top', horizontal: 'right'},    
};

const MaterialMenu = (props) => {
    // Преобразование пропсов в локальные константы
    const {id, anchorOrigin, onClose, menuItems} = props;
    // Установка якоря на элемент, вызывающий меню
    const [anchorEl, setAnchorEl] = useState(null);
    // Метод открытия меню
    const handleMenuOpen = (event) => {      
        setAnchorEl(event.currentTarget);
    };
    // Метод закрытия меню
    const handleMenuClose = () => {
        setAnchorEl(null);        
    };
    
    return (
        <>
            <div onClick={handleMenuOpen}>
                {
                    // Элемент при клике на который открывается меню
                    // Этот элемент должен быть обернут в MaterialMenu
                    props.children
                }
            </div>
            <Menu
                id={id}
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}            
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {
                    // Маппинг массива элементов меню
                    menuItems.map(
                        (item) => 
                        <MenuItem key={item.name} onClick={onClose}>
                        {                        
                            item.icon
                            // Если задана иконка
                            ?   
                                <>
                                    <IconButton aria-label={item.label} color="inherit">
                                        <Badge badgeContent={item.badgeContent} color="secondary">
                                            {item.icon}
                                        </Badge>
                                    </IconButton>
                                    <p>{item.name}</p>                          
                                </>
                            :
                            // Если пункт меню без иконки
                                <span onClick={() => item.onClick && item.onClick()}>{item.name}</span>
                        }
                        </MenuItem>
                    )
                }            
            </Menu>
        </>
    );
}

// Описание свойств и дефолтные значения компонента
MaterialMenu.propTypes = propTypes;
MaterialMenu.defaultProps = defaultProps;

// Экспорт компонента
export default MaterialMenu;