import styled from "styled-components";

const RegisterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index:0;
`;

const Content = styled.div`
  width: 85%;
  min-height:200px;
  max-width: 540px;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 4px 8px #00000080;
  z-index:0;
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 300px;
  padding:2px 2px;
`;

const Avatar = styled.img`
width:100px;
height:100px;
border-radius:100%;
`;

const Row = styled.div`
width:${props=> props.width || '100%'};
height:${props=> props.height};
display:flex;
justify-content:space-between;
margin:${props=> props.margin}
`;
const Button = styled.img`
background-color:#1C449180;
border-radius:100%;
width:30px;
padding:4px;
`;

export { RegisterContainer, Content, Form, Avatar, Row, Button };
