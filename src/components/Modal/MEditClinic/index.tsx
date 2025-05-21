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
import { IClinic } from "../../../interfaces/IClinic";

interface IActived {
  isOn: boolean;
  editClinic: IClinic | null;
  onClickClose: () => void;
  onClickLoadClinic: () => void;
}

export function MEditClinic(props: IActived) {
  const [edit, setEdit] = useState<any>({
    name: props.editClinic?.name,
    address: props.editClinic?.address,
    phone: props.editClinic?.phone,
  });
  const [errorMessage, setErrorMessage] = useState("");

  function submitForm(event: { preventDefault: () => void }) {
    event.preventDefault();

    axios
      .put(`http://localhost:3000/api/v1/clinics/${props.editClinic?.id}`, edit)
      .then((response) => {
        if (response.status === 200) {
          props.onClickClose();
          props.onClickLoadClinic();
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
    setEdit({ ...edit, name: "", address: "", phone: "" });
    setErrorMessage("");
  };

  return (
    <Container isOn={props.isOn}>
      <Content>
        <ContentHeader>
          <Title>ATUALIZAR DADOS DA UBS</Title>
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
            value={edit.address}
            onChange={(e) => setEdit({ ...edit, address: e.target.value })}
            placeholder="Email"
          />
          <SInput
            type="text"
            value={edit.phone}
            onChange={(e) => setEdit({ ...edit, phone: e.target.value })}
            placeholder="Telefone"
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
