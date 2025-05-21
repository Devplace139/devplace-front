/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
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
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { IClinic } from "../../interfaces/IClinic";
import { MAddClinic } from "../../components/Modal/MAddClinic";
import { MEditClinic } from "../../components/Modal/MEditClinic";

export function Clinics() {
  const [clinics, setClinics] = useState<IClinic[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredClinics, setFilteredClinics] = useState(clinics);
  const [editClinic, setEditClinic] = useState<IClinic | null>(null);

  const [openAddClinic, setOpenAddClinic] = useState(false);
  const [openEditClinic, setOpenEditClinic] = useState(false);

  useEffect(() => {
    loadClinics();
  }, []);

  async function loadClinics() {
    const response = await axios.get("http://localhost:3000/api/v1/clinics");
    setClinics(response.data);
    setFilteredClinics(response.data);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const filtered = clinics.filter((clinic) =>
      clinic.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredClinics(e.target.value !== "" ? filtered : clinics);
  };

  async function deleteClinic(id: string) {
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
      .delete(`http://localhost:3000/api/v1/clinics/${id}`)
      .then(() => {
        loadClinics();
      })
      .catch((error) => {
        console.log("Erro ao excluir clínica: " + error);
      });
  }

  const handleOpenAddClinic = () => {
    setOpenAddClinic(!openAddClinic);
  };

  const handleCloseAddClinic = () => {
    setOpenAddClinic(!openAddClinic);
  };

  const handleOpenEditClinic = (clinic: IClinic) => {
    setEditClinic(clinic);
    setOpenEditClinic(!openAddClinic);
  };

  const handleCloseEditClinic = () => {
    setEditClinic(null);
    setOpenEditClinic(!openEditClinic);
  };

  return (
    <>
      <Container>
        <Content>
          <STitlePage>Unidades Básicas de Saúde</STitlePage>
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

            <BtnAdd onClick={() => handleOpenAddClinic()}>Nova UBS</BtnAdd>
          </WSearch>
        </Content>
        <TableContainer>
          <table>
            <thead>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Telefone</th>
              <th></th>
            </thead>
            <tbody>
              {filteredClinics
                .sort((a, b) => {
                  return a.name
                    .toLocaleLowerCase()
                    .localeCompare(b.name.toLocaleLowerCase());
                })
                .map((c: IClinic) => {
                  return (
                    <tr key={c.id}>
                      <td>{c.name}</td>
                      <td>{c.address}</td>
                      <td>{c.phone}</td>
                      <SAction>
                        <button onClick={() => handleOpenEditClinic(c)}>
                          <FiEdit size={20} color="blue" />
                        </button>
                        <button onClick={() => deleteClinic(c.id)}>
                          <FiTrash2 size={20} color="red" />
                        </button>
                      </SAction>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </TableContainer>

        {/* Modal Add Clinic */}
        {openAddClinic && (
          <MAddClinic
            isOn={openAddClinic}
            onClickClose={() => handleCloseAddClinic()}
            onClickLoadClinic={() => loadClinics()}
          />
        )}

        {/* Modal Edit Clinic */}
        {openEditClinic && (
          <MEditClinic
            isOn={openEditClinic}
            onClickClose={() => handleCloseEditClinic()}
            onClickLoadClinic={() => loadClinics()}
            editClinic={editClinic}
          />
        )}
      </Container>
    </>
  );
}
