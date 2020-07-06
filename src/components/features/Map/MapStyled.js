import styled from "styled-components";

const MapContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 550px;
  height: 90vh;
  & div {
    border-radius: 10px;
  }
`;

const Marker = styled.div`
  width: 40px;
  height: 40px;
  background-color: #321cb3;
  border-radius: 100%;
`;

const Description = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #fff;
  padding: 20px;
  width: 100%;
  display: flex;
`;

const HospitalImage = styled.img`
  width: 62px;
  height: 62px;
  border: #153673 3px solid;
  border-radius: 50%;
  margin-right: 15px;
`;

export { MapContainer, Marker, Description, HospitalImage };
