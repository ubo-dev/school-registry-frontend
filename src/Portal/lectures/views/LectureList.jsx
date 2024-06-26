import {
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Lecture from "./Lecture";
import CreateLectureModal from "../../../components/lecture/CreateLectureModal";

function LectureList() {
  const [loading, setLoading] = useState(true);
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6060/api/lectures/getAll").then((response) => {
      setLectures(response.data);
      setLoading(false);
    });
  }, []);


    
  return (
    <TableContainer className="list">
      <CreateLectureModal className="modal"></CreateLectureModal>
      <Table size="m">
        <Thead>
          <Tr>
            <Th>Lecture ID</Th>
            <Th>Lecture Code</Th>
            <Th>Lecture Name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {loading ? (
            <Tr>
              <Td>Loading...</Td>
            </Tr>
          ) : lectures.length === 0 ? (
            <Tr>
              <Td>No lectures found</Td>
            </Tr>
          ) : (
            lectures.map((lecture) => (
              <Lecture key={lecture.lectureId} lecture={lecture} />
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default LectureList;
