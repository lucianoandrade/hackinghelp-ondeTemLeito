import React, { useState } from "react";
import { Typography } from "../../components/elements/";
import * as S from "./RegisterStyled";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  TextareaAutosize,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { HealthInsurance as HealthInsuranceMock } from "../../mocks/healthInsurance";
import { BloodType as BloodTypeMock } from "../../mocks/bloodType";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "48%",
    fontSize: 16,
  },
  fullWidth: {
    width: "100%",
    margin: "10px 0px",
  },
  Button: {
    margin: "10px 0px",
    backgroundColor: "#1C4491",
  },
  label: {
    color: "#A7A7A7",
    overflowWrap: "break-word",
  },
  textArea:{
    resize: 'none',
    width: "100%",
    margin: "13px 0px",
  }
}));

const Register = (props) => {
  const classes = useStyles();
  const navigation = useHistory();
  const { type } = useParams();
  const [healthInsurance] = useState(HealthInsuranceMock);
  const [bloodType] = useState(BloodTypeMock);

  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [bloodValue, setBloodValue] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [healthValue, setHealthValue] = useState("");
  const [allergy, setAllergy] = useState("");
  const [diagnostics, setDiagnostics] = useState("");
  const [medicament, setMedicament] = useState("");
  const [shareData, setShareData] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    name === "name" && setName(value);
    name === "birth" && setBirth(value);
    name === "bloodValue" && setBloodValue(value);
    name === "gender" && setGender(value);
    name === "weight" && setWeight(value);
    name === "height" && setHeight(value);
    name === "healthValue" && setHealthValue(value);
    name === "allergy" && setAllergy(value);
    name === "diagnostics" && setDiagnostics(value);
    name === "medicament" && setMedicament(value);
    name === "shareData" && setShareData(value);
  };

  const isValid =
    name &&
    birth &&
    bloodValue &&
    gender &&
    weight &&
    height &&
    healthValue &&
    allergy &&
    diagnostics &&
    medicament;

  return (
    <>
      <S.RegisterContainer>
        <S.Content>
          <S.Row width="80%" margin="20px 0px">
            <S.Button
              onClick={() => navigation.goBack()}
              src="https://www.shareicon.net/data/256x256/2015/08/19/87501_left_512x512.png"
              alt="Arrow"
            />
            {/* <S.Button
              src="https://images.emojiterra.com/mozilla/512px/2795.png"
              alt="Adicionar"
            /> */}
          </S.Row>
          <Typography type="title" weight="600" style={{ margin: "10px 0px" }}>
            Meu Perfil {type === "med" ? "Médico" : "Paciente"}
          </Typography>
          <S.Avatar
            src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
            alt="avatar"
          />
          <S.Form autoComplete="off">
            <TextField
              name="name"
              id="standard-basic"
              label="Nome"
              value={name}
              onChange={handleChange}
              variant="standard"
              margin="dense"
              fullWidth
            />
            <TextField
              name="birth"
              id="standard-basic"
              label="Data de nascimento"
              value={birth}
              onChange={handleChange}
              variant="standard"
              margin="dense"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <S.Row>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Tipo sanguíneo
                </InputLabel>
                <Select
                  name="bloodValue"
                  id="demo-simple-select"
                  labelId="demo-simple-select-label"
                  value={bloodValue}
                  onChange={handleChange}
                  fullWidth
                >
                  {bloodType.map((res, index) => (
                    <MenuItem key={index} value={`${res.type}`}>
                      {res.type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                <Select
                  name="gender"
                  id="demo-simple-select"
                  labelId="demo-simple-select-label"
                  value={gender}
                  onChange={handleChange}
                >
                  <MenuItem value={"Feminino"}>F</MenuItem>
                  <MenuItem value={"Masculino"}>M</MenuItem>
                  <MenuItem value={"Não_Declarar"}>Não declarar</MenuItem>
                </Select>
              </FormControl>
            </S.Row>
            <S.Row>
              <TextField
                name="weight"
                id="standard-basic"
                label="Peso"
                value={weight}
                onChange={handleChange}
                className={classes.formControl}
                size="small"
                margin="dense"
                variant="standard"
              />
              <TextField
                name="height"
                id="standard-basic"
                label="Altura"
                value={height}
                onChange={handleChange}
                className={classes.formControl}
                size="small"
                margin="dense"
                variant="standard"
              />
            </S.Row>
            <FormControl className={classes.fullWidth}>
              <InputLabel id="demo-simple-select-label">
                Plano de saúde
              </InputLabel>
              <Select
                name="healthValue"
                id="demo-simple-select"
                labelId="demo-simple-select-label"
                value={healthValue}
                onChange={handleChange}
                fullWidth
              >
                {healthInsurance.map((res, index) => (
                  <MenuItem key={index} value={`${res.name}`}>
                    {res.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextareaAutosize
              name="allergy"
              aria-label="alergias"
              placeholder="alergias"
              value={allergy}
              onChange={handleChange}
              className={classes.textArea}
              rowsMin={3.5}
              rowsMax={3.5}
            />
            <TextareaAutosize
              name="medicament"
              aria-label="medicamentos"
              placeholder="medicamentos"
              value={medicament}
              onChange={handleChange}
              className={classes.textArea}
              rowsMin={2.5}
              rowsMax={2.5}
            />
            <TextareaAutosize
              name="diagnostics"
              aria-label="Diagnosticos"
              placeholder="Diagnosticos"
              value={diagnostics}
              onChange={handleChange}
              className={classes.textArea}
              rowsMin={3.2}
              rowsMax={3.2}
            />

            <FormControlLabel
              className={classes.label}
              control={
                <Checkbox
                  name="shareData"
                  value={shareData}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Aceito Compartilhar meus dados com centros médicos."
            />
            <Button
              disabled={!isValid}
              onClick={() => navigation.push("/home")}
              className={classes.Button}
              variant="contained"
              color="primary"
            >
              Salvar
            </Button>
          </S.Form>
        </S.Content>
      </S.RegisterContainer>
    </>
  );
};

export default Register;
