/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable prettier/prettier */
import { IoIosClose } from "react-icons/io";
import {
  BtnCancel,
  BtnSave,
  Close,
  Container,
  Content,
  ContentBtns,
  ContentForm,
  ContentHeader,
  SInput,
  Title,
} from "./style";
import { useState } from "react";
import axios from "axios";

interface IActived {
  isOn: boolean;
  onClickClose: () => void;
  onClickLoadUser: () => void;
}

export function MAddUSer(props: IActived) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const user = {
    name,
    email,
    password,
  };

  function submitForm(event: { preventDefault: () => void }) {
    event.preventDefault();

    axios
      .post("http://localhost:3333/api/v1/users/", user)
      .then(() => {
        emptyFields();
        props.onClickClose();
        props.onClickLoadUser();
      })
      .catch(() => setErrorMessage("Falha ao cadastrar usuário"));
  }

  const handleCloseModal = () => {
    emptyFields();
    props.onClickClose();
  };

  const emptyFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setErrorMessage("");
  };

  return (
    <Container isOn={props.isOn}>
      <Content>
        <ContentHeader>
          <Title>CADASTRAR USUÁRIO</Title>
          <Close>
            <IoIosClose size={25} onClick={() => handleCloseModal()} />
          </Close>
        </ContentHeader>
        <ContentForm>
          <SInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
          <SInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <SInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />

          <ContentBtns>
            <BtnCancel onClick={() => props.onClickClose()}>Cancelar</BtnCancel>
            <BtnSave type="submit" onClick={submitForm}>
              CADASTRAR
            </BtnSave>
          </ContentBtns>
        </ContentForm>
        <p>{errorMessage}</p>
      </Content>
    </Container>
  );
}
