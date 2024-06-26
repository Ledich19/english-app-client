import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { grammar } from "../data/grammar";

const Grammar = () => {
  return (
    <Box>
      <Card>
        <Typography variant="h3"></Typography>
        <Link key={"irregular-verbs"} href={`grammar/${"irregular-verbs"}`}>
          <Typography>irregular verbs</Typography>
        </Link>

        {grammar.map((item) => {
          return (
            <Link key={""} href={`grammar/${item.title.replaceAll(" ","-")}`}>
              <Typography>{item.title}</Typography>
            </Link>
          );
        })}
      </Card>
    </Box>
  );
};
export default Grammar;
