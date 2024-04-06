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
        }

        else {
            if (quoteContent.includes("\n")) {
                const poemFormatted = quoteContent.split('\n').join('<br>');
                quoteElement.innerHTML = poemFormatted;
                textDiv.style.backgroundColor = "#fff";
                quoteElement.style.textAlign = "left";

            } else {
                quoteElement.textContent = quoteContent;
                textDiv.style.backgroundColor = "#fff";
            }
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
