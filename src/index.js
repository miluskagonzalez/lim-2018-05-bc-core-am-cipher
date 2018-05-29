const encodeButton = document.getElementById('encode');
const decodeButton = document.getElementById('decode');
const textInput = document.getElementById('textInput');
const shift = document.getElementById('shift');
const textOutput = document.getElementById('textOutput');

encodeButton.addEventListener('click', ()=>{
  textOutput.innerHTML = cipher.encode(parseInt(shift.value), textInput.value);
})

decodeButton.addEventListener('click', ()=>{
  textOutput.innerHTML = cipher.decode(parseInt(shift.value), textInput.value);
})