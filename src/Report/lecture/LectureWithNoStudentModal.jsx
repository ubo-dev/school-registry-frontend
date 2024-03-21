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

function LectureWithNoStudentModal() {
  const [lectures, setLectures] = useState([]);

  const handleFetch = () => {
    axios
      .get("http://localhost:8080/api/reports/getLecturesWithNoStudents")
      .then((response) => {
        console.log(response.data);
        setLectures(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
      handleFetch();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>List lectures</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Student to List Lecture</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Lectures:</FormLabel>
              {lectures.length === 0
                ? "There is no lecture that has no student"
                : lectures.map((lecture) => (
                    <li key={lecture.lectureId}>{lecture.lectureName}</li>
                  ))}
            </FormControl>
          </ModalBody>
          <Button onClick={onClose}>Cancel</Button>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LectureWithNoStudentModal;
