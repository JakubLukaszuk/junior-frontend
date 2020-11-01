import React from 'react';
import * as ROUTES from '../../constants/routes';
import  NavigationItem  from '../NavigationItem/NavigationItem';
import './NavigationItems.css'

const Navigation = () => (
    <ul className = {'NavigationItems'}>
        <NavigationItem link = {ROUTES.HOME} exact>Start</NavigationItem>
        <NavigationItem link = {ROUTES.MY_PROFILE}>My profile</NavigationItem>
    </ul>
  );

  export default Navigation;