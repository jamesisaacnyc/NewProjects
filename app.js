// alert ('Mothafucka')
///////////////////////////////////////////////////////////Card Variables/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////Suit: Clubs
var oneClubs = { 
	card:'One',
	suit: 'clubs',
	value: 1
	}

var twoClubs = { 
	card:'Two',
	suit: 'clubs',
	value: 2
	}


var threeClubs = { 
	card:'Three',
	suit: 'clubs',
	value: 3
	}


var fourClubs = { 
	card:'Four',
	suit: 'clubs',
	value: 4
	}


var fiveClubs = { 
	card:'Five',
	suit: 'clubs',
	value: 5
	}


var sixClubs = { 
	card:'Six',
	suit: 'clubs',
	value: 6
	}

var sevenClubs = { 
	card:'Seven',
	suit: 'clubs',
	value: 7
	}


var eightClubs = { 
	card:'Eight',
	suit: 'clubs',
	value: 8
	}


var nineClubs = { 
	card:'Nine',
	suit: 'clubs',
	value: 9
	}


var tenClubs = { 
	card:'Ten',
	suit: 'clubs',
	value: 10
	}


var jackClubs = { 
	card:'Jack',
	suit: 'clubs',
	value: 10
	}


var queenClubs = { 
	card:'Queen',
	suit: 'clubs',
	value: 10
	}


var kingClubs = { 
	card:'King',
	suit: 'clubs',
	value: 10
	}

