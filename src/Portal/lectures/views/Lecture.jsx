import { Tr, Td, Button } from "@chakra-ui/react";
import axios from "axios";
import EditLectureModal from "../../../components/lecture/EditLectureModal";
import LectureEnrollmentModal from "../../../components/lecture/LectureEnrollmentModal";

function Lecture(lecture) {

  function handleDelete() {
    axios
      .delete("http://localhost:8080/api/lectures/deleteLecture/" + lecture.lecture.lectureId)
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <Tr>
      <Td>{lecture.lecture.lectureId}</Td>
      <Td>{lecture.lecture.lectureCode}</Td>
      <Td>{lecture.lecture.lectureName}</Td>
      <Td>
        <EditLectureModal lecture={lecture.lecture} />
        <LectureEnrollmentModal lecture={lecture.lecture} />
        <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
      </Td>
    </Tr>
  );
}

export default Lecture;