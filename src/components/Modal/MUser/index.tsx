/* eslint-disable prettier/prettier */
import { IoIosClose } from "react-icons/io";
import {
  BtnSave,
  Close,
  Container,
  Content,
  ContentForm,
  ContentHeader,
  SInput,
  Title,
} from "./style";

interface IActived {
  isOn: boolean;
  onClick: () => void;
}

export function MUSer(props: IActived) {
  return (
    <Container isOn={props.isOn}>
      <Content>
        <ContentHeader>
          <Title>Adicionar usuário</Title>
          <Close>
            <IoIosClose size={25} onClick={() => props.onClick()} />
          </Close>
        </ContentHeader>
        <ContentForm>
          <SInput
            type="text"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
          <SInput
            type="email"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder="Email"
          />
          <SInput
            type="password"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder="Senha"
          />
          {/* onClick={submitForm} */}
          <BtnSave type="submit">CADASTRAR</BtnSave>
        </ContentForm>
      </Content>
    </Container>
  );
}
