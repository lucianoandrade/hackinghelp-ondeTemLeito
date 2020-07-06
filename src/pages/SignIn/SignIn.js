import React from "react";
import Card from "../../components/elements/CardSignIn/Card";
import { Guria } from "../../assets/index";
import { Input, Button, CardHeader } from "../../components/elements/index";
import * as S from "./SignInStyled";
import { Link } from "react-router-dom";
const SignIn = (props) => {
  // const location = {
  //   pathname: '/somewhere',
  //   state: { fromDashboard: true }
  // }
  return (
    <S.Main>
      <CardHeader>
        <S.ContainerButons>
          {/* <S.Button>
            <img
              src="https://www.shareicon.net/data/256x256/2015/08/19/87501_left_512x512.png"
              alt="Arrow"
            />
          </S.Button> */
          /* <S.Button>
            <img
              src="https://images.emojiterra.com/mozilla/512px/2795.png"
              alt="Adicionar"
            />
          </S.Button> */}
        </S.ContainerButons>
        <S.SubContainer>
          <S.Content>
            <h1>Olá,</h1>
            <p>Caso não tenha cadastro basta se cadastrar aqui</p>
            <Link to="/type-of-user">
              <button>QUERO ME CADASTRAR</button>
            </Link>
          </S.Content>
          <S.Img src={Guria} />
        </S.SubContainer>
      </CardHeader>
      <Card>
        <h1>Acessar</h1>
        <div>
          <label>Email:</label>
          <Input type="email" />
          <label>Senha:</label>
          <Input type="password" />
        </div>
        <Link to="/home">
          <Button value="ENTRAR NA PLATAFORMA" />
        </Link>
      </Card>
    </S.Main>
  );
};

export default SignIn;
