"use client";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FormControlLabel, Switch, TableCell, TextField } from "@mui/material";;
import TableItem from "./TableItem";

interface IProps {
  verbs: IIrregularVerbs[];
}
interface GroupedObject {
  [key: string]: any[];
}

const IrregularTable = ({ verbs }: IProps) => {
  const [search, setSearch] = useState<string>("");
  const [isTranscription, setIsTranscription] = useState<boolean>(false);
  const [isGroups, setIsisGroups] = useState<boolean>(false);

  const rows = verbs.filter((el) => el.infinitive.word.includes(search));

  const filteredRows = verbs.filter((el) => el.infinitive.word.includes(search));
  const workRows: IIrregularVerbs[][] = isGroups
    ? Object.values(
        filteredRows.reduce((acc: GroupedObject, obj) => {
          const groupKey = obj.group;
          if (!acc[groupKey]) {
            acc[groupKey] = [];
          }
          acc[groupKey].push(obj);
          return acc;
        }, {})
      )
    : [filteredRows];

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ padding: 0 }}>
                <TextField
                  placeholder="search"
                  variant="outlined"
                  size="small"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </TableCell>
              <TableCell sx={{ padding: 0 }}>
                <FormControlLabel
                  label="transcription: "
                  control={
                    <Switch
                      value={isTranscription}
                      onChange={() => setIsTranscription((value) => !value)}
                    />
                  }
                  labelPlacement="start"
                />
              </TableCell>
              <TableCell sx={{ padding: 0 }}>
                <FormControlLabel
                  label="group: "
                  control={
                    <Switch
                      value={isGroups}
                      onChange={() => setIsisGroups((value) => !value)}
                    />
                  }
                  labelPlacement="start"
                />
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>

        {workRows.map((rows, i) => (
        <TableItem
          key={i}
          title={isGroups ? rows[0].group : undefined}
          data={rows}
          isTranscription={isTranscription}
        />
      ))}
        {/* </Table> */}
      </TableContainer>
    </>
  );
};

export default IrregularTable;
