const form = document.querySelector('.form')
const p = document.querySelector('.pts')

const correcao = ['B','B','A','B','C','B']

form.addEventListener('submit', event =>{
    event.preventDefault()
    let score = 0 

const questions = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value,
    form.inputQuestion6.value
]

questions.forEach((quest, index) =>{
    if(quest == correcao[index]){
        score += 25
    }
})

if(score == 150){
    p.innerHTML = `Parabéns você acertou todas as questões.`
    p.style.color="green"
} else if(score == 0){
    p.innerHTML = `Infelizmente você errou todas as questões, tente novamente`
    p.style.color="red"
} else {
    p.innerHTML = `Sua pontuação foi de ${score} pontos.`
    
}

})