var AceClubs = { 
	card:'Ace',
	suit: 'clubs',
	value: 11
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////Suit: Spades

var oneSpades = { 
	card:'One',
	suit: 'spades',
	value: 1
	}

var twoSpades = { 
	card:'Two',
	suit: 'spades',
	value: 2
	}


var threeSpades = { 
	card:'Three',
	suit: 'spades',
	value: 3
	}


var fourSpades = { 
	card:'Four',
	suit: 'spades',
	value: 4
	}


var fiveSpades = { 
	card:'Five',
	suit: 'spades',
	value: 5
	}


var sixSpades = { 
	card:'Six',
	suit: 'spades',
	value: 6
	}

var sevenSpades = { 
	card:'Seven',
	suit: 'spades',
	value: 7
	}


var eightSpades = { 
	card:'Eight',
	suit: 'spades',
	value: 8
	}


var nineSpades = { 
	card:'Nine',
	suit: 'spades',
	value: 9
	}


var tenSpades = { 
	card:'Ten',
	suit: 'spades',
	value: 10
	}


var jackSpades = { 
	card:'Jack',
	suit: 'spades',
	value: 10
	}


var queenSpades = { 
	card:'Queen',
	suit: 'spades',
	value: 10
	}


var kingSpades = { 
	card:'King',
	suit: 'spades',
	value: 10
	}

var AceSpades = { 
	card:'Ace',
	suit: 'spades',
	value: 11
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////Suit: Diamond


var oneDiamond = { 
	card:'One',
	suit: 'diamond',
	value: 1
	}

var twoDiamond = { 
	card:'Two',
	suit: 'diamond',
	value: 2
	}


var threeDiamond = { 
	card:'Three',
	suit: 'diamond',
	value: 3
	}


var fourDiamond = { 
	card:'Four',
	suit: 'diamond',
	value: 4
	}


var fiveDiamond = { 
	card:'Five',
	suit: 'diamond',
	value: 5
	}


var sixDiamond = { 
	card:'Six',
	suit: 'diamond',
	value: 6
	}

var sevenDiamond = { 
	card:'Seven',
	suit: 'diamond',
	value: 7
	}


var eightDiamond = { 
	card:'Eight',
	suit: 'diamond',
	value: 8
	}


var nineDiamond = { 
	card:'Nine',
	suit: 'diamond',
	value: 9
	}


var tenDiamond = { 
	card:'Ten',
	suit: 'diamond',
	value: 10
	}


var jackDiamond = { 
	card:'Jack',
	suit: 'diamond',
	value: 10
	}


var queenDiamond = { 
	card:'Queen',
	suit: 'diamond',
	value: 10
	}


var kingDiamond = { 
	card:'King',
	suit: 'diamond',
	value: 10
	}

var AceDiamond = { 
	card:'Ace',
	suit: 'diamond',
	value: 11
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////Suit: Hearts



var oneHeart = { 
	card:'One',
	suit: 'heart',
	value: 1
	}

var twoHeart = { 
	card:'Two',
	suit: 'heart',
	value: 2
	}


var threeHeart = { 
	card:'Three',
	suit: 'heart',
	value: 3
	}


var fourHeart = { 
	card:'Four',
	suit: 'heart',
	value: 4
	}


var fiveHeart = { 
	card:'Five',
	suit: 'heart',
	value: 5
	}


var sixHeart = { 
	card:'Six',
	suit: 'heart',
	value: 6
	}

var sevenHeart = { 
	card:'Seven',
	suit: 'heart',
	value: 7
	}


var eightHeart = { 
	card:'Eight',
	suit: 'heart',
	value: 8
	}


var nineHeart = { 
	card:'Nine',
	suit: 'heart',
	value: 9
	}


var tenHeart = { 
	card:'Ten',
	suit: 'heart',
	value: 10
	}


var jackHeart = { 
	card:'Jack',
	suit: 'heart',
	value: 10
	}


var queenHeart = { 
	card:'Queen',
	suit: 'heart',
	value: 10
	}


var kingHeart = { 
	card:'King',
	suit: 'heart',
	value: 10
	}

var AceHeart = { 
	card:'Ace',
	suit: 'heart',
	value: 11
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////Card Arrays//////////////////////////////////////////////////////////////////////

							//2D Card Array//
//////////////////////////////////////////////
var deck = new Array(4)									
																				
	for( var i = 0; i < 4; i++) { 					
		deck[i] = new Array(14);}						
//////////////////////////////////////////////


///Clubs Suit/////////////
	deck[0][0]= oneClubs	
	deck[0][1]= twoClubs	
	deck[0][2]= threeClubs	
	deck[0][3]= fourClubs		
	deck[0][4]= fiveClubs		
	deck[0][5]= sixClubs		
	deck[0][6]=	sevenClubs	
	deck[0][7]= eightClubs	
	deck[0][8]= nineClubs		
	deck[0][9]= tenHeart		
	deck[0][10]= jackClubs	
	deck[0][11]= queenClubs	
	deck[0][12]= kingClubs	
	deck[0][13]= AceClubs		
////////////////////////////

	///Spade Suit/////////////
	deck[1][0]= oneSpades
	deck[1][1]= twoSpades
	deck[1][2]= threeSpades
	deck[1][3]= fourSpades
	deck[1][4]= fiveSpades
	deck[1][5]= sixSpades
	deck[1][6]=	sevenSpades
	deck[1][7]= eightSpades
	deck[1][8]= nineSpades
	deck[1][9]= tenSpades
	deck[1][10]= jackSpades
	deck[1][11]= queenSpades
	deck[1][12]= kingSpades
	deck[1][13]= AceSpades



	///Diamond Suit/////////////
	deck[2][0]= oneDiamond
	deck[2][1]= twoDiamond
	deck[2][2]= threeDiamond
	deck[2][3]= fourDiamond
	deck[2][4]= fiveDiamond
	deck[2][5]= sixDiamond
	deck[2][6]=	sevenDiamond
	deck[2][7]= eightDiamond
	deck[2][8]= nineDiamond
	deck[2][9]= tenDiamond
	deck[2][10]= jackDiamond
	deck[2][11]= queenDiamond
	deck[2][12]= kingDiamond
	deck[2][13]= AceDiamond





	///Heart Suit/////////////
	deck[3][0]= oneHeart
	deck[3][1]= twoHeart
	deck[3][2]= threeHeart
	deck[3][3]= fourHeart
	deck[3][4]= fiveHeart
	deck[3][5]= sixHeart
	deck[3][6]=	sevenHeart
	deck[3][7]= eightHeart
	deck[3][8]= nineHeart
	deck[3][9]= tenHeart
	deck[3][10]= jackHeart
	deck[3][11]= queenHeart
	deck[3][12]= kingHeart
	deck[3][13]= AceHeart




//////Array Structure///////////////
// Clubs    Spades  Diamond  Heart
// [0][0]	  [1][0]	[2][0]   [3][0]
// [0][1]	  [1][1]	[2][1]   [3][1]
// [0][2]	  [1][2]	[2][2]   [3][2]
// [0][3]	  [1][3]	[2][3]   [3][3]
// [0][4]	  [1][4]	[2][4]   [3][4]
// [0][5]	  [1][5]	[2][5]   [3][5]
// [0][6]	  [1][6]	[2][6]   [3][6]
// [0][7]	  [1][7]	[2][7]   [3][7]
// [0][8]	  [1][8]	[2][8]   [3][8]
// [0][9]	  [1][9]	[2][9]   [3][9]
// [0][10]  [1][10]	[2][10]  [3][10]
// [0][11]	[1][11]	[2][11]  [3][11]
// [0][12]	[1][12]	[2][12]  [3][12]
// [0][13]	[1][13]	[2][13]  [3][13]
console.log(deck);





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////Game Mechanics//////////////////////////////////////////////////////////////////////


$('.dealHand').click(function() {
    location.reload(true); 
});

// 
////////////////////////////////////////////////////////GET CARDS///////////////////////////////////////////////////


///PLAYER CARDS 
////////////////////////CARD ONE////////////////////////////////
////////////////////////////////////////////////////////////////

var row1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
var column1 = [0,1,2,3,];



var sortRow1 = row1[Math.floor(Math.random() * row1.length)];

var sortColumns1 = column1[Math.floor(Math.random() * column1.length)];

var card1 = deck[sortColumns1][sortRow1];
console.log(card1);


console.log(sortColumns1, sortRow1);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////



////////////////////////CARD TWO////////////////////////////////
////////////////////////////////////////////////////////////////

var row2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
var column2 = [0,1,2,3,];



var sortRow2 = row2[Math.floor(Math.random() * row2.length)];

var sortColumns2 = column2[Math.floor(Math.random() * column2.length)];

var card2 = deck[sortColumns2][sortRow2];
console.log(card2);


console.log(sortColumns2, sortRow2);

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////




///DEALER CARDS

////////////////////////CARD ONE////////////////////////////////
////////////////////////////////////////////////////////////////

var row3 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
var column3 = [0,1,2,3,];



var sortRow3 = row3[Math.floor(Math.random() * row3.length)];

var sortColumns3 = column3[Math.floor(Math.random() * column3.length)];

var card3 = deck[sortColumns3][sortRow3];
console.log(card3);

console.log(sortColumns3, sortRow3);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////



////////////////////////CARD TWO////////////////////////////////
////////////////////////////////////////////////////////////////

var row4 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
var column4 = [0,1,2,3,];



var sortRow4 = row4[Math.floor(Math.random() * row4.length)];

var sortColumns4 = column4[Math.floor(Math.random() * column4.length)];

var card4 = deck[sortColumns4][sortRow4];
console.log(card4);

console.log(sortColumns4, sortRow4);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////Card Assign////////////////////////////////////////////////////



var playerCards1 = card1.value + card2.value;
console.log(playerCards1);

var dealerCards = card3.value + card4.value;
console.log(dealerCards);



/////////////////////////////////////////////////Hit Function////////////////////////////////////////////////////

// var row5 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
// var column5 = [0,1,2,3,];



// var sortRow5 = row5[Math.floor(Math.random() * row5.length)];

// var sortColumns5 = column5[Math.floor(Math.random() * column5.length)];

// var card5 = deck[sortColumns5][sortRow5];
// console.log(card5);



if (playerCards1 == 21) {
    console.log("Player has 21, Black Jack");
    $( "h1" ).append( "<h1>Player has 21, Black Jack</h1>" );
} else if (dealerCards == 21) {
    console.log("Dealer has 21, Black Jack");
    $( "h1" ).append( "<h1>Dealer has 21, Black Jack</h1>" );
} else if (playerCards1 == dealerCards) {
    console.log("Tie");
    $( "h1" ).append( "<h1>Tie</h1>" );
} else if (playerCards1 > dealerCards) {
    console.log("Player Wins");
    $( "h1" ).append( "<h1>Player Wins</h1>" );
} else {
   	console.log("Dealer Wins");
   	$( "h1" ).append( "<h1>Dealer Wins</h1>" );
}

////Card Image Append
////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// CARD ONE  //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////




if (card1.card === 'One' && card1.suit === 'clubs') { 
	$('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
} else if (card1.card === 'Two' && card1.suit === 'clubs') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/2Clubs.jpg'}))
} else if (card1.card === 'Three' && card1.suit === 'clubs') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/3Clubs.jpg'}))
} else if (card1.card === 'Four' && card1.suit === 'clubs' ) {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/4Clubs.jpg'}))
} else if (card1.card === 'Five' && card1.suit === 'clubs' ) {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/5Clubs.jpg'}))
} else if (card1.card === 'Six' && card1.suit === 'clubs') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/6Clubs.jpg'}))
} else if (card1.card === 'Seven' && card1.suit === 'clubs') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/7Clubs.jpg'}))
} else if (card1.card === 'Eight' && card1.suit === 'clubs') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/8Clubs.jpg'}))
} else if (card1.card === 'Nine' && card1.suit === 'clubs') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/9Clubs.jpg'}))
} else if (card1.card === 'Ten' && card1.suit === 'clubs') {
 	$('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/10Clubs.jpg'}))
} else if (card1.card ==='Jack' && card1.suit === 'clubs' ) {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/JackClubs.jpg'}))
} else if (card1.card === 'Queen' && card1.suit === 'clubs') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/QueenClubs.jpg'}))
} else if (card1.card === 'King' && card1.suit === 'clubs') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/KingClubs.jpg'}))
} else if (card1.card === 'Ace' && card1.suit === 'clubs') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
} else { 
	console.log("Well Fuck")
}



