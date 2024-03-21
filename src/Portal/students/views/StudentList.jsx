import {
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import Student from "./Student";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function StudentList() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/students/getAll").then((response) => {
      setStudents(response.data);
      setLoading(false);
    });
  }, []);
  return (
    <TableContainer className="list">
      <Table size="m">
        <Thead>
          <Tr>
            <Th>Student ID</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {loading ? (
            <Tr>
              <Td>Loading...</Td>
            </Tr>
          ) : students.length === 0 ? (
            <Tr>
              <Td>No students found</Td>
            </Tr>
          ) : (
            students.map((student) => (
              <Student key={student.studentId} student={student} />
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default StudentList;
