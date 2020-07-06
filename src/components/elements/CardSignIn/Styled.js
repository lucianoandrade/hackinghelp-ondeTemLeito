import styled from "styled-components";

const Text = styled.main`
  margin: 0px;
  color: #ffffff;
  font-size: 13px;
  font-family: sans-serif;
`;
const SignInContainer = styled.div`
  width: 100%;
  min-width: 290px; 
  max-width: 352px;
  display: flex;
  height: 340px;
  background: #fff;
  border-radius: 9px;
  align-items: center;
  flex-direction: column;
  margin: 10px auto 25px auto;
  justify-content: space-around;
  box-shadow: 0px 0px 15px #00000080;
  h1 {
    color: #707070;
    font-size: 27px;
    font-family: sans-serif;
  }
  div {
    display: flex;
    flex-direction: column;
    label {
      color: #a7a7a7;
      font-size: 18px;
      font-family: sans-serif;
    }
  }
`;
export { Text, SignInContainer };
