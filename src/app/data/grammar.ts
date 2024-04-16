export const grammar = [
  {
    title: "present perfect simple",
    body: [
      {
        type: "schema",
        title: "схема построения",
        schema: [
          "I/You/We/They + have + V3",
          "He/She/It + has + V3",
          "Have/Has + подлежащее + V3 + ?",
        ],
      },
      {
        type: "table",
        title: "Present perfect simple",
        columnNames: ["", "", "", ""],
        rows: [
          ["+", "I, you, we, they, she, he, it", "have, has", "worked"],
          ["+", "I, you, we, they, she, he, it", "’ve, ’s", "worked"],
          ["-", "I, you, we, they, she, he, it", "have not, has not", "worked"],
          ["-", "I, you, we, they, she, he, it", "haven’t, hasn’t", "worked"],
          ["?+", "have, has", "I, you, we, they, she, he, it", "worked"],
          [
            "?-",
            "have, has",
            ["I, you, we, they, she, he, it", "+not"],
            "worked",
          ],
          ["?-", "Haven’t, Hasn’t", "I, you, we, they, she, he, it", "worked"],
        ],
      },
      {
        type: "example",
        title: "",
        description:
          "Для описания действий, которые произошли в прошлом и имеют отношение к настоящему",
        examples: [
          "I have lived in Moscow for five years.",
          "She has known him since childhood.",
          "We have studied English for two years.",
        ],
      },
      {
        type: "example",
        title: "",
        description: "Для описания опыта в жизни:",
        examples: [
          "She has never traveled by plane.",
          "I have always loved reading.",
          "He has played the guitar since he was a teenager.",
        ],
      },
      {
        type: "example",
        title: "",
        description: "Для описания действий, которые только что завершились:",
        examples: [
          "They have just finished their homework.",
          "He has just left the house.",
          "She has just called me.",
        ],
      },
      {
        type: "example",
        title: "",
        description:
          "Для описания действий, которые произошли несколько раз в прошлом:",
        examples: [
          "I have visited Paris three times.",
          "She has seen that movie twice.",
          "We have eaten at that restaurant many times.",
        ],
      },
      {
        type: "example",
        title: "",
        description:
          "Для описания действий, которые начались в прошлом и продолжаются в настоящем:",
        examples: [
          "He has worked at the company since 2010.",
          "She has lived in New York for five years.",
          "They have been married for ten years.",
        ],
      },
      {
        type: "example",
        title: "",
        description: "Вопросительные формы",
        examples: [
          "Have you finished your work?",
          "Has she seen that movie?",
          "Have they visited London?",
          "Have we met before?",
          "Has he ever been to Japan?",
        ],
      },

      {
        type: "example",
        title: "",
        description: "Отрицательные формы",
        examples: [
          "I have not lived in Moscow for five years.",
          "She has not traveled by plane.",
          "They have not finished their homework yet.",
          "We have not visited Paris recently.",
          "He has not worked at the company since 2010.",
        ],
      },
      {
        type: "table",
        title: "Слова маркеры",
        columnNames: ["слово", "перевод", "описание"],
        rows: [
          [
            "Ever",
            "когда-либо",

            " (используется в вопросительных и отрицательных предложениях для уточнения опыта или действий в жизни)",
            ,
          ],
          [
            "Never",
            "никогда",

            " (используется в отрицательных предложениях для утверждения отсутствия опыта или действий в жизни)",
            ,
          ],
          [
            "Just",
            "только что",

            " (используется для описания действий, которые произошли недавно)",
            ,
          ],
          [
            "Already",
            "уже",
            " (используется для утверждения о завершении действия)",
          ],
          [
            "Since",
            "с",

            " (указывает на начало периода, который продолжается до настоящего момента)",
            ,
          ],
          ["For", "в течение", " (указывает на продолжительность времени)"],
          [
            "Recently",
            "недавно",
            " (указывает на короткий период времени в прошлом, который влияет на настоящее)",
            ,
          ],
          [
            "Yet",
            "уже",
            " (используется в вопросительных и отрицательных предложениях для выражения неоконченности действия)",
            ,
          ],
          [
            "Still",
            "все еще",
            " (используется для подчеркивания продолжения действия до настоящего момента)",
            ,
          ],
        ],
      },
      {
        type: "example",
        title: "",
        description: "Ever (когда-либо)",
        examples: ["Have you ever been to Russia?"],
      },
      {
        type: "example",
        title: "",
        description: "Never (никогда)",
        examples: ["I have never eaten sushi."],
      },
      {
        type: "example",
        title: "",
        description: "Just (только что)",
        examples: ["She has just left the house."],
      },
      {
        type: "example",
        title: "",
        description: "Already (уже)",
        examples: ["He has already finished his homework."],
      },
      {
        type: "example",
        title: "",
        description: "Since (с)",
        examples: ["She has been studying English since 2010."],
      },
      {
        type: "example",
        title: "",
        description: "For (в течение)",
        examples: ["They have been married for 10 years."],
      },
      {
        type: "example",
        title: "",
        description: "Recently (недавно)",
        examples: ["I have recently watched that movie."],
      },
      {
        type: "example",
        title: "",
        description: "Yet (уже)",
        examples: ["Have you finished your work yet?"],
      },
      {
        type: "example",
        title: "",
        description: "Still (все еще)",
        examples: ["She is still waiting for the bus."],
      },
    ],
  },
];
