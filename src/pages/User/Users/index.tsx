/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import type IUsers from "../../../interfaces/IUsers";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {
  BtnAdd,
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
import { MUSer } from "../../../components/Modal/MUser";

function Home() {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const [openAddUser, setOpenAddUser] = useState(false);

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

  const handleCloseAddUser = () => {
    setOpenAddUser(!openAddUser);
  };

  const handleOpenAddUser = () => {
    setOpenAddUser(!openAddUser);
    console.log(openAddUser);
  };

  return (
    <>
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

            {/* <Link to={"/add-user"}>Novo usuário</Link> */}
            <BtnAdd onClick={() => handleOpenAddUser()}>Novo usuário</BtnAdd>
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
              {filteredUsers.map((u: IUsers) => {
                return (
                  <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
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
              })}
            </tbody>
          </table>
        </TableContainer>

        {/* Modal Add User */}
        <MUSer isOn={openAddUser} onClick={() => handleCloseAddUser()} />
      </Container>
    </>
  );
}

export default Home;
