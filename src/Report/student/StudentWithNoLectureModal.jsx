import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function StudentWithNoLectureModal() {
  const [students, setStudents] = useState([]);

  const handleFetch = () => {
    axios
      .get("http://localhost:6060/api/reports/getStudentsWithNoLectures")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
      handleFetch();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} >List Students</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Lecture to List Students</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Students:</FormLabel>
              {students.length === 0
                ? "There is no students that has no lecture"
                : students.map((student) => (
                    <li key={student.studentId}>
                      {student.firstName} {student.lastName}
                    </li>
                  ))}
            </FormControl>
          </ModalBody>
          <Button onClick={onClose}>Cancel</Button>
        </ModalContent>
      </Modal>
    </>
  );
}

export default StudentWithNoLectureModal;
