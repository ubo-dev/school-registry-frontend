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
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function UpdateLectureModal(lecture) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [lectureCode, setLectureCode] = useState("");
  const [lectureName, setLectureName] = useState("");

  async function handleUpdateLecture() {
    console.log(lecture);
    await axios
      .put(`http://localhost:8080/api/lectures/updateLecture/${lecture.lecture.lectureId}`, {
        lectureCode: lectureCode,
        lectureName: lectureName,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          onClose();
          setLectureCode("");
          setLectureName("");
        }
      });
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme="green">
        Edit Lecture
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new lecture</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Lecture code</FormLabel>
              <Input
                defaultValue={lecture.lectureCode}
                onChange={(e) => setLectureCode(e.target.value)}
                placeholder="Lecture code"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Lecture name</FormLabel>
              <Input
                placeholder="Lecture name"
                onChange={(e) => setLectureName(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdateLecture}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default UpdateLectureModal;