if (card1.card === 'One' && card1.suit === 'heart') { 
	$('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/AceHeart.jpg'}))
} else if (card1.card === 'Two' && card1.suit === 'heart') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/2Heart.jpg'}))
} else if (card1.card === 'Three' && card1.suit === 'heart') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/3Heart.jpg'}))
} else if (card1.card === 'Four' && card1.suit === 'heart' ) {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/4Heart.jpg'}))
} else if (card1.card === 'Five' && card1.suit === 'heart' ) {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/5Heart.jpg'}))
} else if (card1.card === 'Six' && card1.suit === 'heart') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/6Heart.jpg'}))
} else if (card1.card === 'Seven' && card1.suit === 'heart') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/7Heart.jpg'}))
} else if (card1.card === 'Eight' && card1.suit === 'heart') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/8Heart.jpg'}))
} else if (card1.card === 'Nine' && card1.suit === 'heart') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/9Heart.jpg'}))
} else if (card1.card === 'Ten' && card1.suit === 'heart') {
 	$('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/10Heart.jpg'}))
} else if (card1.card ==='Jack' && card1.suit === 'heart' ) {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/JackHeart.jpg'}))
} else if (card1.card === 'Queen' && card1.suit === 'heart') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/QueenHeart.jpg'}))
} else if (card1.card === 'King' && card1.suit === 'heart') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/KingHeart.jpg'}))
} else if (card1.card === 'Ace' && card1.suit === 'heart') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/AceHeart.jpg'}))
} else { 
	console.log("Well Fuck")
}

