import { Tr, Td, Button } from "@chakra-ui/react";

function Lecture(lecture) {
  return (
    <Tr>
      <Td>{lecture.lecture.lectureId}</Td>
      <Td>{lecture.lecture.lectureCode}</Td>
      <Td>{lecture.lecture.lectureName}</Td>
      <Td>
        <Button colorScheme="teal">Edit</Button>
        <Button colorScheme="red">Delete</Button>
      </Td>
    </Tr>
  );
}

export default Lecture;