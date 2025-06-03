/* eslint-disable prettier/prettier */
import {
  Container,
  HeaderAppointments,
  Status,
  STitlePage,
  TableContainer,
  WFilter,
  WListAppointments,
  WOrder,
} from "./style";

import { GoFilter } from "react-icons/go";
import { RiArrowUpDownLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import Header from "../../../components/Header/HDashboard";

const listAppointments = [
  {
    patient: "Maria Siqueira",
    date: "22/05/2025",
    doctor: "Dr. Paulo Silva",
    status: "confirmado",
  },
  {
    patient: "Carlos Pontes",
    date: "22/05/2025",
    doctor: "Dr. Paulo Silva",
    status: "confirmado",
  },
  {
    patient: "Pérola Silva",
    date: "22/05/2025",
    doctor: "Dr. Carminha Mendes",
    status: "confirmado",
  },
];

export function Appointments() {
  return (
    <>
      <Header />
      <Container>
        <STitlePage>Agendamentos</STitlePage>
        <HeaderAppointments>
          <WFilter>
            <GoFilter size={18} />
            Filtrar
          </WFilter>
          <WOrder>
            <RiArrowUpDownLine size={18} />
            Ordenar
          </WOrder>
        </HeaderAppointments>

        <WListAppointments>
          <TableContainer>
            <table>
              <thead>
                <th>PACIENTE</th>
                <th>DATA</th>
                <th>MÉDICO</th>
                <th>STATUS</th>
                <th></th>
              </thead>
              <tbody>
                {listAppointments.map((a, index) => (
                  <tr key={index}>
                    <td>{a.patient}</td>
                    <td>{a.date}</td>
                    <td>{a.doctor}</td>
                    <td>
                      <Status>
                        <FaCircle size={10} />
                        {a.status}
                      </Status>
                    </td>
                    <td>
                      <FiExternalLink color="black" size={17} />
                    </td>
                  </tr>
                ))}

                {listAppointments.map((a, index) => (
                  <tr key={index}>
                    <td>{a.patient}</td>
                    <td>{a.date}</td>
                    <td>{a.doctor}</td>
                    <td>
                      <Status>
                        <FaCircle size={10} />
                        {a.status}
                      </Status>
                    </td>
                    <td>
                      <FiExternalLink color="black" size={17} />
                    </td>
                  </tr>
                ))}
                {listAppointments.map((a, index) => (
                  <tr key={index}>
                    <td>{a.patient}</td>
                    <td>{a.date}</td>
                    <td>{a.doctor}</td>
                    <td>
                      <Status>
                        <FaCircle size={10} />
                        {a.status}
                      </Status>
                    </td>
                    <td>
                      <FiExternalLink color="black" size={17} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
        </WListAppointments>
      </Container>
    </>
  );
}
