import React from 'react'
// Node
import {shallow} from 'enzyme'
// Own
import {MaterialProgress} from '../index';

describe('MaterialProgress', () => {
    const props = {
        loadingComplete: false,
    }
    
    describe('Идет загрузка.', () => {
        const materialProgress = shallow(<MaterialProgress {...props}/>);

        it('MaterialProgress отрисовывается.', () => {
            expect(materialProgress.find('div')).toHaveLength(1);
        });              
    });
    
    describe('Загрузка завершена.', () => {
        const nextProps = {
            ...props,
            loadingComplete: true,
        }        
        const materialProgress = shallow(<MaterialProgress {...nextProps}/>);

        it('MaterialProgress НЕ отрисовывается.', () => {
            expect(materialProgress.find('div')).toHaveLength(0);
        });              
    });    
});