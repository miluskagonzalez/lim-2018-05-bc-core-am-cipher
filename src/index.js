// Declarando variables
const encodeButton = document.getElementById('encode');
const decodeButton = document.getElementById('decode');
const textInput = document.getElementById('textInput');
const shift = document.getElementById('shift');
const textOutput = document.getElementById('textOutput');
// Llamando a la función cifrar
encodeButton.addEventListener('click', ()=>{
  textOutput.innerHTML = cipher.encode(parseInt(shift.value), textInput.value);
})
// Llamando a la función decifrar
decodeButton.addEventListener('click', ()=>{
  textOutput.innerHTML = cipher.decode(parseInt(shift.value), textInput.value);
})