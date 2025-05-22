/* eslint-disable prettier/prettier */
import {
  Container,
  SName,
  SSpecialty,
  WDoctor,
  WTotalAppointments,
} from "./style";

interface IDoctorAppointment {
  doctor: string;
  specialty: string;
  totalAppointment: number;
}

export function DoctorAppointment(item: IDoctorAppointment) {
  return (
    <Container>
      <WDoctor>
        <SName>{item.doctor}</SName>
        <SSpecialty>{item.specialty}</SSpecialty>
      </WDoctor>
      <WTotalAppointments>{item.totalAppointment} agend.</WTotalAppointments>
    </Container>
  );
}
