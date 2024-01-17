import { StyledTableCell } from "./IrregularTable.styles";
import { Tooltip } from "@mui/material";

interface IProps {
  isTranscription: boolean;
  word: IFormVerb;
  translation: string;
  color: string;
}

const CustomTableCell = ({
  word,
  isTranscription,
  color,
  translation,
}: IProps) => {
  return (
    <StyledTableCell
      align="left"
      style={{
        width: "33.33%",
        backgroundColor: color,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Tooltip
          title={
            <span style={{ fontSize: "16px" }}>
              {translation}
              <br />
              {`[${word.transcription}]`}
            </span>
          }
        >
          <span style={{ fontSize: "18px" }}>{word.word}</span>
        </Tooltip>
        {isTranscription && `[${word.transcription}]`}
      </div>
    </StyledTableCell>
  );
};

export default CustomTableCell;
