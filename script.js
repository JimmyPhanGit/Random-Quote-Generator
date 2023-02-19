const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

// random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading New Quote...";
    // this uses the api and parse it into json
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", ()=>{
    //SpeechSynthesisUtterance is a web speech api that repesents a speech request
    let utterance = new SpeechSynthesisUtterance(quoteText.innerText + 'by' + authorName.innerText);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    //copies the qupte text on copybtn click
    // writeText() property writes the specified string to the clipboard
    // ctrl v to paste it
   navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = 'https://twitter.com/intent/tweet?url=${quoteText.innerText}';
    window.open(tweetUrl, "_blank"); //opens a new twitter tab with quote ready to go
});

quoteBtn.addEventListener("click", randomQuote);