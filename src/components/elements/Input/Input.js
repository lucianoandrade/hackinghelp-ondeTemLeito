import React from "react";
import * as S from "./styled";

const Input = (props) => {
  const {type} = props;
  return <S.Input type={type}></S.Input>;
};
export default Input;
