const fs = require("fs");

// Имя входного и выходного файлов
const inputFileName = "input.json";
const outputFileName = "output.json";

// Считывание JSON файла
fs.readFile(inputFileName, "utf8", (err, data) => {
  if (err) {
    console.error("Ошибка при чтении файла:", err);
    return;
  }

  try {
    // Распарсивание JSON
    const jsonData = JSON.parse(data);

    /////////////////////////////
    const letterCounts = {};

    jsonData.elements.forEach((el) => {
      const firstLetter = el.infinitive[0][0].toLowerCase();
      letterCounts[firstLetter] = (letterCounts[firstLetter] || 0) + 1;
    });

    // Выводим результат в консоль
    console.log("Количество слов по начальным буквам:");
    for (const letter in letterCounts) {
      console.log(`${letter}: ${letterCounts[letter]}`);
    }

    ////////////////////

    const newData = jsonData.map((el) => {
      return {
        group:
          (el.infinitive[0] === el.pastSimple[0]) === el.pastParticiple[0]
            ? "v1 = v2 = v3"
            : el.infinitive[0] === el.pastSimple[0]
            ? "v1 = v2"
            : el.pastSimple[0] === el.pastParticiple[0]
            ? "v2 = v3"
            : "different",
        infinitive: { word: el.infinitive[0], transcription: el.infinitive[1] },
        pastSimple: { word: el.pastSimple[0], transcription: el.pastSimple[1] },
        pastParticiple: {
          word: el.pastParticiple[0],
          transcription: el.pastParticiple[1],
        },
        translations: el.translations,
        image: { url: "" },
        frequencyOfUse:
          el.frequency === "высокая" || el.frequency === "высоко"
            ? "high"
            : el.frequency === "средняя" || el.frequency === "средне"
            ? "average"
            : el.frequency === "низкая" || el.frequency === "низко"
            ? "rare"
            : el.frequency,
      };
    });

    // Преобразование обратно в JSON
    const modifiedJson = JSON.stringify(newData, null, 2);

    // Запись в новый файл
    fs.writeFile(outputFileName, modifiedJson, "utf8", (err) => {
      if (err) {
        console.error("Ошибка при записи файла:", err);
      } else {
        console.log("Файл успешно записан:", outputFileName);
      }
    });
  } catch (parseError) {
    console.error("Ошибка при парсинге JSON:", parseError);
  }
});
