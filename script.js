/*global $ */

var qGen = {
    quote: "",
    title: "",
    // quote2: "",
    // title2: "",
    generQuote: function() {
      $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes", function(quoteData) {
        console.log(quoteData);
        qGen.quote = quoteData[0].quote;
        qGen.title = quoteData[0].character;
        document.getElementById("quoteDisp").innerHTML = ('"' + qGen.quote + '"');
        document.getElementById("authorDisp").innerHTML = '- ' + qGen.title;
      });
    },
    chgQuote: function() {
      $.getJSON("https://talaikis.com/api/quotes/random/", function(quoteData2) {
        console.log(quoteData2);
        qGen.quote = quoteData2.quote;
        qGen.title = quoteData2.author;
        document.getElementById("quoteDisp").innerHTML = ('"' + qGen.quote + '"');
        document.getElementById("authorDisp").innerHTML = '- ' + qGen.title;
      });
    },
    postTwitter: function() {
        window.open('https://twitter.com/intent/tweet?text=' + '"' + qGen.quote + '"' + '  - ' + qGen.title);
    },
    postReddit: function() {
        window.open('https://www.reddit.com/r/quotes/submit?amp;title=' + "Quote by: " + qGen.title + "&text=" + qGen.quote);
    },
    colorChange: function() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
      document.getElementById("quoteDisp").style.color = rgb;
      document.getElementById("authorDisp").style.color = rgb;
      document.body.style.backgroundColor = "black";
      document.getElementById("jmbo").style.backgroundImage = "url('https://i.ytimg.com/vi/OKPZ5eAWBn0/maxresdefault.jpg')";
    },
    colorChange2: function() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
      document.getElementById("quoteDisp").style.color = "white";
      document.getElementById("authorDisp").style.color = "white";
      document.body.style.backgroundColor = rgb;
      document.getElementById("jmbo").style.backgroundImage = "url('https://images.sharefaith.com/images/3/1473711383512_13/img_mouseover3.jpg')";
    },
};

document.getElementById("newQuote").onclick = function() {
  qGen.generQuote();
  qGen.colorChange();
}
document.getElementById("changeQuote").onclick = function() {
  qGen.chgQuote();
  qGen.colorChange2();
}
document.getElementById("postTwit").onclick = function() {
  qGen.postTwitter();
}
document.getElementById("postRed").onclick = function() {
  qGen.postReddit();
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