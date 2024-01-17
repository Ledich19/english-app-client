"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { irregularVerbs } from "@/app/data/irregularVerbs";
import IrregularTable from "@/components/IrregularVerbs/IrregularTable";
import TabPanel from "@/components/TabPanel";
import { useRouter } from "next/navigation";

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const tableTypes = ["high", "average", "rare"];

const IrregularVerbs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  const rows1 = irregularVerbs.elements.filter(
    (el) => el.frequencyOfUse === "high"
  );
  const rows2 = irregularVerbs.elements.filter(
    (el) => el.frequencyOfUse === "average"
  );
  const rows3 = irregularVerbs.elements.filter(
    (el) => el.frequencyOfUse === "rare"
  );

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="high uses" {...a11yProps(0)} />
          <Tab label="average uses" {...a11yProps(1)} />
          <Tab label="rare uses" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <IrregularTable verbs={rows1} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IrregularTable verbs={rows2} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <IrregularTable verbs={rows3} />
      </TabPanel>
    </>
  );
};

export default IrregularVerbs;
