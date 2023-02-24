const morseDictionary = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    " ": "/"
  };
  
  const translateToMorse = () => {
    const inputText = document.getElementById("input-text").value.toUpperCase();
    let morseCode = "";
  
    for (let i = 0; i < inputText.length; i++) {
      const currentChar = inputText[i];
      if (morseDictionary[currentChar]) {
        morseCode += morseDictionary[currentChar] + " ";
      } else {
        morseCode += currentChar + " ";
      }
    }
  
    document.getElementById("morse-text").textContent = morseCode;
    document.querySelector(".output").style.display = "block";
  };
  
  document.getElementById("translate-btn").addEventListener("click", translateToMorse);
  