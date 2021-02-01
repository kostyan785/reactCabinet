import React from 'react'
// Node
import {shallow} from 'enzyme'
import MailIcon from '@material-ui/icons/Mail';
// Own
import MaterialMenu from '../index';

describe('MaterialMenu', () => {
    const props = {
        id: 'materialMenu',
        anchorEl: null,
        anchorOrigin: {vertical: 'top', horizontal: 'right' },        
        onClose: () => {},
        menuItems: [],
    }
    
    describe('MaterialMenu инициализация', () => {
        const materialMenu = shallow(<MaterialMenu {...props} />); 
        
        it("Отсутствуют пункты меню", () => {            
            expect(materialMenu.find('li')).toHaveLength(0);
        });        
    });
    
    describe('MaterialMenu рендер', () => {
        const nextProps = {
            ...props,
            menuItems: [
                {icon: <MailIcon />, name: 'Заголовок1', badgeContent: 'Содержимое1', label: 'Подсказка1'},
                {icon: <MailIcon />, name: 'Заголовок2', badgeContent: 'Содержимое2', label: 'Подсказка2'},
            ],
        }
        
        const materialMenu = shallow(<MaterialMenu {...nextProps} />); 
        
        it("Пункты меню отрисовались", () => {            
            expect(materialMenu.find('li')).toHaveLength(0);
        });       
    });    
});