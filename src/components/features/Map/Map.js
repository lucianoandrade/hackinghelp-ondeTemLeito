import React, { useState } from "react";
import { MapMarker, Typography, ProgressBar } from "../../elements";
import * as S from "./MapStyled";
import GoogleMapReact from "google-map-react";
import { KeyMaps } from "../../../config/constants";
import hospitals from "../../../mocks/hospitals";
import { AvailabilityRank } from "../../modules/AvailabilityRank";

const Map = () => {
  const [hospitalSelected, setHospitalSelected] = useState(hospitals[0]);

  const userLocation = navigator.geolocation.getCurrentPosition((position) => ({
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  }));

  return (
    <S.MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KeyMaps }}
        defaultCenter={userLocation || hospitals[0].position}
        defaultZoom={13}
        yesIWantToUseGoogleMapApiInternals
      >
        {hospitals.map((hospital, index) => (
          <MapMarker
            key={index}
            lat={hospital?.position?.lat}
            lng={hospital?.position?.lng}
            img={hospital.img}
            title={"hospital"}
            onClick={() => setHospitalSelected(hospital)}
          />
        ))}
      </GoogleMapReact>
      <S.Description>
        <S.HospitalImage
          src={hospitalSelected.img}
          alt={hospitalSelected.name}
        />
        <div>
          <Typography color="#707070">{hospitalSelected.name}</Typography>
          <Typography
            color="#707070"
            weight="400"
            style={{ margin: "4px 0 8px" }}
          >
            {hospitalSelected.tel}
          </Typography>
          <Typography
            color="#707070"
            style={{ fontSize: "12px", marginBottom: "5px" }}
          >
            Ranking de disponibilidade de leito
          </Typography>
          <ProgressBar progress={`${hospitalSelected.availability}%`} />
          <AvailabilityRank
            availability={hospitalSelected.availability}
            style={{ marginTop: "5px" }}
          />
        </div>
      </S.Description>
    </S.MapContainer>
  );
};

export default Map;