if (card1.card === 'One' && card1.suit === 'diamond') { 
	$('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/AceDiamond.jpg'}))
} else if (card1.card === 'Two' && card1.suit === 'diamond') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/2Diamond.jpg'}))
} else if (card1.card === 'Three' && card1.suit === 'diamond') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/3Diamond.jpg'}))
} else if (card1.card === 'Four' && card1.suit === 'diamond' ) {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/4Diamond.jpg'}))
} else if (card1.card === 'Five' && card1.suit === 'diamond' ) {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/5Diamond.jpg'}))
} else if (card1.card === 'Six' && card1.suit === 'diamond') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/6Diamond.jpg'}))
} else if (card1.card === 'Seven' && card1.suit === 'diamond') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/7Diamond.jpg'}))
} else if (card1.card === 'Eight' && card1.suit === 'diamond') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/8Diamond.jpg'}))
} else if (card1.card === 'Nine' && card1.suit === 'diamond') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/9Diamond.jpg'}))
} else if (card1.card === 'Ten' && card1.suit === 'diamond') {
 	$('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/10Diamond.jpg'}))
} else if (card1.card ==='Jack' && card1.suit === 'diamond' ) {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/JackDiamond.jpg'}))
} else if (card1.card === 'Queen' && card1.suit === 'diamond') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/QueenDiamond.jpg'}))
} else if (card1.card === 'King' && card1.suit === 'diamond') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/KingDiamond.jpg'}))
} else if (card1.card === 'Ace' && card1.suit === 'diamond') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/AceDiamond.jpg'}))
} else { 
	console.log("Well Fuck")
}




if (card1.card === 'One' && card1.suit === 'spades') { 
	$('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/AceSpade.jpg'}))
} else if (card1.card === 'Two' && card1.suit === 'spades') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/2Spade.jpg'}))
} else if (card1.card === 'Three' && card1.suit === 'spades') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/3Spade.jpg'}))
} else if (card1.card === 'Four' && card1.suit === 'spades' ) {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/4Spade.jpg'}))
} else if (card1.card === 'Five' && card1.suit === 'spades' ) {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/5Spade.jpg'}))
} else if (card1.card === 'Six' && card1.suit === 'spades') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/6Spade.jpg'}))
} else if (card1.card === 'Seven' && card1.suit === 'spades') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/7Spade.jpg'}))
} else if (card1.card === 'Eight' && card1.suit === 'spades') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/8Spade.jpg'}))
} else if (card1.card === 'Nine' && card1.suit === 'spades') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/9Spade.jpg'}))
} else if (card1.card === 'Ten' && card1.suit === 'spades') {
 	$('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/10Spade.jpg'}))
} else if (card1.card ==='Jack' && card1.suit === 'spades' ) {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/JackSpade.jpg'}))
} else if (card1.card === 'Queen' && card1.suit === 'spades') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/QueenSpade.jpg'}))
} else if (card1.card === 'King' && card1.suit === 'spades') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/KingSpade.jpg'}))
} else if (card1.card === 'Ace' && card1.suit === 'spades') {
  $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/AceSpade.jpg'}))
} else { 
	console.log("Well Fuck")
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// CARD TWO //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////






if (card2.card === 'One' && card2.suit === 'clubs') { 
	$('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
} else if (card2.card === 'Two' && card2.suit === 'clubs') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/2Clubs.jpg'}))
} else if (card2.card === 'Three' && card2.suit === 'clubs') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/3Clubs.jpg'}))
} else if (card2.card === 'Four' && card2.suit === 'clubs' ) {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/4Clubs.jpg'}))
} else if (card2.card === 'Five' && card2.suit === 'clubs' ) {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/5Clubs.jpg'}))
} else if (card2.card === 'Six' && card2.suit === 'clubs') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/6Clubs.jpg'}))
} else if (card2.card === 'Seven' && card2.suit === 'clubs') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/7Clubs.jpg'}))
} else if (card2.card === 'Eight' && card2.suit === 'clubs') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/8Clubs.jpg'}))
} else if (card2.card === 'Nine' && card2.suit === 'clubs') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/9Clubs.jpg'}))
} else if (card2.card === 'Ten' && card2.suit === 'clubs') {
 	$('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/10Clubs.jpg'}))
} else if (card2.card ==='Jack' && card2.suit === 'clubs' ) {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/JackClubs.jpg'}))
} else if (card2.card === 'Queen' && card2.suit === 'clubs') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/QueenClubs.jpg'}))
} else if (card2.card === 'King' && card2.suit === 'clubs') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/KingClubs.jpg'}))
} else if (card2.card === 'Ace' && card2.suit === 'clubs') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
} else { 
	console.log("Well Fuck")
}



if (card2.card === 'One' && card2.suit === 'heart') { 
	$('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/AceHeart.jpg'}))
} else if (card2.card === 'Two' && card2.suit === 'heart') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/2Heart.jpg'}))
} else if (card2.card === 'Three' && card2.suit === 'heart') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/3Heart.jpg'}))
} else if (card2.card === 'Four' && card2.suit === 'heart' ) {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/4Heart.jpg'}))
} else if (card2.card === 'Five' && card2.suit === 'heart' ) {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/5Heart.jpg'}))
} else if (card2.card === 'Six' && card2.suit === 'heart') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/6Heart.jpg'}))
} else if (card2.card === 'Seven' && card2.suit === 'heart') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/7Heart.jpg'}))
} else if (card2.card === 'Eight' && card2.suit === 'heart') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/8Heart.jpg'}))
} else if (card2.card === 'Nine' && card2.suit === 'heart') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/9Heart.jpg'}))
} else if (card2.card === 'Ten' && card2.suit === 'heart') {
 	$('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/10Heart.jpg'}))
} else if (card2.card ==='Jack' && card2.suit === 'heart' ) {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/JackHeart.jpg'}))
} else if (card2.card === 'Queen' && card2.suit === 'heart') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/QueenHeart.jpg'}))
} else if (card2.card === 'King' && card2.suit === 'heart') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/KingHeart.jpg'}))
} else if (card2.card === 'Ace' && card2.suit === 'heart') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/AceHeart.jpg'}))
} else { 
	console.log("Well Fuck")
}

