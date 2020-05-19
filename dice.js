function randInt(min, max) {
    let num = Math.random() * (max - min) + min
    return Math.floor(num)
}

let pl1 = randInt(1, 6)
let pl2 = randInt(1, 6)

let dice1 = document.querySelectorAll('img')[0]
let dice2 = document.querySelectorAll('img')[1]

dice1.setAttribute("src", `images/dice${pl1}.png`)
dice2.setAttribute("src", `images/dice${pl2}.png`) 

    
if (pl1 > pl2) {
    let msg = document.querySelector('h1')
    msg.textContent = "Player 1 Won!"
} else if (pl1 < pl2) {
    let msg = document.querySelector('h1')
    msg.textContent = "Player 2 Won!"
} else {
    let msg = document.querySelector('h1')
    msg.textContent = "Draw Game!"
}