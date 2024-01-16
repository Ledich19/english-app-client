import ExerciseInsertWords from "@/components/exerciseInsertWords/ExerciseInsertWords";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

const exercises = [
  {
    title: "Pronouns",
    description:
      "Write either reflexive or object pronoun instead of the brackets. You can just write it in a Google Document as a list of pronouns (like her, him, himself)",
    example:
      "She is so independent; she can do everything by [_herself_] (she).",
    variants: [
      {
        key: "I",
        values: ["I", "me", "mine", "my", "myself"],
      },
      {
        key: "you",
        values: ["you", "you", "yours", "your", "yourself"],
      },
      {
        key: "he",
        values: ["he", "him", "his", "his", "himself"],
      },
      {
        key: "she",
        values: ["she", "her", "hers", "her", "herself"],
      },
      {
        key: "it",
        values: ["it", "it", "its", "its", "itself"],
      },
      {
        key: "we",
        values: ["we", "us", "ours", "our", "ourselves"],
      },
      {
        key: "they",
        values: ["they", "them", "theirs", "their", "themselves"],
      },
    ],
    sentences: [
      {
        sentence:
          "We told them not to worry about [__] because we can do it.",
        tense: "we",
      },
      {
        sentence:
          "I tried to teach the dog to bark, but it just didn't understand [__].",
        tense: "I",
      },
      {
        sentence:
          "Did you remember to buy a gift for [__] on his birthday?",
        tense: "he",
      },
      {
        sentence: "He couldn't find [__] anywhere in the house.",
        tense: "it",
      },
      {
        sentence: "They wanted to surprise [__] with a special party.",
        tense: "we",
      },
      {
        sentence:
          "I saw her at the store, and I couldn't even say hello to [__] .",
        tense: "she",
      },
      {
        sentence:
          "The kids are learning to put on [__]  jackets by [__] .",
        tense: "they",
      },
      { sentence: "Could you please pass the salt to [__] ?", tense: "I" },
      {
        sentence:
          "I can't believe you ate all the cookies without sharing any with [__] .",
        tense: "we",
      },
      {
        sentence: "She decided to keep the secret to [__].",
        tense: "she",
      },
      {
        sentence: "He promised to take [__] to the movies this weekend.",
        tense: "you",
      },
      {
        sentence: "Let's make sure to invite [__]  to the party.",
        tense: "they",
      },
      {
        sentence: "The cat got angry at [__] when he tried to pet it.",
        tense: "he",
      },
      {
        sentence: "I can't believe I forgot to call [__] yesterday.",
        tense: "you",
      },
    ],
  },
  {
    title: "Have to/Must",
    description:
      'Write either "must" or "have to"/"had to"/"will have to" instead of the brackets. You can just write it in a Google Document as a list of verbs (like must, must, must, will have to, must, had to)',
    example:
      "She [_have to_] complete her homework before the deadline (present)",
    variants: ["must", "have to", "has to", "had to", "will have to"],
    sentences: [
      {
        sentence: "They [__] arrive at the airport on time for their flight.",
        tense: "present",
      },
      { sentence: "You [__] study for your exams!", tense: "present" },
      {
        sentence: "I [__] call my mom to wish her a happy birthday.",
        tense: "present",
      },
      {
        sentence: "We [__] visit the company meeting next week.",
        tense: "future",
      },
      {
        sentence: "He [__] return the library books by Friday.",
        tense: "future",
      },
      {
        sentence: "The kids [__] clean their rooms after playing.",
        tense: "present",
      },
      {
        sentence: "She [__] apologize for her rude behavior.",
        tense: "present",
      },
      {
        sentence: "I [__] finish the project yesterday, but I couldn't.",
        tense: "past",
      },
      {
        sentence: "They [__] wear helmets when riding their bikes.",
        tense: "present",
      },
      {
        sentence: "You [__] be careful when carrying glass.",
        tense: "present",
      },
      {
        sentence:
          "We [__] present our results at the conference in two months.",
        tense: "future",
      },
      {
        sentence: "He [__] complete the marathon last year, and he did.",
        tense: "past",
      },
      {
        sentence: "The team [__] work together to achieve their goals.",
        tense: "present",
      },
      { sentence: "I [__] pack my bags for the trip.", tense: "present" },
    ],
  },
  {
    title: "Mustn't/Don't have to",
    description: `Write either "mustn't" or "don't have to"/"doesn't have to"/"didn't have to" instead of the brackets. You can just write it in a Google Document as a list of verbs (like mustn't, mustn't, didn't have to)`,
    example: "She [_mustn't_] eat sugar, as she's diabetic.",
    variants: [
      "mustn't",
      "don't have to",
      "doesn't have to",
      "didn't have to",
      "won't have to",
    ],
    sentences: [
      { sentence: "They [__] arrive at the office on weekends." },
      { sentence: "You [__] forget to water the plants." },
      { sentence: "I [__] visit the meeting last Friday." },
      { sentence: "We [__] make so much noise in the library." },
      { sentence: "He [__] tell that secret information." },
      { sentence: "The kids [__] eat their vegetables." },
      { sentence: "She [__] take the dog for a walk this evening." },
      { sentence: "I [__] use my own computer for this task." },
      { sentence: "They [__] annoy their neighbors with loud music." },
      { sentence: "You [__] bring dessert to the lunch." },
      { sentence: "We [__] go to school on weekends." },
      { sentence: "He [__] worry about the test; it's already completed." },
      { sentence: "The team [__] work overtime yesterday." },
      { sentence: "I [__] leave the window open in the rain." },
    ],
  },
];

const Games = () => {
  return (
    <Box>
      <Card>
        <ExerciseInsertWords game={exercises[0]} />
        <ExerciseInsertWords game={exercises[1]} />
        <ExerciseInsertWords game={exercises[2]} />
      </Card>
    </Box>
  );
};
export default Games;
