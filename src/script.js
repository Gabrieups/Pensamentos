const quotes = [
    "Seus olhos são hipnotizantes.",
    "Sua pele é suave quanto uma brisa de manhã.",
    "Sua personalidade é única.",
    "Seu sorriso ilumina meu dia.",
    "Cada traço do seu rosto é perfeito.",
    "Sua presença torna o mundo mais bonito.",
    "Seu olhar é como um convite para o paraíso.",
    "Sua inteligência é inspiradora.",
    "Você é a pessoa mais determinada que já conheci.",
    "Você é especial.",
    "Você existir é como um abraço acolhedor.",
    "Invejo como consegue ser tão gentil.",
    "Seu cheiro é viciante.",
    "Sua compreensão profunda torna cada conversa significativa.",
    "Sua voz é doce como música.",
    "Sua risada me aquece.",
    "Seu toque me enfraquece.",
    "Sua energia é contagiante.",
    "Todo segundo de tempo passado com você é precioso.",
    "Nunca me canso de você.",
    "É impossível não gostar de você",
    "Amo você",
    "Somtera, cansada ,ve uva ou desvorseada ?",
    "Você é arte.",
    "I swear I changed my ways for the better 'cause I wanna be with you forever",
    "https://open.spotify.com/embed/track/3dhjNA0jGA8vHBQ1VdD6vV?utm_source=generator",
    "https://open.spotify.com/embed/track/5uCax9HTNlzGybIStD3vDh?utm_source=generator",
    "https://open.spotify.com/embed/track/0GNI8K3VATWBABQFAzBAYe?utm_source=generator",
    "https://open.spotify.com/embed/track/2psRActEWsTlYYd7EDoyVR?utm_source=generator",
    "https://www.youtube.com/embed/VJ3Ynf5lysM?si=PAVNOLSkhuoGtpU1",
    "Sua ausência me desespera.",
    "Você é meu sonho",
    "I can't seem to not need to need you",
    "I would love just to be stuck to your side, not with anybody else, anybody else",
    {image: "src/elisa.jpg"},
    {image: "src/us.jpg"}
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
        const quoteContent = quotes[randomIndex];

        if (typeof quoteContent === 'object' && quoteContent.hasOwnProperty('image')) {
            // Se a citação é um objeto com 'image', trata como citação apenas com imagem
            const quoteImage = quoteContent.image;

            if (window.innerWidth > 425 && window.innerHeight > 896){

                const imageSizeStyle = "max-width: 10vw; border-radius: 2vw;"
                quoteElement.innerHTML = `<img src="${quoteImage}" alt="memoria" style="${imageSizeStyle}">`;
                textDiv.style.backgroundColor = "transparent";

            } else{          
                const imageSizeStyle = "max-width: 50vw; border-radius: 2vw;"
                quoteElement.innerHTML = `<img src="${quoteImage}" alt="memoria" style="${imageSizeStyle}">`;
                textDiv.style.backgroundColor = "transparent";  
            }
        }

        // Verifica se o conteúdo é uma URL
        else if (isValidURL(quoteContent)) {
            const iframeElement = document.createElement("iframe");
            iframeElement.src = quoteContent;

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
            textDiv.style.backgroundColor = "transparent";
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