import { Tr, Td, Button } from "@chakra-ui/react";
import axios from "axios";

function Student(student) {

  function handleDelete() {
    axios
      .delete("http://localhost:8080/api/students/deleteStudent/" + student.student.studentId)
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <Tr>
      <Td>{student.student.studentId}</Td>
      <Td>{student.student.firstName}</Td>
      <Td>{student.student.lastName}</Td>
      <Td>
        <Button colorScheme="teal">Edit</Button>
        <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
      </Td>
    </Tr>
  );
}

export default Student;