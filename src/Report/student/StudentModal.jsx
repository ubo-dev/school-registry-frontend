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
import StudentListModal from "./StudentListModal";

function StudentModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lectures, setLectures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState("");
  const [students, setStudents] = useState([]);
  const [isListModalOpen, setIsListModalOpen] = useState(false);

  async function handleSelectStudent() {
    console.log(selectedLecture);
    await axios
      .get(
        `http://localhost:8080/api/reports/getStudentsByLecture/${selectedLecture}`
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
            setStudents(response.data);
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
    axios.get("http://localhost:8080/api/lectures/getAll").then((response) => {
      setLectures(response.data);
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
          <ModalHeader>Select Lecture to List Students</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Lecture Name</FormLabel>
              <Select
                placeholder="Select option"
                onChange={(e) => setSelectedLecture(e.target.value)}
              >
                {!isLoading
                  ? lectures.map((lecture) => (
                      <option key={lecture.lectureId} value={lecture.lectureId}>
                        {lecture.lectureName}
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
      {isListModalOpen ? <StudentListModal onClick={isActive} students={students} isListModalOpen={isListModalOpen} /> : <></>}
    </>
  );
}

export default StudentModal;