if (card2.card === 'One' && card2.suit === 'diamond') { 
	$('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/AceDiamond.jpg'}))
} else if (card2.card === 'Two' && card2.suit === 'diamond') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/2Diamond.jpg'}))
} else if (card2.card === 'Three' && card2.suit === 'diamond') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/3Diamond.jpg'}))
} else if (card2.card === 'Four' && card2.suit === 'diamond' ) {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/4Diamond.jpg'}))
} else if (card2.card === 'Five' && card2.suit === 'diamond' ) {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/5Diamond.jpg'}))
} else if (card2.card === 'Six' && card2.suit === 'diamond') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/6Diamond.jpg'}))
} else if (card2.card === 'Seven' && card2.suit === 'diamond') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/7Diamond.jpg'}))
} else if (card2.card === 'Eight' && card2.suit === 'diamond') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/8Diamond.jpg'}))
} else if (card2.card === 'Nine' && card2.suit === 'diamond') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/9Diamond.jpg'}))
} else if (card2.card === 'Ten' && card2.suit === 'diamond') {
 	$('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/10Diamond.jpg'}))
} else if (card2.card ==='Jack' && card2.suit === 'diamond' ) {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/JackDiamond.jpg'}))
} else if (card2.card === 'Queen' && card2.suit === 'diamond') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/QueenDiamond.jpg'}))
} else if (card2.card === 'King' && card2.suit === 'diamond') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/KingDiamond.jpg'}))
} else if (card2.card === 'Ace' && card2.suit === 'diamond') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/AceDiamond.jpg'}))
} else { 
	console.log("Well Fuck")
}




if (card2.card === 'One' && card2.suit === 'spades') { 
	$('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/AceSpade.jpg'}))
} else if (card2.card === 'Two' && card2.suit === 'spades') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/2Spade.jpg'}))
} else if (card2.card === 'Three' && card2.suit === 'spades') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/3Spade.jpg'}))
} else if (card2.card === 'Four' && card2.suit === 'spades' ) {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/4Spade.jpg'}))
} else if (card2.card === 'Five' && card2.suit === 'spades' ) {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/5Spade.jpg'}))
} else if (card2.card === 'Six' && card2.suit === 'spades') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/6Spade.jpg'}))
} else if (card2.card === 'Seven' && card2.suit === 'spades') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/7Spade.jpg'}))
} else if (card2.card === 'Eight' && card2.suit === 'spades') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/8Spade.jpg'}))
} else if (card2.card === 'Nine' && card2.suit === 'spades') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/9Spade.jpg'}))
} else if (card2.card === 'Ten' && card2.suit === 'spades') {
 	$('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/10Spade.jpg'}))
} else if (card2.card ==='Jack' && card2.suit === 'spades' ) {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/JackSpade.jpg'}))
} else if (card2.card === 'Queen' && card2.suit === 'spades') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/QueenSpade.jpg'}))
} else if (card2.card === 'King' && card2.suit === 'spades') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/KingSpade.jpg'}))
} else if (card2.card === 'Ace' && card2.suit === 'spades') {
  $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/AceSpade.jpg'}))
} else { 
	console.log("Well Fuck")
}











////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// CARD THREE //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



if (card3.card === 'One' && card3.suit === 'clubs') { 
	$('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
} else if (card3.card === 'Two' && card3.suit === 'clubs') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/2Clubs.jpg'}))
} else if (card3.card === 'Three' && card3.suit === 'clubs') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/3Clubs.jpg'}))
} else if (card3.card === 'Four' && card3.suit === 'clubs' ) {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/4Clubs.jpg'}))
} else if (card3.card === 'Five' && card3.suit === 'clubs' ) {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/5Clubs.jpg'}))
} else if (card3.card === 'Six' && card3.suit === 'clubs') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/6Clubs.jpg'}))
} else if (card3.card === 'Seven' && card3.suit === 'clubs') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/7Clubs.jpg'}))
} else if (card3.card === 'Eight' && card3.suit === 'clubs') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/8Clubs.jpg'}))
} else if (card3.card === 'Nine' && card3.suit === 'clubs') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/9Clubs.jpg'}))
} else if (card3.card === 'Ten' && card3.suit === 'clubs') {
 	$('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/10Clubs.jpg'}))
} else if (card3.card ==='Jack' && card3.suit === 'clubs' ) {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/JackClubs.jpg'}))
} else if (card3.card === 'Queen' && card3.suit === 'clubs') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/QueenClubs.jpg'}))
} else if (card3.card === 'King' && card3.suit === 'clubs') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/KingClubs.jpg'}))
} else if (card3.card === 'Ace' && card3.suit === 'clubs') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
} else { 
	console.log("Well Fuck")
}



