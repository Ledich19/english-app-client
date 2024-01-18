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
    console.log(jsonData.length);
    console.log(jsonData[0]);
    /////////////////////////////
    const letterCounts = {};

    jsonData.forEach((el) => {
      const firstLetter = el.infinitive.word[0].toLowerCase();
      letterCounts[firstLetter] = (letterCounts[firstLetter] || 0) + 1;
    });

    // Выводим результат в консоль
    console.log("Количество слов по начальным буквам:");
    for (const letter in letterCounts) {
      console.log(`${letter}: ${letterCounts[letter]}`);
    }

    ////////////////////
    // 5 группа (все три формы неизменны)
    // 1 группа (1 и 3 формы идентичные)
    // 2 группа (2 и 3 формы совпадают)
    // 3 группа (суплетивные формы *образованные от разных корней)
    // 4 группа (изменение гласных -i,-а,-u во всех 3 формах)

    // а)подгруппа (1 форма = 3 + (e)n)
    // 6 группа (2 форма образуется как правильные глаголы, 3 – как неправильные)
    function checkFirstTwoLetters(word1, word2, word3) {
      if (word1 === "do") {
        return false;
      }
      return (
        word1.slice(0, 1) === word2.slice(0, 1) &&
        word2.slice(0, 1) === word3.slice(0, 1)
      );
    }
    function checkVowelChanges(word1, word2, word3) {
      const vowels = ["i", "a", "u"];
      for (let i = 0; i < word1.length; i++) {
        const index1 = word1[i] === vowels[0];
        const index2 = word2[i] === vowels[1];
        const index3 = word3[i] === vowels[2];
        if (index1 && index2 && index3) {
          return true;
        }
      }
      return false;
    }

    const newData = jsonData.map((el) => {
      const w1 = el.infinitive.word;
      const w2Options = el.pastSimple.word
        .split("/")
        .map((option) => option.trim());
      const w3Options = el.pastParticiple.word
        .split("/")
        .map((option) => option.trim());

        
        const w2 =
        w2Options.find((option) => !option.endsWith("ed")) || w2Options[0];
        const w3 =
        w3Options.find((option) => !option.endsWith("ed")) || w3Options[0];
        
        
      let group = "different";

      if (w1 === w2 && w1 === w3) {
        group = "v1 = v2 = v3";
      } 
      else if (
        w2 === w1 + "ed" ||
        w2 === w1 + "d" && w2[w2.length - 1] === "e"
      ) {
        group =
          "(2 форма образуется как правильные глаголы, 3 – как неправильные)";
      }
      else if (!checkFirstTwoLetters(w1, w2, w3)) {
        group = "(суплетивные формы *образованные от разных корней)";
      }else if (w1 === w3) {
        group = "v1 = v3";
      } else if (w2 === w3) {
        group = "v2 = v3";
      }  else if (w3.endsWith("own") || w3.endsWith("awn")) {
        group = "(в основе 2 формы ew, 3 – own, awn)";
      } 
      
      else if (checkVowelChanges(w1, w2, w3)) {
        group = "(изменение гласных -i,-а,-u во всех 3 формах)";
      } else if (w3.endsWith("en") || w3.endsWith("n")) {
        group = "(1 форма = 3 + (e)n)";
      } else if (w2.endsWith("ought") || w2.endsWith("aught")) {
        group = "(2 и 3 формы обретают окончания -ought, -aught)";
      } 

      return {
        group: group,

        infinitive: el.infinitive,
        pastSimple: el.pastSimple,
        pastParticiple: el.pastParticiple,

        translations: el.translations,
        image: el.image,
        frequencyOfUse: el.frequencyOfUse,
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
