import styled from "styled-components";

const LogoContainer = styled.img`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
export { LogoContainer };
