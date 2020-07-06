import React from "react";
import * as S from "./CardHeaderStyled";

const CardHeader = (props) => {
  return <S.CardHeaderContainer>{props.children}</S.CardHeaderContainer>;
};

export default CardHeader;
