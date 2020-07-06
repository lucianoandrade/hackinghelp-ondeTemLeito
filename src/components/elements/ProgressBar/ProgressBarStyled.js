import styled from "styled-components";

const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => props.height || "auto"};
  border: 2px #00000040 solid;
`;

const Progress = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
  width: ${(props) => props.progress};
  border: 1px solid #811122;
  font-size: 10px;
`;

export { ProgressBarContainer, Progress };
