// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//create an object with all the images
//create a loop to access object with unicorn images
//loop needs onlclick so when an object is clicked the function is called

//any image with 'inflate an image' class name will be in unicorns variable
let unicorns = document.getElementsByClassName('inflate-an-image')
console.log(unicorns)

//loop using the clickedUnicorns function accessing the 'unicorns' variable images
for (let i = 0; i < unicorns.length; i++) {
    unicorns[i].onclick = clickedUnicorns
}

//create a variable starting at 0 to keep track of the unicorns states
let stables = 0

//create a function that uses the loop
//when an image is clicked it shoud cycle through the images
//use stables variable to keep track of image states

function clickedUnicorns(balloon) {
    let unicorn = balloon.target

    if (unicorn.id == 'harry') {
        stables++ //increasing stable variable by 1 each time anything with the id 'harry' is clicked
        unicorn.src = './images/unicorn-' + stables + '.png' //changes the image based on stables current state
        console.log('harry clicked')
    }
    if (stables > 3) {
        //if stables is more than 3, change back to zero
        stables = 0 //changes stables back to 0 to avoid no image being available
        unicorn.src = './images/unicorn-' + stables + '.png'
        console.log('Harry has a full baloon!') //prints when harry has a full balloon
        alert("This is Harry! Any more and i'll pop!!") //alert stating he's about to pop!
    }

    if (unicorn.id == 'bill') {
        stables++
        unicorn.src = './images/unicorn-' + stables + '.png'
        console.log('bill clicked')
    }
    if (stables > 3) {
        stables = 0
        unicorn.src = './images/unicorn-' + stables + '.png'
        console.log('Bill has a full baloon!')
        alert("This is Bill! Any more and i'll pop!!")
    }
    if (unicorn.id == 'dexter') {
        stables++
        unicorn.src = './images/unicorn-' + stables + '.png'
        console.log('Dexter clicked')
    }
    if (stables > 3) {
        stables = 0
        unicorn.src = './images/unicorn-' + stables + '.png'
        console.log('Bill has a full baloon!')
        alert("This is Dexter! Any more and i'll pop!!")
    }
}