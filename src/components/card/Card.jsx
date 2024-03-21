/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import StudentModal from "../../Report/student/StudentModal";
import LectureModal from "../../Report/lecture/LectureModal";
import LectureWithNoStudentModal from "../../Report/lecture/LectureWithNoStudentModal";
import StudentWithNoLectureModal from "../../Report/student/StudentWithNoLectureModal";

function CardComponent(props) {
  const [isStudentModalOpen, setStudentModalOpen] = useState(false);
  const [isLectureModalOpen, setLectureModalOpen] = useState(false);
  const [isLectureWithNoStudentModalOpen, setLectureWithNoStudentModalOpen] = useState(false);
  const [isStudentWithNoLectureModalOpen, setStudentWithNoLectureModalOpen] = useState(false);

  useEffect(() => {
    if (props.props.id === "1") {
      setStudentModalOpen(true);
    }
    if (props.props.id === "2") {
        setLectureModalOpen(true);
    }
    if (props.props.id === "3") {
        setLectureWithNoStudentModalOpen(true);
    }
    if (props.props.id === "4") {
        setStudentWithNoLectureModalOpen(true);
    }
  }), [props.props.id];
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://tr.newworldai.com/wp-content/uploads/2019/08/report.png"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{props.props.header}</Heading>

            <Text py="2">{props.props.description}</Text>
          </CardBody>

          <CardFooter>
            { isStudentModalOpen ? <StudentModal></StudentModal> : <></>}
            { isLectureModalOpen ? <LectureModal></LectureModal> : <></>}
            { isLectureWithNoStudentModalOpen ? <LectureWithNoStudentModal></LectureWithNoStudentModal> : <></>}
            { isStudentWithNoLectureModalOpen ? <StudentWithNoLectureModal></StudentWithNoLectureModal> : <></>}
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}

export default CardComponent;