if (card3.card === 'One' && card3.suit === 'heart') { 
	$('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/AceHeart.jpg'}))
} else if (card3.card === 'Two' && card3.suit === 'heart') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/2Heart.jpg'}))
} else if (card3.card === 'Three' && card3.suit === 'heart') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/3Heart.jpg'}))
} else if (card3.card === 'Four' && card3.suit === 'heart' ) {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/4Heart.jpg'}))
} else if (card3.card === 'Five' && card3.suit === 'heart' ) {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/5Heart.jpg'}))
} else if (card3.card === 'Six' && card3.suit === 'heart') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/6Heart.jpg'}))
} else if (card3.card === 'Seven' && card3.suit === 'heart') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/7Heart.jpg'}))
} else if (card3.card === 'Eight' && card3.suit === 'heart') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/8Heart.jpg'}))
} else if (card3.card === 'Nine' && card3.suit === 'heart') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/9Heart.jpg'}))
} else if (card3.card === 'Ten' && card3.suit === 'heart') {
 	$('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/10Heart.jpg'}))
} else if (card3.card ==='Jack' && card3.suit === 'heart' ) {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/JackHeart.jpg'}))
} else if (card3.card === 'Queen' && card3.suit === 'heart') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/QueenHeart.jpg'}))
} else if (card3.card === 'King' && card3.suit === 'heart') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/KingHeart.jpg'}))
} else if (card3.card === 'Ace' && card3.suit === 'heart') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/AceHeart.jpg'}))
} else { 
	console.log("Well Fuck")
}

if (card3.card === 'One' && card3.suit === 'diamond') { 
	$('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/AceDiamond.jpg'}))
} else if (card3.card === 'Two' && card3.suit === 'diamond') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/2Diamond.jpg'}))
} else if (card3.card === 'Three' && card3.suit === 'diamond') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/3Diamond.jpg'}))
} else if (card3.card === 'Four' && card3.suit === 'diamond' ) {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/4Diamond.jpg'}))
} else if (card3.card === 'Five' && card3.suit === 'diamond' ) {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/5Diamond.jpg'}))
} else if (card3.card === 'Six' && card3.suit === 'diamond') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/6Diamond.jpg'}))
} else if (card3.card === 'Seven' && card3.suit === 'diamond') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/7Diamond.jpg'}))
} else if (card3.card === 'Eight' && card3.suit === 'diamond') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/8Diamond.jpg'}))
} else if (card3.card === 'Nine' && card3.suit === 'diamond') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/9Diamond.jpg'}))
} else if (card3.card === 'Ten' && card3.suit === 'diamond') {
 	$('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/10Diamond.jpg'}))
} else if (card3.card ==='Jack' && card3.suit === 'diamond' ) {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/JackDiamond.jpg'}))
} else if (card3.card === 'Queen' && card3.suit === 'diamond') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/QueenDiamond.jpg'}))
} else if (card3.card === 'King' && card3.suit === 'diamond') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/KingDiamond.jpg'}))
} else if (card3.card === 'Ace' && card3.suit === 'diamond') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/AceDiamond.jpg'}))
} else { 
	console.log("Well Fuck")
}




if (card3.card === 'One' && card3.suit === 'spades') { 
	$('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/AceSpade.jpg'}))
} else if (card3.card === 'Two' && card3.suit === 'spades') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/2Spade.jpg'}))
} else if (card3.card === 'Three' && card3.suit === 'spades') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/3Spade.jpg'}))
} else if (card3.card === 'Four' && card3.suit === 'spades' ) {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/4Spade.jpg'}))
} else if (card3.card === 'Five' && card3.suit === 'spades' ) {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/5Spade.jpg'}))
} else if (card3.card === 'Six' && card3.suit === 'spades') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/6Spade.jpg'}))
} else if (card3.card === 'Seven' && card3.suit === 'spades') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/7Spade.jpg'}))
} else if (card3.card === 'Eight' && card3.suit === 'spades') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/8Spade.jpg'}))
} else if (card3.card === 'Nine' && card3.suit === 'spades') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/9Spade.jpg'}))
} else if (card3.card === 'Ten' && card3.suit === 'spades') {
 	$('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/10Spade.jpg'}))
} else if (card3.card ==='Jack' && card3.suit === 'spades' ) {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/JackSpade.jpg'}))
} else if (card3.card === 'Queen' && card3.suit === 'spades') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/QueenSpade.jpg'}))
} else if (card3.card === 'King' && card3.suit === 'spades') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/KingSpade.jpg'}))
} else if (card3.card === 'Ace' && card3.suit === 'spades') {
  $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/AceSpade.jpg'}))
} else { 
	console.log("Well Fuck")
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// CARD FOUR //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (card4.card === 'One' && card4.suit === 'clubs') { 
	$('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
} else if (card4.card === 'Two' && card4.suit === 'clubs') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/2Clubs.jpg'}))
} else if (card4.card === 'Three' && card4.suit === 'clubs') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/3Clubs.jpg'}))
} else if (card4.card === 'Four' && card4.suit === 'clubs' ) {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/4Clubs.jpg'}))
} else if (card4.card === 'Five' && card4.suit === 'clubs' ) {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/5Clubs.jpg'}))
} else if (card4.card === 'Six' && card4.suit === 'clubs') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/6Clubs.jpg'}))
} else if (card4.card === 'Seven' && card4.suit === 'clubs') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/7Clubs.jpg'}))
} else if (card4.card === 'Eight' && card4.suit === 'clubs') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/8Clubs.jpg'}))
} else if (card4.card === 'Nine' && card4.suit === 'clubs') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/9Clubs.jpg'}))
} else if (card4.card === 'Ten' && card4.suit === 'clubs') {
 	$('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/10Clubs.jpg'}))
} else if (card4.card ==='Jack' && card4.suit === 'clubs' ) {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/JackClubs.jpg'}))
} else if (card4.card === 'Queen' && card4.suit === 'clubs') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/QueenClubs.jpg'}))
} else if (card4.card === 'King' && card4.suit === 'clubs') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/KingClubs.jpg'}))
} else if (card4.card === 'Ace' && card4.suit === 'clubs') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
} else { 
	console.log("Well Fuck")
}



