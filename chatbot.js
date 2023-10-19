updateView()
function updateView() {
document.getElementById('app').innerHTML = /*HTML*/`

<div class="container">
<div class="text">Verdens mest ubrukelige chatbot: Kjell!</div>
<div class="bildecontainer">
<img src="map/chatbot.jpg" alt="Ubrukelig chatbot"> <br>
<input id="chatbox" type="text">
<div class="output" id="outputFelt"></div> <br>
<h4>Kjell vil kun høre disse spørsmålene:<h4>
<div>Hei</div>
<div>Hvordan går det?</div>
<div>Har du noen gode tips?</div>
<div>Hvem vant fotball-VM i 2018?</div>
<div>Hvordan vet du alt dette?</div>
<div>Kan du svare på mer?</div>
</div>
</div>

`
const userInput = document.getElementById('chatbox');
const outputField = document.getElementById('outputFelt');

const botInteraction = {
    "hei": "Heisann!",
    "hvordan går det?": "Det går alltid bra med meg, jeg er bare en bot uten følelser.",
    "har du noen gode tips?": "Spis sunt, tren, legg deg tidlig og få mye frisk luft.",
    "hvem vant fotball-VM i 2018?": "Frankrike",
    "hvordan vet du alt dette?": "En elev har laget meg, men man kan vel trygt si at jeg ikke måler meg med chatGPT!",
    "kan du svare på mer?": "Nei, hun som kodet dette orket bare å legge inn 6 spørsmål.",
};

userInput.addEventListener('input', function () {
    const userMessage = userInput.value.toLowerCase();
    const botResponse = botInteraction[userMessage] || "...";
    outputField.innerHTML = `Kjell: ${botResponse}`;
}); 
}
