import { Tr, Td, Button } from "@chakra-ui/react";
import axios from "axios";
import EditStudentModal from "../../../components/student/EditStudentModal";

function Student(student, {setStudents} ) {

  function handleDelete() {
    axios
      .delete("http://localhost:6060/api/students/deleteStudent/" + student.student.studentId)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setStudents(prevStudents => prevStudents.filter(prevStudent => prevStudent.studentId !== student.student.studentId));
        }
      }).catch((error) => {
        console.log(error);
      });
  }
  return (
    <Tr>
      <Td>{student.student.studentId}</Td>
      <Td>{student.student.firstName}</Td>
      <Td>{student.student.lastName}</Td>
      <Td>
        <EditStudentModal student={student.student} setStudents={setStudents} />
        <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
      </Td>
    </Tr>
  );
}

export default Student;