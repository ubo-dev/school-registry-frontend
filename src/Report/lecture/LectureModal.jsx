import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import LectureListModal from "./LectureListModal";

function LectureModal() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lectures, setLectures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [students, setStudents] = useState([]);
  const [isListModalOpen, setIsListModalOpen] = useState(false);

  async function handleSelectStudent() {
    console.log(selectedStudent);
    await axios
      .get(
        `http://localhost:8080/api/reports/getLecturesByStudent/${selectedStudent}`
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
            setLectures(response.data);
          onClose();
          handleListModal();
        }
      });
  }

  function handleListModal() {
    setIsListModalOpen(true);
    setIsActive(true);
  }


  useEffect(() => {
    axios.get("http://localhost:8080/api/students/getAll").then((response) => {
      setStudents(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        View Report
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Student to List Lectures</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Student Name</FormLabel>
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
            <Button colorScheme="blue" mr={3} onClick={handleSelectStudent}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {isListModalOpen ? <LectureListModal onClick={isActive} lectures={lectures} isListModalOpen={isListModalOpen} /> : <></>}
    </>
  );
}

export default LectureModal;
