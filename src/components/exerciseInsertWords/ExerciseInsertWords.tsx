"use client";
import { useState, Fragment, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const Dropdown = ({
  options,
  onChange,
  sentenceIndex,
  gapIndex,
  answers,
}: {
  options: string[];
  onChange: (sentenceIndex: number, gapIndex: number, value: string) => void;
  sentenceIndex: number;
  gapIndex: number;
  answers: ExerciseInsertWords;
}) => {
  return (
    <select
      value={answers[sentenceIndex].values[gapIndex] || ""}
      onChange={(e) => onChange(sentenceIndex, gapIndex, e.target.value)}
    >
      <option value={""}></option>
      {options.map((option) => (
        <option key={`${option}${Math.random()}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

interface IProps {
  game: Exercise;
}

const ExerciseInsertWords = ({ game }: IProps) => {
  const [answers, setAnswers] = useState<ExerciseInsertWords>(
    Array(game.sentences.length)
      .fill("__")
      .map((e, i) => ({ id: i, values: [] }))
  );

  const handleDropdownChange = (
    sentenceIndex: number,
    gapIndex: number,
    value: string
  ) => {
    const updatedAnswers: ExerciseInsertWords = [...answers];
    updatedAnswers[sentenceIndex].values[gapIndex] = value;

    setAnswers(updatedAnswers);
  };

  return (
    <Box>
      <Container>
        <Typography variant="h4" align="center">
          {game.title}
        </Typography>
        <Typography mt={2}>{game.description}</Typography>
        <Typography mt={2}>{game.example}</Typography>

        <Stack mt={2}>
          {game.sentences.map((sentence, index) => (
            <Typography key={sentence.sentence}>
              {sentence.sentence.includes("[__]") ? (
                sentence.sentence.split("[__]").map((part, i) => (
                  <Fragment key={part}>
                    {part}
                    {i < sentence.sentence.split("[__]").length - 1 && (
                      <Dropdown
                        answers={answers}
                        onChange={handleDropdownChange}
                        sentenceIndex={index}
                        gapIndex={i}
                        options={
                          typeof game.variants[0] === "object" &&
                          "key" in game.variants[0]
                            ? (
                                game.variants as {
                                  key: string;
                                  values: string[];
                                }[]
                              ).find((el) => el.key === sentence.tense)
                                ?.values || []
                            : (game.variants as string[])
                        }
                      />
                    )}
                  </Fragment>
                ))
              ) : (
                <Fragment>{sentence.sentence}</Fragment>
              )}
            </Typography>
          ))}
        </Stack>

        <Typography mt={2}>
          {answers
            .map((answer) => (answer.values.length ? answer.values : "__"))
            .flat()
            .join(", ")}
        </Typography>
      </Container>
    </Box>
  );
};
export default ExerciseInsertWords;
