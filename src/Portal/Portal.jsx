import CreateLectureModal from "../components/CreateLectureModal";
import CreateStudentModal from "../components/CreateStudentModal";
import LectureList from "./lectures/views/LectureList";
import StudentList from "./students/views/StudentList";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

function Portal() {
  return (
    <Tabs
      size="md"
      variant="soft-rounded"
      colorScheme="green"
      isLazy
      className="tabs"
    >
      <TabList>
        <Tab>Students</Tab>
        <Tab>Lectures</Tab>
      </TabList>
      <TabPanels>
        {/* initially mounted */}
        <TabPanel>
          <CreateStudentModal className="modal"></CreateStudentModal>
          <StudentList />
        </TabPanel>
        {/* initially not mounted */}
        <TabPanel>
          <CreateLectureModal className="modal"></CreateLectureModal>
          <LectureList />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Portal;
