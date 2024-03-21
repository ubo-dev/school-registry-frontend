import LectureList from "./lectures/views/LectureList";
import StudentList from "./students/views/StudentList";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Report from "../Report/Report";

function Home() {
  return (
    <Tabs
      size="md"
      variant="soft-rounded"
      colorScheme="blue"
      isLazy
      className="tabs"
    >
      <TabList>
        <Tab>Students</Tab>
        <Tab>Lectures</Tab>
        <Tab>Reports</Tab>
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
        {/* initially not mounted */}
        <TabPanel>
          <Report />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Home;
