import React from "react";
import * as S from "./LogoStyled";
// import logo from "./assets/logo.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({ width, height, padding, margin }) => {
  return (
    <Link to="/">
      <S.LogoContainer
        // src={logo}
        width={width}
        height={height}
        padding={padding}
        margin={margin}
      />
    </Link>
  );
};

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
};

Logo.defaultProps = {
  width: "auto",
  height: "auto",
  padding: "0",
  margin: "0",
};

export default Logo;
