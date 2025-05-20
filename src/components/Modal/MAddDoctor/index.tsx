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
  onClickLoadDoctor: () => void;
}

export function MAddDoctor(props: IActived) {
  const [doctor, setDoctor] = useState({
    name: "",
    crm: "",
    phone: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function submitForm(event: { preventDefault: () => void }) {
    event.preventDefault();

    console.log(doctor);

    axios
      .post("http://localhost:3333/api/v1/doctors/", doctor)
      .then(() => {
        emptyFields();
        props.onClickClose();
        props.onClickLoadDoctor();
      })
      .catch(() => setErrorMessage("Falha ao cadastrar médico"));
  }

  const handleCloseModal = () => {
    emptyFields();
    props.onClickClose();
  };

  const emptyFields = () => {
    setDoctor({ name: "", crm: "", phone: "", email: "" });
  };

  return (
    <Container isOn={props.isOn}>
      <Content>
        <ContentHeader>
          <Title>CADASTRAR MÉDICO</Title>
          <Close>
            <IoIosClose size={25} onClick={() => handleCloseModal()} />
          </Close>
        </ContentHeader>
        <ContentForm>
          <SInput
            type="text"
            value={doctor.name}
            onChange={(e) => setDoctor({ ...doctor, name: e.target.value })}
            placeholder="Nome"
          />
          <SInput
            type="text"
            value={doctor.crm}
            onChange={(e) => setDoctor({ ...doctor, crm: e.target.value })}
            placeholder="CRM"
          />

          <SInput
            type="email"
            value={doctor.email}
            onChange={(e) => setDoctor({ ...doctor, email: e.target.value })}
            placeholder="Email"
          />

          <SInput
            type="text"
            value={doctor.phone}
            onChange={(e) => setDoctor({ ...doctor, phone: e.target.value })}
            placeholder="Telefone"
          />

          <SInput type="text" placeholder="Especialidade" />

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