if (card4.card === 'One' && card4.suit === 'heart') { 
	$('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/AceHeart.jpg'}))
} else if (card4.card === 'Two' && card4.suit === 'heart') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/2Heart.jpg'}))
} else if (card4.card === 'Three' && card4.suit === 'heart') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/3Heart.jpg'}))
} else if (card4.card === 'Four' && card4.suit === 'heart' ) {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/4Heart.jpg'}))
} else if (card4.card === 'Five' && card4.suit === 'heart' ) {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/5Heart.jpg'}))
} else if (card4.card === 'Six' && card4.suit === 'heart') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/6Heart.jpg'}))
} else if (card4.card === 'Seven' && card4.suit === 'heart') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/7Heart.jpg'}))
} else if (card4.card === 'Eight' && card4.suit === 'heart') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/8Heart.jpg'}))
} else if (card4.card === 'Nine' && card4.suit === 'heart') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/9Heart.jpg'}))
} else if (card4.card === 'Ten' && card4.suit === 'heart') {
 	$('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/10Heart.jpg'}))
} else if (card4.card ==='Jack' && card4.suit === 'heart' ) {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/JackHeart.jpg'}))
} else if (card4.card === 'Queen' && card4.suit === 'heart') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/QueenHeart.jpg'}))
} else if (card4.card === 'King' && card4.suit === 'heart') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/KingHeart.jpg'}))
} else if (card4.card === 'Ace' && card4.suit === 'heart') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Heart/AceHeart.jpg'}))
} else { 
	console.log("Well Fuck")
}

if (card4.card === 'One' && card4.suit === 'diamond') { 
	$('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/AceDiamond.jpg'}))
} else if (card4.card === 'Two' && card4.suit === 'diamond') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/2Diamond.jpg'}))
} else if (card4.card === 'Three' && card4.suit === 'diamond') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/3Diamond.jpg'}))
} else if (card4.card === 'Four' && card4.suit === 'diamond' ) {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/4Diamond.jpg'}))
} else if (card4.card === 'Five' && card4.suit === 'diamond' ) {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/5Diamond.jpg'}))
} else if (card4.card === 'Six' && card4.suit === 'diamond') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/6Diamond.jpg'}))
} else if (card4.card === 'Seven' && card4.suit === 'diamond') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/7Diamond.jpg'}))
} else if (card4.card === 'Eight' && card4.suit === 'diamond') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/8Diamond.jpg'}))
} else if (card4.card === 'Nine' && card4.suit === 'diamond') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/9Diamond.jpg'}))
} else if (card4.card === 'Ten' && card4.suit === 'diamond') {
 	$('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/10Diamond.jpg'}))
} else if (card4.card ==='Jack' && card4.suit === 'diamond' ) {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/JackDiamond.jpg'}))
} else if (card4.card === 'Queen' && card4.suit === 'diamond') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/QueenDiamond.jpg'}))
} else if (card4.card === 'King' && card4.suit === 'diamond') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/KingDiamond.jpg'}))
} else if (card4.card === 'Ace' && card4.suit === 'diamond') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Diamonds/AceDiamond.jpg'}))
} else { 
	console.log("Well Fuck")
}




