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