const quotes = [
    "Seus olhos castanhos avermelhados são hipnotizantes.",
    "Sua pele é suave quanto uma brisa de manhã.",
    "Sua personalidade é única.",
    "Seu sorriso ilumina meu dia.",
    "Cada traço do seu rosto é perfeito.",
    "Sua presença torna o mundo mais bonito.",
    "Seu olhar é o paraíso.",
    "Sua inteligência é inspiradora.",
    "Você é incrivelmente engraçada.",
    "Você é a pessoa mais determinada que já conheci.",
    "Você é essencialmente especial.",
    "Suas roupas são sempre um convite para tira-las.",
    "Você existir é como um abraço acolhedor.",
    "Invejo como consegue ser tão gentil.",
    "Seu cheiro é incomparavelmente viciante.",
    "Sua compreensão profunda torna cada conversa significativa.",
    "Sua voz é doce como música.",
    "Sua risada me aquece.",
    "Seu toque me desmonta.",
    "Sua energia é contagiante.",
    "Todo segundo de tempo passado com você é precioso.",
    "Nunca me canso de você.",
    "É impossível não gostar de você",
    "Amo você"
];

const nextButton = document.getElementById("nextButton");
const quoteElement = document.getElementById("quote");
const loader = document.getElementById("loader");
const textDiv = document.getElementById("text");

function displayRandomQuote() {
    loader.style.display = "block"; // Exibe o loader
    quoteElement.style.opacity = 0;
    textDiv.style.opacity = 0;
    nextButton.style.opacity = 0;


    setTimeout(function () {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
        quoteElement.style.opacity = 1;
        textDiv.style.opacity = 1;
        nextButton.style.opacity = 1;
        textDiv.style.backgroundColor = "#fff";
        quoteElement.style.color = "#000";
        loader.style.display = "none"; // Oculta o loader após exibir a frase
    }, 1500);
}

nextButton.addEventListener("click", displayRandomQuote);

// variaveis dos botoes
const bolsaBtn = document.getElementById("bolsa");
const foneBtn = document.getElementById("fone");
const cartaBtn = document.getElementById("carta");

//variaveis dos textos
const bolsaTxt = document.getElementById("txtBolsa");
const foneTxt = document.getElementById("txtFone");
const cartaTxt = document.getElementById("txtCarta");

function ShowBTxt(){
    if(bolsaTxt.style.opacity == 0){
        bolsaTxt.style.opacity = 1;
    } else {
        bolsaTxt.style.opacity = 0;
    }
}


function ShowFTxt(){
    if(foneTxt.style.opacity == 0){
        foneTxt.style.opacity = 1;
    } else {
        foneTxt.style.opacity = 0;
    }
}

function ShowCTxt(){
    if(cartaTxt.style.opacity == 0){
        cartaTxt.style.opacity = 1;
    } else {
        cartaTxt.style.opacity = 0;
    }
}

bolsaBtn.addEventListener("click", ShowBTxt);
foneBtn.addEventListener("click", ShowFTxt);
cartaBtn.addEventListener("click", ShowCTxt);