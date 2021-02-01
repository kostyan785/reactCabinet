import React from 'react';
// Own
import {MaterialProgress} from '../index';

export default {
    title: 'Material/Material Progress',
    component: MaterialProgress,
    argTypes: {
        color: {
            control: { 
                type: "select", 
                options: ["primary", "secondary"] 
            }
        },
        variant: {
            control: { 
                type: "select", 
                options: ["indeterminate", "determinate"]
            }
        },        
    },
    args: {
        loadingComplete:    false,
        variant:            'indeterminate',
        color:              'primary',   
    }    
};

export const _MaterialProgress = (args) => <MaterialProgress {...args} />;