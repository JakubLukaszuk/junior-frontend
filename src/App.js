import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { Header } from "components/Header";
import { Home } from "pages/Home";
import NotFound from "pages/NotFound/NotFound";
import MyProfile from "pages/MyProfile/MyProfile";

import { GlobalStyle, theme } from "./styles";

import * as ROUTES from "./constants/routes";

export const App = () => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <Header />
    <Switch>
      <Route exact path={ROUTES.HOME} component = {Home}/>
      <Route path={ROUTES.NOT_FOUND} component = {NotFound}/>
      <Route path={ROUTES.MY_PROFILE} component ={MyProfile}/>
      <Redirect to={ROUTES.NOT_FOUND}/>
  </Switch>
  </ThemeProvider>
);
