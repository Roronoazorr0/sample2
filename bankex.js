let balance=100

function deposit(amount){
  balance+=amount
}

function withdraw(amount){
  balance-=amount
}

while(true){
  console.log("current balance is:"+balance+"\nChoose an option")
  console.log('1. Deposit')
  console.log('2. Withdraw')
  console.log('3. Show balance')
  console.log('4. Exit')
  
  let input=parseInt(prompt("Choose an option"))
  
  if(input==1 || input==2){
  let amount = parseInt(prompt("Enter amount"))
  if(input==1){
  deposit(amount)
  }else{
  withdraw(amount)
  }
  }else if(input===3){
  console.log('balance: '+balance)
  }else{
  break
  }
  
}