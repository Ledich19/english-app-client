type Exercise = {
  title: string;
  description: string;
  example: string;
  variants: string[] | { key: string; values: string[] }[];
  sentences: {
    sentence: string;
    tense?: string;
  }[];
};

type ExerciseInsertWords = {
  id: number;
  values: string[];
}[];
