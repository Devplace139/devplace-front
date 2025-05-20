/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { IDoctors } from "../../../interfaces/IDoctors";

interface IActived {
  isOn: boolean;
  editDoctor: IDoctors | null;
  onClickClose: () => void;
  onClickLoadDoctor: () => void;
}

export function MEditDoctor(props: IActived) {
  const [edit, setEdit] = useState<any>({
    name: props.editDoctor?.name,
    crm: props.editDoctor?.crm,
    phone: props.editDoctor?.phone,
    email: props.editDoctor?.email,
  });
  const [errorMessage, setErrorMessage] = useState("");

  function submitForm(event: { preventDefault: () => void }) {
    event.preventDefault();

    axios
      .put(`http://localhost:3333/api/v1/doctors/${props.editDoctor?.id}`, edit)
      .then((response) => {
        if (response.status === 200) {
          props.onClickClose();
          props.onClickLoadDoctor();
        } else {
          alert("Somthing went wrong!");
        }
      });
  }

  const handleCloseModal = () => {
    emptyFields();
    props.onClickClose();
  };

  const emptyFields = () => {
    setEdit({ ...edit, name: "", email: "" });
    setErrorMessage("");
  };

  return (
    <Container isOn={props.isOn}>
      <Content>
        <ContentHeader>
          <Title>ATUALIZAR DADOS DO MÉDICO</Title>
          <Close>
            <IoIosClose size={25} onClick={() => handleCloseModal()} />
          </Close>
        </ContentHeader>
        <ContentForm>
          <SInput
            type="text"
            value={edit.name}
            onChange={(e) => setEdit({ ...edit, name: e.target.value })}
            placeholder="Nome"
          />
          <SInput
            type="text"
            value={edit.crm}
            onChange={(e) => setEdit({ ...edit, crm: e.target.value })}
            placeholder="Email"
          />
          <SInput
            type="email"
            value={edit.email}
            onChange={(e) => setEdit({ ...edit, email: e.target.value })}
            placeholder="Email"
          />
          <SInput
            type="text"
            value={edit.phone}
            onChange={(e) => setEdit({ ...edit, phone: e.target.value })}
            placeholder="Email"
          />
          <SInput type="text" placeholder="Especialidade" />

          <ContentBtns>
            <BtnCancel onClick={() => props.onClickClose()}>Cancelar</BtnCancel>
            <BtnSave type="submit" onClick={submitForm}>
              ATUALIZAR
            </BtnSave>
          </ContentBtns>
        </ContentForm>
        <p>{errorMessage}</p>
      </Content>
    </Container>
  );
}
