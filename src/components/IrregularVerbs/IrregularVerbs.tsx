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

const IrregularVerbs = () => {
  const tableTypes = ["all", "high", "average", "rare"];
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const rows = irregularVerbs.elements.filter(
    (el) =>
      el.frequencyOfUse === tableTypes[value] || tableTypes[value] === "all"
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
          <Tab label="all" {...a11yProps(0)} />
          <Tab label="high uses" {...a11yProps(1)} />
          <Tab label="average uses" {...a11yProps(2)} />
          <Tab label="rare uses" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <IrregularTable verbs={rows} />
    </>
  );
};

export default IrregularVerbs;
