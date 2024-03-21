import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function LectureEnrollmentModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [students, setStudents] = useState([]);

  async function handleAssignStudent() {
    console.log("Student assigned to lecture");
  }

  useEffect(() => {
      axios
        .get("http://localhost:8080/api/students/getAll")
        .then((response) => {
          console.log(response);
          setStudents(response.data);
        });
  }, []);

  return (
    <>
      <Button onClick={onOpen} colorScheme="yellow">
        Enroll Student
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Assign New Student To Lecture</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Lecture code</FormLabel>
              <Select placeholder="Select option">
                {students.map((student) => (
                  <option key={student.studentId} value={student.studentId}>
                    {student.firstName} {student.lastName}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAssignStudent}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LectureEnrollmentModal;
