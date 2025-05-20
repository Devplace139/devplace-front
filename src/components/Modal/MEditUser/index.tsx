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
import IUsers from "../../../interfaces/IUsers";

interface IActived {
  isOn: boolean;
  editUser: IUsers | null;
  onClickClose: () => void;
  onClickLoadUser: () => void;
}

export function MEditUSer(props: IActived) {
  const [edit, setEdit] = useState<any>({
    name: props.editUser?.name,
    email: props.editUser?.email,
  });
  const [errorMessage, setErrorMessage] = useState("");

  function submitForm(event: { preventDefault: () => void }) {
    event.preventDefault();

    axios
      .put(`http://localhost:3333/api/v1/users/${props.editUser?.id}`, edit)
      .then((response) => {
        if (response.status === 200) {
          props.onClickClose();
          props.onClickLoadUser();
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
          <Title>ATUALIZAR DADOS DO USUÁRIO</Title>
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
            type="email"
            value={edit.email}
            onChange={(e) => setEdit({ ...edit, email: e.target.value })}
            placeholder="Email"
          />

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
