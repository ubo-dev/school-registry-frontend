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
  
  function EditStudentModal(student) {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  
    async function handleUpdateLecture() {
      console.log(student);
      await axios
        .put(`http://localhost:8080/api/students/updateStudent/${student.student.studentId}`, {
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
        <Button onClick={onOpen} colorScheme="green">
          Edit Student
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Student</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  defaultValue={student.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
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
  export default EditStudentModal;
  