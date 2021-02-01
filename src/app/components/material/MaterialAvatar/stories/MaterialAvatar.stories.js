import React from 'react';
// Assets
import userImg from "../../../../../assets/images/user.jpg";
// Own
import {MaterialAvatar} from '../index';

export default {
    title: 'Material/Material Avatar',
    component: MaterialAvatar,
    args: {        
        isOnline: true,       
        userImg: null,
        userName: 'UN',
        anchorOrigin: {vertical: 'bottom', horizontal: 'right' },
    }    
};

const Template = (args) => <MaterialAvatar {...args} />;

export const AvatarSuccess = Template.bind({});
AvatarSuccess.args = {
    success: true,   
};

export const AvatarPrimary = Template.bind({});
AvatarPrimary.args = {
    primary: true,
};

export const AvatarSecondary = Template.bind({});
AvatarSecondary.args = {
    secondary: true,
};

export const AvatarNoPhoto = Template.bind({});
AvatarNoPhoto.args = {
    userImg: null,
    userName: null,
};

export const AvatarWithPhoto = Template.bind({});
AvatarWithPhoto.args = {
    userImg: userImg,    
};