function Card(number, suit) {
    
    this.suit = function(suit){
        switch(suit) {
            case 1:
              number = "Diamond";
              break;
            case 2:
              number = "Club";
              break;
            case 3:
              number = "Heart"
            break;
            case 3:
                number = "Spade"
                break;
            default:
              suit = suit;
          }
          return suit;
    };

    this.name = function(number){
        switch(number) {
            case 11:
              number = "Jack";
              break;
            case 12:
              number = "Queen";
              break;
            case 13:
              number = "King"
            break;
            default:
              number = number;
          }
          return number;
    };
    return {

    };
}
function createDeck(){
    let deck = [];
    for(let i = 1; i =< 13; i++){
        for (let j = 1; j =< 4; j++){
            deck.push(Card(i, j));
        }
    }
    return deck;
}

function mixDeck(array){
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
            // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
    
        
}

function startGame(){


}
