import Navigation from "components/Navigation/Navigation";
import React from "react";

import { Root, Wrapper, Logo } from "./styles";

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <Navigation/>
    </Wrapper>
  </Root>
);
