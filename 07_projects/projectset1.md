# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```JavaScript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function(button){
  console.log(button);
  button.addEventListener("click", function(event){
    console.log(event);
    console.log(event.target);
    if(event.target.id === "grey"){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === "white"){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === "blue"){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === "yellow"){
      body.style.backgroundColor = event.target.id;
    }
  })
})

```

## Project 2

```JavaScript
const form = document.querySelector('form')

form.addEventListener('submit', function(event){
  event.preventDefault

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please enter a valid height`
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please enter a valid weight"
  }
  else {
    const bmi = weight / ((height*height)/1000).toFixed(2)
    const reference = null;
    if(bmi < 18.6){
      reference = "Under Weight"
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
      reference = "Normal Range"
    }
    else{
      reference = "Overweight"
    }
    results.innerHTML = `<span>${bmi}</span>`;
    results.innerHTML = `<span>${reference}</span>`;
  }

})
```

## Project 3

```JavaScript
const clock = document.getElementById('clock')

setInterval(function(){
  const date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

## Project 4

```JavaScript
let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const input = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(event){
    event.preventDefault()
    const guess = parseInt(input.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }
  else if(guess < 1){
    alert('Please enter a number greater than 0')
  }
  else if(guess > 100){
    alert('Please enter a number less than or equal to 100')
  }
  else {
    prevGuess.push(guess)
    if(numGuess === 11){
      updateGuess(guess)
      displayMsg(`Game Over! Random number was ${random}`)
      endGame()
    }
    else {
      updateGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === random){
    displayMsg(`You guessed it right`)
    endGame()
  }
  else if(guess < random){
    displayMsg(`Number is TOO low`)
  }
  else {
    displayMsg(`Number is TOO high`)
  }
}

function updateGuess(guess){
  input.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMsg(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  input.value = ''
  input.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">Start new game</h2>';
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(event){
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    input.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  })
}

```