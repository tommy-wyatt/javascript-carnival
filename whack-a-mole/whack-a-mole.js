// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//find a way to refrence to all the cells in the table
let boardArr = document.getElementsByTagName('TD')
console.log(boardArr)

//create a function that uses the cells and puts a mole into a random
//this function needs to use the stored cell information in boardArr
//needs to use the mole image

function randomMole() {
    let randomIndex = Math.floor(Math.random() * 24)
    let randCell = boardArr[randomIndex]
    let mole = document.createElement('img')
    mole.classList.add('mole')
    mole.src = 'mole.PNG'
    mole.id = 'whack'
    mole.onclick = whackedMole
    randCell.appendChild(mole)
    mole.style.width = '70px'
    mole.style.height = '70px'
}

randomMole()

//function for when clicking on the mole uses the above function
//when mole is clicked should move to another cell
//should play audio
function whackedMole() {
    let mole = document.getElementById('whack')
    mole.remove()
    randomMole()
    let audio = new Audio()
    audio.src = 'whack-audio.wav'
    audio.play()
    console.log('mole whacked!')
}