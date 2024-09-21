const fs = require("fs");
const encrypt = require("./functions/encrypt.js");
const decrypt = require("./functions/decrypt.js");

function main() {
  let text;
  let key = [
    ["А", "а", "Б", "б", "В", "в", "Г", "г"],
    ["Ґ", "ґ", "Д", "д", "Е", "е", "Є", "є"],
    ["Ж", "ж", "З", "з", "и", "І", "і", "Я"],
    ["Ї", "ї", "Й", "й", "К", "к", "Л", "л"],
    ["М", "м", "Н", "н", "О", "о", "П", "п"],
    ["Р", "р", "С", "с", "Т", "т", "У", "у"],
    ["Ф", "ф", "Х", "х", "Ц", "ц", "Ч", "ч"],
    ["Ш", "ш", "Щ", "щ", "ь", "Ю", "ю", "я"],
  ];
  let encryptedText;
  let decryptedText;

  // Ініціалізація з файлу
  try {
    text = fs.readFileSync("./text.txt", "utf8");
    console.log("text.txt:\n", text);
  } catch (error) {
    console.error(error);
  }

  // Шифрування
  try {
    fs.writeFileSync("./encryptedText.txt", encrypt(text, key));
  } catch (error) {
    console.error(error);
  }
  try {
    encryptedText = fs.readFileSync("./encryptedText.txt", "utf8");
    console.log("encryptedText.txt:\n", encryptedText);
  } catch (error) {
    console.error(error);
  }

  // Дешифрування
  try {
    fs.writeFileSync("./decryptedText.txt", decrypt(encryptedText, key));
  } catch (error) {
    console.error(error);
  }
  try {
    decryptedText = fs.readFileSync("./decryptedText.txt", "utf8");
    console.log("decryptedText.txt:\n", decryptedText);
  } catch (error) {
    console.error(error);
  }
}

main();
