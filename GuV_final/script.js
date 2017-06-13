// script.js
$(document).ready(function() {
  
  var deck = new Array();
  var currcard = null;
  
  Init();
  Draw();

  // EVENT HANDLER
  $("#clickme").click(function() {
    
    var useranswer = $("#answer").val();
    $("#status").html(useranswer);
    
    if (currcard.answertext == useranswer) {
      alert("correct");
      ClearText();
      Draw(); // GET the next card
    }
    else {
      alert("try again");
      ClearText();
    }    
  });
  
  function ClearText() {
    $("#answer").val("");
    $("#status").html("X");
  }
  
  
  function Init() {
    
    var card1 = {
      card: 1,
      picture : "images/1.jpg",
      answertext : "George Clooney"
    };
    
    var card2 = {
      card: 2,
      picture : "images/2.jpg",
      answertext : "Charlize Theron"
    };
    
	 var card3 = {
      card: 3,
      picture : "images/3.jpg",
      answertext : "Steve Jobs"
    };
	
	 var card4 = {
      card: 4,
      picture : "images/4.jpg",
      answertext : "Eminem"
    };
	
	 var card5 = {
      card: 5,
      picture : "images/5.jpg",
      answertext : "Christopher Walken"
    };
	
	 var card6 = {
      card: 6,
      picture : "images/6.jpg",
      answertext : "Jamie Foxx"
    };
    deck.push(card1);
    deck.push(card2);
	deck.push(card3);
	deck.push(card4);
	deck.push(card5);
	deck.push(card6);
    
  }
  
  function Draw() {
    currcard  =  deck.shift();
    $("#a").attr("src", currcard.picture);
  }
  
});