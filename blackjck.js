let dealerValue=0
let dealerCards=[]
let playerValue=0
let playerCards=[]

let cards=['A',2,3,4,5,6,7,8,9,10,'J','Q','K']

const getCardsValue=(card)=>{
if(card==='J' || card==='K' || card==='Q'){
return 10
}
return parseInt(card)
}
const calculateScore=(cards)=>{
let score=0
let aceCount=0
cards.forEach(card=>{
if(card==='A'){
  aceCount++
  score+=11
  
}else
score+=getCardsValue(card)
})
if(score>21 && aceCount>0){
while(aceCount!==0){
	score-=10
  aceCount--
  if(score<=21)
  break
}
}
return score
}

const drawCard=()=>{
	return cards[Math.ceil(Math.random()*13)]
}

let isGameOn=true

function initializeCards(){
	// dealer cards
  let card=drawCard()
  dealerCards.push(card)
  card=drawCard()
  dealerCards.push(card)
  
  //player cards
   card=drawCard()
  playerCards.push(card)
  card=drawCard()
  playerCards.push(card)
  
  dealerScore=calculateScore(dealerCards)
  playerScore=calculateScore(playerCards)
}
initializeCards()

while(true){
	let dealerHand=dealerCards.slice(1).reduce((acc,val)=>acc+val+',','')
  let playerHand=playerCards.reduce((acc,val)=>acc+val+',','')
  
  const input=prompt(`dealer's hand: ${dealerHand}\n
  										player's hand: ${playerHand}\n
  										You want to HIT or SHOW	`)
  if(input.toUpperCase() === 'HIT'){
  let card=drawCard()
  playerCards.push(card)
   playerScore=calculateScore(playerCards)
  }else{
  	while(dealerScore<=19){
    	let card=drawCard()
  		dealerCards.push(card)
   		dealerScore=calculateScore(dealerCards)
    }
     dealerHand=dealerCards.reduce((acc,val)=>acc+val+',','')
   playerHand=playerCards.reduce((acc,val)=>acc+val+',','')
   if(dealerScore<21 && dealerScore>=playerScore){
   alert(`dealer's hand: ${dealerHand}\n
  										player's hand: ${playerHand}\n`+"Dealer Wins")
   break
   }else{
    alert(`dealer's hand: ${dealerHand}\n
  										player's hand: ${playerHand}\n`+"Player Wins")
   break
   }
    
  }
  	
  if(playerScore>21){
  	alert(`Player Busted: ${playerScore}\nDealer wins!!`)
    break
  }
}








