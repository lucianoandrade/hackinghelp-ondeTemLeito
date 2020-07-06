import styled from "styled-components";

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 0px;
    color: #ffffff;
    font-size: 13px;
    font-family: sans-serif;
  }
`;
const Medice = styled.div`
  top: 9px;
  color: #fff;
  width: 130px;
  height: 34px;
  display: flex;
  font-size: 15px;
  position: absolute;
  align-items: center;
  border-radius: 40px;
  background: #39247b;
  font-family: sans-serif;
  justify-content: center;
  border: inset 0 8px 6px -6px #00000080;

  /* box-shadow-bottom: inset 0 0 50px #00000080; */
`;
const Container = styled.div`
  width: 352px;
  display: flex;
  height: 204px;
  background: #fff;
  margin: 20px auto;
  border-radius: 9px;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 8px 6px -6px #00000080;
`;
const ContainerButons = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 25px;
  justify-content: space-between;
`;
const Button = styled.button`
  color: #fff;
  width: 30px;
  height: 30px;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 15px;
  background: #1c449180;
  justify-content: center;
  img {
    width: 12px;
    height: 12px;
  }
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Content = styled.div`
  width: 170px;
  font-family: sans-serif;
  h1 {
    color: #707070;
    font-size: 27px;
  }
  p {
    width: 148px;
    color: #a8a8a8;
    font-size: 13px;
  }
  button {
    color: #fff;
    width: 167px;
    height: 30px;
    border: none;
    font-size: 12px;
    margin-top: 30px;
    border-radius: 6px;
    background: #1c4491;
  }
`;
const Img = styled.img`
  width: 155px;
  height: 147px;
  margin: -30px -10px;
`;
const SignInContainer = styled.div`
  width: 352px;
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
    input {
      width: 308px;
      height: 43px;
      border-radius: 6px;
      border: solid 0.5px #70707015;
      box-shadow: 0px 0px 50px #0000001a;
    }
  }
  button {
    color: #fff;
    width: 221px;
    height: 45px;
    border: none;
    font-size: 12px;
    margin-top: 30px;
    border-radius: 6px;
    background: #1c4491;
    box-shadow: 0px 0px 50px #0000001a;
  }
`;
export {
  Main,
  SignInContainer,
  Container,
  ContainerButons,
  SubContainer,
  Content,
  Button,
  Img,
  Medice,
};
