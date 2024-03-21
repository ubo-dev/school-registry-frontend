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

function LectureListModal(lectures, isActive) {
    
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
        <Button isActive={isActive} onClick={onOpen}>List lectures</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Student to List Lecture</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Lectures:</FormLabel>
              {lectures.lectures.map((lecture) => (
                <li key={lecture.studentId}>
                  {lecture.lectureName}
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

export default LectureListModal;
