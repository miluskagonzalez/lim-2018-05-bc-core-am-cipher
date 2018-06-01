window.cipher = {
  // Función de cifrado
  encode: (offset, string) => {
    // Declarando variables
    let strCode = 0;
    let newStrCode = 0;
    let newStr = '';
    let encodedStr = '';
    // Recorriendo los caracteres del string
    for (let i = 0; i < string.length; i++) {
      // Obteniendo el código ASCII de cada caracter
      strCode = string.charCodeAt(i);
      // Cifrando mayúsculas, minúsculas, y luego agregando tal cual el resto de caracteres
      if (strCode >= 65 && strCode <= 90) {
        newStrCode = (strCode - 65 + offset) % 26 + 65;
        newStr = String.fromCharCode(newStrCode);
        encodedStr += newStr;
      } else if (strCode >= 97 && strCode <= 122) {
        newStrCode = (strCode - 97 + offset) % 26 + 97;
        newStr = String.fromCharCode(newStrCode);
        encodedStr += newStr;
      } else {
        newStr = String.fromCharCode(strCode);
        encodedStr += newStr;
      }
    }
    return encodedStr;  
  },
  // Función de descifrado
  decode: (offset, string) => {
    let strCode = 0;
    let newStrCode = 0;
    let newStr = '';
    let decodedStr = '';
    // Recorriendo los caracteres del string
    for (let i = 0; i < string.length; i++) {
      // Obteniendo el código ASCII de cada caracter
      strCode = string.charCodeAt(i);
      // Cifrando mayúsculas, minúsculas, y luego agregando tal cual el resto de caracteres
      if (strCode >= 65 && strCode <= 90) {
        newStrCode = (strCode - 90 - offset) % 26 + 90;
        newStr = String.fromCharCode(newStrCode);
        decodedStr += newStr;
      } else if (strCode >= 97 && strCode <= 122) {
        newStrCode = (strCode - 122 - offset) % 26 + 122;
        newStr = String.fromCharCode(newStrCode);
        decodedStr += newStr;
      } else { 
        decodedStr += String.fromCharCode(strCode);
      }
    }
    return decodedStr;
  },
  // Función 
  createCipherWithOffset: offset => {
    const result = {
      encode: string => cipher.encode(offset, string),
      decode: string => cipher.decode(offset, string)
    };
    return result;
  }
}