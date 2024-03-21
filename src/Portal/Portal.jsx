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
          <StudentList />
        </TabPanel>
        {/* initially not mounted */}
        <TabPanel>
          <LectureList />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Portal;
