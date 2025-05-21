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
  onClickLoadClinic: () => void;
}

export function MAddClinic(props: IActived) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const clinic = {
    name,
    address,
    phone,
  };

  function submitForm(event: { preventDefault: () => void }) {
    event.preventDefault();

    axios
      .post("http://localhost:3000/api/v1/clinics/", clinic)
      .then(() => {
        emptyFields();
        props.onClickClose();
        props.onClickLoadClinic();
      })
      .catch(() => setErrorMessage("Falha ao cadastrar clínica"));
  }

  const handleCloseModal = () => {
    emptyFields();
    props.onClickClose();
  };

  const emptyFields = () => {
    setName("");
    setAddress("");
    setPhone("");
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
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Endereço"
          />

          <SInput
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefone"
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
