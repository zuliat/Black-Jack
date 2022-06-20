
 //Blackjack app
    let firstCard =  getRandomCard()

    let secondCard =  getRandomCard()
    let cards = [] //array- ordered list of items
    

    let sum = 0

    let hasBlackJack = false

    let isAlive = false

   let message = ""


   let messageEl = document.getElementById("message-el")
   let sumEl = document.getElementById("sum-el")
   let cardsEl = document.getElementById("cards-el")
   console.log(cardsEl)

   console.log(cards)
   
// object of players
   let player = {
    name: "Zully",
    chips: 200
    

   }


   

   
   

   let playerEL = document.getElementById("player-el")
  playerEL.textContent = player.name + ": $" + player.chips

// create a function ,getrandomCard(), that always return 5
function getRandomCard() {
    
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber>10){ 
        return 10
    }
    else if (randomNumber === 1){
        return 11

    }
    else{
        return randomNumber
    }
    
    
}



   function startGame() {
       let firstCard = getRandomCard()
       let secondCard = getRandomCard()
       cards = [firstCard, secondCard]
       sum = firstCard + secondCard
       isAlive = true
       renderGame()
   }


   

function renderGame(){
    cardsEl.textContent = "Cards: " 

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + " " + sum
    
    if(sum <= 20){

        message = "Do you want to draw a new card?"
        
    }
    else if (sum === 21){
       message ="wohoo! you've got Blackjack!"
       hasBlackJack = true
        
    }
    else{
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message 
}




function newCard(){
    if(isAlive === true && hasBlackJack === false){
        console.log("Draw a new card from the deck")
    let card =  getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards) 
    renderGame()
    }

   
}





// Age limit for entering the club

// let age = 22
// if (age <= 21){
//     console.log("You can not enter the club")
// }
// else{
//     console.log("Welcome!")
// }


// birthday card
// let age = 105
// if(age < 100){
//     console.log("Not Elegible")

// }
// else if(age === 100){
//     console.log("Here is your birthday Card from the King!")
// }
// else{
//     console.log("Not Elegible, you have already gotten one")
// }