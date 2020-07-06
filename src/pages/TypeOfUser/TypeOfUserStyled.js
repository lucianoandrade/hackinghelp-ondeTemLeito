import styled from "styled-components";

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
  width: 197px;
  font-family: sans-serif;
  h1 {
    color: #707070;
    font-size: 27px;
  }
  p {
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
  width: 75px;
  height: 126px;
  margin: -30px -10px -30px 0;
`;
const UserType = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const UserTypeImg = styled.img`
  width: 140px;
  height: auto;
`;

export {
  Main,
  ContainerButons,
  Button,
  SubContainer,
  Content,
  Img,
  UserType,
  UserTypeImg,
};
