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
    postReddit: function() {
        window.open('https://www.reddit.com/r/quotes/submit?amp;title=' + "Quote by: " + quotes.title + "&text=" + quotes.quote);
    },
    colorChange: function() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
      document.getElementById("quoteDisp").style.color = rgb;
      document.getElementById("authorDisp").style.color = rgb;
    },
};



document.getElementById("newQuote").onclick = function() {
  quotes.generQuote();
  quotes.colorChange();
}
document.getElementById("postTwit").onclick = function() {
  quotes.postTwitter();
}
document.getElementById("postRed").onclick = function() {
  quotes.postReddit();
}


// function newQuote() {
//   quotes.generQuote();
// }
// function postTwitter() {
//   quotes.postTwitter();
// };
// function postReddit() {
//   quotes.postReddit();
// };