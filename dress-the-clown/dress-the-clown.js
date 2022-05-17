// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')
    //WRITE A FUNCTION THAT CHANGES THE SRC OF BODY PARTS
    //CREATE VARIABLES ACCESSING EACH BODY PARTS ID
    //CREATE VARIABLES SETTING EACH BODY PART INDEX AT 0
    //WRITE ARROW FUNCTION TO CYCLE THROUGH ITEMS USING UP,DOWN,LEFT,RIGHT

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

//index variables starting at 0 that will be used in functions
let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0
let clothingIndex = 0

//make a function that swaps between clothing using index
function clothingIndexChange() {
    if (clothingIndex == 0) {
        headIndex++
    }
    if (clothingIndex == 1) {
        bodyIndex++
    }
    if (clothingIndex == 2) {
        shoesIndex++
    }
}

//make a function to cycle specific elements
//using the index variables
//using concat strings to change image
//resets index if greater or less than the amount of images available
function changeClothes() {
    if (headIndex > 5) {
        headIndex = 0
    }
    if (headIndex < 0) {
        headIndex = 5
    }
    if (bodyIndex > 5) {
        bodyIndex = 0
    }
    if (bodyIndex < 0) {
        bodyIndex = 5
    }
    if (shoesIndex > 5) {
        shoesIndex = 0
    }
    if (shoesIndex < 0) {
        shoesIndex = 5
    }
    if (clothingIndex > 2) {
        clothingIndex = 0
    }
    if (clothingIndex < 0) {
        clothingIndex = 2
    }
    head.src = './images/head' + headIndex + '.png'
    body.src = './images/body' + bodyIndex + '.png'
    shoes.src = './images/shoes' + shoesIndex + '.png'
}

//make a function that uses arrow keys
//calls the functions when pressed
//allows to cycle through different items of clothing
//console.log each key to test if its working

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            clothingIndex--
            clothingIndexChange()
            changeClothes()
            console.log('Up pushed')
            break
        case 'ArrowDown':
            clothingIndex++
            clothingIndexChange()
            changeClothes()
            console.log('Down pushed')
            break
        case 'ArrowLeft':
            clothingIndexChange()
            changeClothes()
            console.log('left pushed')
            break
        case 'ArrowRight':
            clothingIndexChange()
            changeClothes()
            console.log('right pushed')
            break
    }
})