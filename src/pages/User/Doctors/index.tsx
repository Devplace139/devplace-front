/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import type IUsers from "../../../interfaces/IUsers";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {
  Container,
  Content,
  SSearch,
  STdAction,
  STitlePage,
  TableContainer,
  WSearch,
} from "./styles";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";

export function Doctors() {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const response = await axios.get("http://localhost:3333/api/v1/users");
    setUsers(response.data);
    setFilteredUsers(response.data);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const filtered = users.filter((user) =>
      user.email.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUsers(e.target.value !== "" ? filtered : users);
  };

  async function deleteUser(id: string) {
    const confirmDelete = await Swal.fire({
      title: "Tem certeza?",
      text: "Esta ação não pode ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sim, Excluir",
      cancelButtonText: "Cancelar",
    });

    if (!confirmDelete.isConfirmed) return;

    await axios
      .delete(`http://localhost:3333/api/v1/users/${id}`)
      .then(() => {
        setUsers(users.filter((u) => id !== u.id));
      })
      .catch((error) => {
        console.log("Erro ao excluir usuário: " + error);
      });
  }

  return (
    <>
      <Container>
        <Content>
          <STitlePage>Médicos</STitlePage>
          <WSearch>
            <SSearch>
              <RiSearchLine size={22} color="#7d7d79" />
              <input
                type="text"
                placeholder="Buscar por nome"
                value={searchQuery}
                onChange={handleSearch}
              />
            </SSearch>

            <Link to={"/add-user"}>Novo médico</Link>
            {/* <Link to={'/search-users'}>Buscar usuários</Link> */}
          </WSearch>
        </Content>
        <TableContainer>
          <table>
            <thead>
              <th>Nome</th>
              <th>CRM</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Especialidade</th>
              <th></th>
            </thead>
            <tbody>
              {/* {filteredUsers.map((u: IUsers) => {
                return (
                  <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <STdAction>
                      <Link to={`/edit-user/${u.id}`}>
                        <FiEdit size={20} color="blue" />
                      </Link>
                      <button onClick={() => deleteUser(u.id)}>
                        <FiTrash2 size={20} color="red" />
                      </button>
                    </STdAction>
                  </tr>
                );
              })} */}
              <tr>
                <td>John Doe</td>
                <td>1234</td>
                <td>(99) 9 9999-9999</td>
                <td>john@doe.com</td>
                <td>Clínico Geral</td>
                <STdAction>
                  <Link to={""}>
                    <FiEdit size={20} color="blue" />
                  </Link>
                  <button onClick={() => deleteUser("u.id")}>
                    <FiTrash2 size={20} color="red" />
                  </button>
                </STdAction>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
}
