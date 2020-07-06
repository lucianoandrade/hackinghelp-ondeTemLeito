import styled from "styled-components";

const MapMarkerContainer = styled.div`
  display: flex;
  position: relative;
`;

const Marker = styled.img`
  position: absolute;
  top: 0;
  width: 65px;
  height: auto;
  z-index: 3;
`;

const HospitalImage = styled.img`
  position: absolute;
  width: 30px;
  height: auto;
  max-height: 20px;
  z-index: 2;
  left: 10px;
  top: 7px;
  border-radius: 50%;
`;

export { MapMarkerContainer, Marker, HospitalImage };
