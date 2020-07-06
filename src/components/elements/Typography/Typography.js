import React from "react";
import Typographies from "./TypographyStyled";
import PropTypes from "prop-types";

const Typography = ({ children, type, color, weight, ...rest }) => {
  const Element = Typographies[type];

  return (
    <Element color={color} weight={weight} {...rest}>
      {children}
    </Element>
  );
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["title", "subtitle", "text"]),
  color: PropTypes.string,
  weight: PropTypes.oneOf([400, 500, 600, 700, 800, 900]),
};

Typography.defaultProps = {
  type: "text",
  color: "#000",
  weight: 500,
};

export default Typography;
