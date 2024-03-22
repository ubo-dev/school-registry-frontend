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

function LectureEnrollmentModal(lecture) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState("");

  async function handleAssignStudent() {
    console.log(selectedStudent)
    await axios.put(
      `http://localhost:6060/api/lectures/assignStudent/${selectedStudent}/to/${lecture.lecture.lectureId}`).then((response) => {
        console.log(response);
        if (response.status === 200) {
          onClose();
        }
      });
  }

  useEffect(() => {
    axios.get("http://localhost:6060/api/students/getAll").then((response) => {
      setStudents(response.data);
      setIsLoading(false);
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
              <Select
                placeholder="Select option"
                onChange={(e) => setSelectedStudent(e.target.value)}
              >
                {!isLoading
                  ? students.map((student) => (
                      <option key={student.studentId} value={student.studentId}>
                        {student.firstName} {student.lastName}
                      </option>
                    ))
                  : "Loading..."}
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
