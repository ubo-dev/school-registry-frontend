import { Tr, Td, Button } from "@chakra-ui/react";

function Student(student) {
  return (
    <Tr>
      <Td>{student.student.studentId}</Td>
      <Td>{student.student.firstName}</Td>
      <Td>{student.student.lastName}</Td>
      <Td>
        <Button colorScheme="teal">Edit</Button>
        <Button colorScheme="red">Delete</Button>
      </Td>
    </Tr>
  );
}

export default Student;