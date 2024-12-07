const rock = 0
const paper = 1
const scissors = 2
let userScore = 0
let pcScore = 0
let rounds = 0

function getComputerChoice(){
    const pcChoice = Math.floor(Math.random() * 3) + 1
    switch(pcChoice){
        case 1:
            return rock
        case 2:
            return paper
        case 3:
            return scissors
    }
}

function getUserChoice(){
    let userChoice
    do{
        userChoice = String(prompt('Choose Rock, Paper or Scissors')).toLowerCase()
    }
    while(userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors')
    switch(userChoice){
        case 'rock':
            return rock
        case 'paper':
            return paper
        case 'scissors':
            return scissors
}
}

function playRound(){
    const pcChoice = getComputerChoice()
    const userChoice = getUserChoice()
    const roundResults = (pcChoice - userChoice + 3)%3
    function textResults(variable){
        if(variable > 1){
            return 'scissors'
        } else if(variable < 1){
            return 'rock'
        } else {
            return 'paper'
        }
    }
    let textUser = textResults(userChoice)
    let textPc = textResults(pcChoice)
    console.log(roundResults)
    switch(roundResults){
        case 0:
            rounds++
            return `Draw! Round ${rounds}/5`
        case 1:
            rounds++
            pcScore++
            return `You lose! ${textPc} beats ${textUser}. Round ${rounds}/5`
        case 2:
            rounds++
            userScore++
            return `You win! ${textUser} beats ${textPc}. Round ${rounds}/5`
    }
}

function fullGame(){
    while(rounds < 5){
        let roundPlayed= playRound()
        alert(roundPlayed)
    }
    if(userScore > pcScore){
        alert('End of Game. You win!')
    } else if (userScore < pcScore){
        alert('End of Game. You lose!')
    } else {
        alert('End of Game. Draw!')
    }
}



fullGame()