import React from "react";
import * as S from "./ProgressBarStyled";

const ProgressBar = ({ progress, height }) => {
  return (
    <S.ProgressBarContainer height={height}>
      <S.Progress progress={progress}>{progress}</S.Progress>
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
