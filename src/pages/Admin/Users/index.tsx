/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import type IUsers from "../../../interfaces/IUser";
import axios from "axios";
import Swal from "sweetalert2";
import {
  BtnAdd,
  Container,
  Content,
  SAction,
  SSearch,
  STitlePage,
  TableContainer,
  WSearch,
} from "./styles";
import { FiEdit, FiTrash2, FiUserPlus } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";

import { MAddUSer } from "../../../components/Modal/MAddUser";
import { MEditUSer } from "../../../components/Modal/MEditUser";
import Header from "../../../components/Header/HDashboard";

export function Users() {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [editUsers, setEditUsers] = useState<IUsers | null>(null);

  const [openAddUser, setOpenAddUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const response = await axios.get("http://localhost:3000/api/v1/users");
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
        loadUsers();
      })
      .catch((error) => {
        console.log("Erro ao excluir usuário: " + error);
      });
  }

  const handleOpenAddUser = () => {
    setOpenAddUser(!openAddUser);
  };

  const handleCloseAddUser = () => {
    setOpenAddUser(!openAddUser);
  };

  const handleOpenEditUser = (user: IUsers) => {
    setEditUsers(user);
    setOpenEditUser(!openAddUser);
  };

  const handleCloseEditUser = () => {
    setEditUsers(null);
    setOpenEditUser(!openEditUser);
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <STitlePage>Usuários</STitlePage>
          <WSearch>
            <SSearch>
              <RiSearchLine size={22} color="#7d7d79" />
              <input
                type="text"
                placeholder="Buscar por e-mail"
                value={searchQuery}
                onChange={handleSearch}
              />
            </SSearch>

            <BtnAdd onClick={() => handleOpenAddUser()}>
              <FiUserPlus size={20} />
              Adicionar
            </BtnAdd>
          </WSearch>
        </Content>
        <TableContainer>
          <table>
            <thead>
              <th>Nome</th>
              <th>Email</th>
              <th></th>
            </thead>
            <tbody>
              {filteredUsers
                .sort((a, b) => {
                  return a.name
                    .toLocaleLowerCase()
                    .localeCompare(b.name.toLocaleLowerCase());
                })
                .map((u: IUsers) => {
                  return (
                    <tr key={u.id}>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <SAction>
                        <button onClick={() => handleOpenEditUser(u)}>
                          <FiEdit size={20} color="blue" />
                        </button>
                        <button onClick={() => deleteUser(u.id)}>
                          <FiTrash2 size={20} color="red" />
                        </button>
                      </SAction>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </TableContainer>

        {/* Modal Add User */}
        {openAddUser && (
          <MAddUSer
            isOn={openAddUser}
            onClickClose={() => handleCloseAddUser()}
            onClickLoadUser={() => loadUsers()}
          />
        )}

        {/* Modal Edit User */}
        {openEditUser && (
          <MEditUSer
            isOn={openEditUser}
            onClickClose={() => handleCloseEditUser()}
            onClickLoadUser={() => loadUsers()}
            editUser={editUsers}
          />
        )}
      </Container>
    </>
  );
}
