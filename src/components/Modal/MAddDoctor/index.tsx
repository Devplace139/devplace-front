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
  SSelect,
  Title,
} from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { ISpecialty } from "../../../interfaces/ISpecialty";

interface IActived {
  isOn: boolean;
  onClickClose: () => void;
  onClickLoadDoctor: () => void;
}

export function MAddDoctor(props: IActived) {
  const [specialtys, setSpecialtys] = useState<ISpecialty[]>([]);
  const [doctor, setDoctor] = useState({
    name: "",
    crm: "",
    phone: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    loadSpecialty();
  }, []);

  const loadSpecialty = async () => {
    const response = await axios.get("http://localhost:3333/api/v1/specialtys");
    setSpecialtys(response.data);
  };

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

          <SSelect>
            <option id="specialty" value={0}>
              Selecionar especialidade
            </option>

            {specialtys
              .sort((a, b) => {
                return a.name
                  .toLocaleLowerCase()
                  .localeCompare(b.name.toLocaleLowerCase());
              })
              .map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
          </SSelect>

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
