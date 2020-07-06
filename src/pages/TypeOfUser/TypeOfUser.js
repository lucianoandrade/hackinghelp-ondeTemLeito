import React from "react";
import Card from "../../components/elements/CardSignIn/Card";
import { Guri, paciente, profissionalSaude } from "../../assets/index";
import { Button, CardHeader } from "../../components/elements/index";
import * as S from "./TypeOfUserStyled";
import { Link, useHistory } from "react-router-dom";

const TypeOfUser = (props) => {
  const navigation = useHistory();

  return (
    <S.Main>
      <CardHeader>
        <S.ContainerButons>
          <S.Button>
            <img
              onClick={() => navigation.goBack()}
              src="https://www.shareicon.net/data/256x256/2015/08/19/87501_left_512x512.png"
              alt="Arrow"
            />
          </S.Button>
          {/* <S.Button>
            <img
              src="https://images.emojiterra.com/mozilla/512px/2795.png"
              alt="Adicionar"
            />
          </S.Button> */}
        </S.ContainerButons>
        <S.SubContainer>
          <S.Content>
            <h1>Olá,</h1>
            <p>
              Nossa plataforma foi feita para atender de maneira adequada todos
              os tipos de usuários por favor escolha a baixo a especificação em
              qual você se encaixa.
            </p>
          </S.Content>
          <S.Img src={Guri} />
        </S.SubContainer>
      </CardHeader>

      <Card>
        <h1>cadastrar</h1>
        <p>sou:</p>
        <S.UserType>
          <Link to="/cadastro/med">
            <S.UserTypeImg src={profissionalSaude} />{" "}
          </Link>
          <Link to="/cadastro/pac">
            <S.UserTypeImg src={paciente} />
          </Link>
        </S.UserType>
        <Link to="/home">
          <Button value="continuar" />
        </Link>
      </Card>
    </S.Main>
  );
};

export default TypeOfUser;
