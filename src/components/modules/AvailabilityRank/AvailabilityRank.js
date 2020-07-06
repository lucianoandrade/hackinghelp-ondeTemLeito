import React, { useState, useEffect } from "react";
import { Typography } from "../../elements";

const AvailabilityRank = ({ availability, style }) => {
  const [rank, setRank] = useState("");

  useEffect(() => {
    if (availability <= 25) {
      setRank("baixo");
    } else if (availability <= 50) {
      setRank("medio");
    } else {
      setRank("alto");
    }
  }, [availability]);

  return (
    <Typography color="#1C4491" style={{ fontSize: "12px", ...style }}>
      O ranking de disponibilidade desse hospital é considerado {rank}.
    </Typography>
  );
};

export default AvailabilityRank;
