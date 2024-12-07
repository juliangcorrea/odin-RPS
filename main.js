const rock = 0
const paper = 1
const scissors = 2

function getComputerChoice(){
    const pcChoice = Math.floor(Math.random()*(Math.floor(1) - Math.ceil(4)) + Math.ceil(4))
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
        userChoice = prompt('Choose Rock, Paper or Scissors').toLocaleLowerCase()
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
    const roundResults = (pcChoice - userChoice)%3
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
    switch(roundResults){
        case 0:
            return `Draw! Round ${rounds}/5`
        case 1:
            pcScore++
            return `You lose! ${textPc} beats ${textUser}. Round ${rounds}/5`
        case 2:
            userScore++
            return `You win! ${textUser} beats ${textPc}. Round ${rounds}/5`
    }
}

function fullGame(){
    const userScore = 0
    const pcScore = 0
    const rounds = 0
    while(rounds < 5){
        let roundPlayed= playRound()
        rounds++
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