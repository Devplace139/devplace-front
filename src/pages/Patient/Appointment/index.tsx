/* eslint-disable prettier/prettier */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BtnBack,
  BtnConfirm,
  Container,
  Content,
  ContentBtns,
  CSubTitle,
  CTitle,
  Form,
  SInput,
  SSelect,
} from "./style";
import Select from "react-select";
import { disticts } from "../../../helper/Utils";

export function Appointment() {
  const [selectedOption, setSelectedOption] = useState<string | undefined>("");

  const navigate = useNavigate();

  const handleSelect = (value: string | undefined) => {
    setSelectedOption(value);
    console.log(selectedOption);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <Content>
        <CTitle>Preencha o Formulário de Agendamento</CTitle>
        <CSubTitle>
          Insira suas informações para concluir o agendamento
        </CSubTitle>

        <Form>
          <SInput type="text" placeholder="Nome Completo" />
          <SInput type="text" placeholder="Número do Cartão SUS" />
          <SInput type="text" placeholder="Telefone" />
          <SSelect>
            <Select
              options={disticts.sort((a, b) =>
                a.label
                  .toLocaleLowerCase()
                  .localeCompare(b.label.toLocaleLowerCase())
              )}
              onChange={(e) => handleSelect(e?.value)}
              isSearchable={false}
              placeholder="Selecione seu Bairro"
            />
          </SSelect>

          <ContentBtns>
            <BtnBack onClick={() => handleBack()}>Voltar</BtnBack>
            <BtnConfirm>Confirmar Agendamento</BtnConfirm>
          </ContentBtns>
        </Form>
      </Content>
    </Container>
  );
}
