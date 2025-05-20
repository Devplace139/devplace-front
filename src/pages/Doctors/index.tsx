/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
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
import { IDoctors } from "../../interfaces/IDoctors";
import { MAddDoctor } from "../../components/Modal/MAddDoctor";

export function Doctors() {
  const [doctors, setDoctors] = useState<IDoctors[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const [openAddDoctor, setOpenAddDoctor] = useState(false);

  useEffect(() => {
    loadDoctors();
  }, []);

  async function loadDoctors() {
    const response = await axios.get("http://localhost:3333/api/v1/doctors");
    setDoctors(response.data);
    setFilteredDoctors(response.data);
    console.log(response.data);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredDoctors(e.target.value !== "" ? filtered : doctors);
  };

  async function deleteDoctor(id: string) {
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
      .delete(`http://localhost:3333/api/v1/doctors/${id}`)
      .then(() => {
        setDoctors(doctors.filter((d) => id !== d.id));
      })
      .catch((error) => {
        console.log("Erro ao excluir usuário: " + error);
      });
  }

  const handleOpenAddDoctor = () => {
    setOpenAddDoctor(!openAddDoctor);
  };

  const handleCloseAddDoctor = () => {
    setOpenAddDoctor(!openAddDoctor);
  };

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

            <BtnAdd onClick={() => handleOpenAddDoctor()}>Novo médico</BtnAdd>
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
              {filteredDoctors
                .sort((a, b) => {
                  return a.name
                    .toLocaleLowerCase()
                    .localeCompare(b.name.toLocaleLowerCase());
                })
                .map((d: IDoctors) => {
                  return (
                    <tr key={d.id}>
                      <td>{d.name}</td>
                      <td>{d.crm}</td>
                      <td>{d.phone}</td>
                      <td>{d.email}</td>
                      <td></td>
                      <STdAction>
                        <Link to={`/edit-user/${d.id}`}>
                          <FiEdit size={20} color="blue" />
                        </Link>
                        <button onClick={() => deleteDoctor(d.id)}>
                          <FiTrash2 size={20} color="red" />
                        </button>
                      </STdAction>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </TableContainer>

        {openAddDoctor && (
          <MAddDoctor
            isOn={openAddDoctor}
            onClickClose={() => handleCloseAddDoctor()}
            onClickLoadDoctor={() => loadDoctors()}
          />
        )}
      </Container>
    </>
  );
}
