import React from "react";
import * as S from "./HeaderStyled";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();

  return (
    <S.HeaderContainer>
      {location.pathname === "/home" ? "" : "Medicine"}
    </S.HeaderContainer>
  );
};

export default Header;
