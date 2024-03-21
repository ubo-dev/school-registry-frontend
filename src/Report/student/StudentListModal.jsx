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

function StudentListModal(students, isActive) {
    
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
        <Button isActive={isActive} onClick={onOpen}>List Students</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Lecture to List Students</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Students:</FormLabel>
              {students.students.map((student) => (
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

export default StudentListModal;
