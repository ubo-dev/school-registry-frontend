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

function CreateStudentModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  async function handleCreateStudent() {
    await axios
      .post("http://localhost:8080/api/students/createStudent", {
        firstName: firstName,
        lastName: lastName,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          onClose();
          setFirstName("");
          setLastName("");
        }
      });
  }

  return (
    <>
      <Button onClick={onOpen}>Create Student</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new student</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreateStudent}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default CreateStudentModal;