if (card4.card === 'One' && card4.suit === 'spades') { 
	$('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/AceSpade.jpg'}))
} else if (card4.card === 'Two' && card4.suit === 'spades') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/2Spade.jpg'}))
} else if (card4.card === 'Three' && card4.suit === 'spades') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/3Spade.jpg'}))
} else if (card4.card === 'Four' && card4.suit === 'spades' ) {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/4Spade.jpg'}))
} else if (card4.card === 'Five' && card4.suit === 'spades' ) {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/5Spade.jpg'}))
} else if (card4.card === 'Six' && card4.suit === 'spades') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/6Spade.jpg'}))
} else if (card4.card === 'Seven' && card4.suit === 'spades') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/7Spade.jpg'}))
} else if (card4.card === 'Eight' && card4.suit === 'spades') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/8Spade.jpg'}))
} else if (card4.card === 'Nine' && card4.suit === 'spades') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/9Spade.jpg'}))
} else if (card4.card === 'Ten' && card4.suit === 'spades') {
 	$('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/10Spade.jpg'}))
} else if (card4.card ==='Jack' && card4.suit === 'spades' ) {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/JackSpade.jpg'}))
} else if (card4.card === 'Queen' && card4.suit === 'spades') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/QueenSpade.jpg'}))
} else if (card4.card === 'King' && card4.suit === 'spades') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/KingSpade.jpg'}))
} else if (card4.card === 'Ace' && card4.suit === 'spades') {
  $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Spade/AceSpade.jpg'}))
} else { 
	console.log("Well Fuck")
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////




















































































////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// TRASH CODE //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var playerCards = { 
// deck[sortColumns1][sortRow1] , 
// deck[sortColumns2][sortRow2];
// }

// console.log(playerCards);


/////////////////////////////
////////////////////////////
////////////////////////////
//this code is irrelevant
// var card1 = {
// 	value: 10,
// 	name: 'jack'
// };
// console.log(card1);

// var card2 = {
// 	value: 11,
// 	name: 'ace'
// };
// console.log(card2);
// var card3 = {
// 	value: 5,
// 	name: 'five'
// };
// console.log(card3);
// var card4 = {
// 	value: 7,
// 	name: 'seven'
// };
// console.log(card4);




// var playerCardAssign = function(value,value) { 
// 			(card1.value + card4.value);

// 	};

// console.log(playerCardAssign(card1,card2));


// var dealerCardAssign = function(value,value) { 
// 			(card2.value + card3.value);

// 	};

// console.log(playerCardAssign(card3,card4));

// console.log(deck[sortColumns1][sortRow1]);
// console.log(deck[sortColumns2][sortRow2]);
// console.log(deck[sortColumns3][sortRow3]);
// console.log(deck[sortColumns4][sortRow4]);

// if (playerCards > dealerCards) {
//     alert("Player wins");

// 	}else if { (playerCards == dealerCards)
// 			alert('tie');

// 	}else {
//     alert("Dealer Wins");
// }




// if (card1.value === 2) {
//   $('.card1').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/2Clubs.jpg'}))
// }else { 
// 	alert('fuck');
// }


// if (card4.card === 'One' ) { 
// 	$('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
// } else if (card4.card === 'Two') {
//   $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/2Clubs.jpg'}))
// } else if (card4.card === 'Three' ) {
//   $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/3Clubs.jpg'}))
// } else if (card4.card === 'Four' ) {
//   $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/4Clubs.jpg'}))
// } else if (card4.card === 'Five' ) {
//   $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/5Clubs.jpg'}))
// } else if (card4.card === 'Six' ) {
//   $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/6Clubs.jpg'}))
// } else if (card4.card === 'Seven' ) {
//   $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/7Clubs.jpg'}))
// } else if (card4.card === 'Eight' ) {
//   $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/8Clubs.jpg'}))
// } else if (card4.card === 'Nine' ) {
//   $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/9Clubs.jpg'}))
// } else if (card4.card === 'Ten' ) {
//  	$('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/10Clubs.jpg'}))
// } else if (card4.card ==='Jack' ) {
//   $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/JackClubs.jpg'}))
// } else if (card4.card === 'Queen' ) {
//   $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/QueenClubs.jpg'}))
// } else if (card4.card === 'King' ) {
//   $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/KingClubs.jpg'}))
// } else if (card4.card === 'Ace' ) {
//   $('.card4').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
// } else { 
// 	alert("Well Fuck")
// }

// if (card3.card === 'One' ) { 
// 	$('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
// } else if (card3.card === 'Two') {
//   $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/2Clubs.jpg'}))
// } else if (card3.card === 'Three' ) {
//   $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/3Clubs.jpg'}))
// } else if (card3.card === 'Four' ) {
//   $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/4Clubs.jpg'}))
// } else if (card3.card === 'Five' ) {
//   $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/5Clubs.jpg'}))
// } else if (card3.card === 'Six' ) {
//   $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/6Clubs.jpg'}))
// } else if (card3.card === 'Seven' ) {
//   $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/7Clubs.jpg'}))
// } else if (card3.card === 'Eight' ) {
//   $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/8Clubs.jpg'}))
// } else if (card3.card === 'Nine' ) {
//   $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/9Clubs.jpg'}))
// } else if (card3.card === 'Ten' ) {
//  	$('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/10Clubs.jpg'}))
// } else if (card3.card ==='Jack' ) {
//   $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/JackClubs.jpg'}))
// } else if (card3.card === 'Queen' ) {
//   $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/QueenClubs.jpg'}))
// } else if (card3.card === 'King' ) {
//   $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/KingClubs.jpg'}))
// } else if (card3.card === 'Ace' ) {
//   $('.card3').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
// } else { 
// 	alert("Well Fuck")
// }


// if (card2.card === 'One' ) { 
// 	$('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
// } else if (card2.card === 'Two') {
//   $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/2Clubs.jpg'}))
// } else if (card2.card === 'Three' ) {
//   $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/3Clubs.jpg'}))
// } else if (card2.card === 'Four' ) {
//   $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/4Clubs.jpg'}))
// } else if (card2.card === 'Five' ) {
//   $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/5Clubs.jpg'}))
// } else if (card2.card === 'Six' ) {
//   $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/6Clubs.jpg'}))
// } else if (card2.card === 'Seven' ) {
//   $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/7Clubs.jpg'}))
// } else if (card2.card === 'Eight' ) {
//   $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/8Clubs.jpg'}))
// } else if (card2.card === 'Nine' ) {
//   $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/9Clubs.jpg'}))
// } else if (card2.card === 'Ten' ) {
//  	$('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/10Clubs.jpg'}))
// } else if (card2.card ==='Jack' ) {
//   $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/JackClubs.jpg'}))
// } else if (card2.card === 'Queen' ) {
//   $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/QueenClubs.jpg'}))
// } else if (card2.card === 'King' ) {
//   $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/KingClubs.jpg'}))
// } else if (card2.card === 'Ace' ) {
//   $('.card2').append($('<img>',{id:'theImg',src:'Styles/Cards/Clubs/AceClubs.jpg'}))
// } else { 
// // 	console.log("Well Fuck")
// }





















