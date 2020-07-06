import React from "react";
import * as S from "./MapMarkerStyled";
import { MarkerImg } from "../../../assets";

const MapMarker = ({ img, onClick }) => {
  return (
    <S.MapMarkerContainer onClick={onClick}>
      <S.Marker src={MarkerImg} alt="marker" />
      <S.HospitalImage src={img} alt="" />
    </S.MapMarkerContainer>
  );
};

export default MapMarker;
