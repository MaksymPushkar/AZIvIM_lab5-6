function decrypt(encryptedText, key) {
  let decryptedText = "";
  let firstSymbolIndex;
  let firstSymbolIndexFound = false;
  let secondSymbolIndex;
  let secondSymbolIndexFound = false;
  let keyRowLength = key[0].length;
  let keyColLength = key.length;

  for (let i = 0; i < encryptedText.length; i += 2) {
    firstSymbolIndexFound = false;
    secondSymbolIndexFound = false;

    for (let j = 0; j < keyColLength; j++) {
      for (let k = 0; k < keyRowLength; k++) {
        if (encryptedText[i] === key[j][k]) {
          firstSymbolIndex = [j, k];
          firstSymbolIndexFound = true;
          break;
        }
      }
      if (firstSymbolIndexFound) break;
    }

    for (let j = 0; j < keyColLength; j++) {
      for (let k = 0; k < keyRowLength; k++) {
        if (encryptedText[i + 1] === key[j][k]) {
          secondSymbolIndex = [j, k];
          secondSymbolIndexFound = true;
          break;
        }
      }
      if (secondSymbolIndexFound) break;
    }

    if (firstSymbolIndex[0] === secondSymbolIndex[0]) {
      decryptedText +=
        key[firstSymbolIndex[0]][
          (firstSymbolIndex[1] - 1 + keyRowLength) % keyRowLength
        ] +
        key[secondSymbolIndex[0]][
          (secondSymbolIndex[1] - 1 + keyRowLength) % keyRowLength
        ];
    } else if (firstSymbolIndex[1] === secondSymbolIndex[1]) {
      decryptedText +=
        key[(firstSymbolIndex[0] - 1 + keyColLength) % keyColLength][
          firstSymbolIndex[1]
        ] +
        key[(secondSymbolIndex[0] - 1 + keyColLength) % keyColLength][
          secondSymbolIndex[1]
        ];
    } else {
      decryptedText +=
        key[secondSymbolIndex[0]][firstSymbolIndex[1]] +
        key[firstSymbolIndex[0]][secondSymbolIndex[1]];
    }
  }

  return decryptedText;
}

module.exports = decrypt;
