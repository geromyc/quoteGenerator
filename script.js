/*global $ */

var quotes = {
    quote: "",
    title: "",
    generQuote: function() {
        $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes", function(quoteData) {
        console.log(quoteData);
        quotes.quote = quoteData[0].quote;
        quotes.title = quoteData[0].character;
        document.getElementById("quoteDisp").innerHTML = ('"' + quotes.quote + '"');
        document.getElementById("authorDisp").innerHTML = '- ' + quotes.title;
        });
    },
    postTwitter: function() {
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quotes.quote + '"' + '  - ' + quotes.title));
    },
};

function getQuote() {
  quotes.generQuote();
};
function postTwitter() {
  quotes.postTwitter();
};
function postReddit() {
  quotes.postReddit();
};