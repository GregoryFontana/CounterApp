 //1. Create a new variable called 'total' and assign it the div with the id of 'total'
const total = document.getElementById('#total')

const add = document.getElementById('#add')

const subtract = document.getElementById('#subtract')

const multi2 = document.getElementById('#mult-2')

const div2 = document.getElementById('#div-2')

const multi5 = document.getElementById('#mult-5')

const div5 = document.getElementById('#div-5')


//2. Create Six Functions (add, subtract, multiplyBy2, divideby5, multiplyBy5, divideBy5)
//update the value of the total variable textContent
            // use an alert to alert the user
function add() {
        total.textContent++
        return Number(total) 
        
}
function subtract() {
        total.textContent--
        return Number(total)
}
function multi2() {
        total.textContent *= 2
        return Number(total)
}
function div2() {
        total.textContent /= 2
        return Number(total)
}
function multi5() {
        total.textContent *= 5
        return Number(total)
}
function div5() {
        total.textContent /= 5
        return Number(total)
}

//3. Attach Functions to Buttons
add.addEventListener('click', add)

subtract.addEventListener('click', subtract)

multi2.addEventListener('click', multiply2)

div2.addEventListener('click', divide2)

multi5.addEventListener('click', multiply5)

div5.addEventListener('click', divide5)



    

