const quotes = [
    "Seus olhos são hipnotizantes.",
    "Sua pele é suave quanto uma brisa de manhã.",
    "Sua personalidade é única.",
    "Seu sorriso ilumina meu dia.",
    "Cada traço do seu rosto é perfeito.",
    "Sua presença torna o mundo mais bonito.",
    "Seu olhar é como um convite para o paraíso.",
    "Sua inteligência é inspiradora.",
    "Minha gatinha.",
    "Você é a pessoa mais determinada que já conheci.",
    "Você é essencialmente especial.",
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
    "Amo você",
    "Somtera, cansada ,ve uva ou desvorseada ?",
    "Você é arte.",
    "I swear I changed my ways for the better 'cause I wanna be with you forever",
    'https://open.spotify.com/embed/track/3dhjNA0jGA8vHBQ1VdD6vV?utm_source=generator'
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
        // quoteElement.textContent = quotes[randomIndex];
        const quoteContent = quotes[randomIndex];

        // Verifica se o conteúdo é uma URL
        if (isValidURL(quoteContent)) {
            const iframeElement = document.createElement("iframe");
            iframeElement.src = quoteContent;
            textDiv.style.backgroundColor = "0%  00  0";

            if (window.innerWidth > 425 && window.innerHeight > 896){
                iframeElement.width = "150%";
                iframeElement.height = "80%";
                iframeElement.style.border = "none";
                iframeElement.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
            } else {
                iframeElement.width = "230vw";
                iframeElement.height = "100vw";
                iframeElement.style.border = "none";
                iframeElement.style.position = "relative";
                iframeElement.allow = "autoplay; clipboard-write; encrypted-media; fullscreen";
            }

            quoteElement.innerHTML = ''; // Limpa qualquer conteúdo anterior
            quoteElement.style.display = "flex";
            quoteElement.style.justifyContent = "center";
            quoteElement.style.alignItems = "center";
            quoteElement.appendChild(iframeElement);
        } else {
            quoteElement.textContent = quoteContent;
            textDiv.style.backgroundColor = "#fff";
        }
        
        quoteElement.style.opacity = 1;
        textDiv.style.opacity = 1;
        nextButton.style.opacity = 1;
        quoteElement.style.color = "#000";
        loader.style.display = "none"; // Oculta o loader após exibir a frase
    }, 1500);

    function isValidURL(str) {
        // Regex para verificar se a string é uma URL válida
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(str);
    }
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