let example2Button = document.getElementById('example2');
example2Button.onclick = function() {
    alert("niice to meet u!!");
}

let example3Button = document.getElementById('example3')
example3Button.addEventListener('click', function() {
    alert("bye <3");
})


example3Button.addEventListener('click', function() {
    alert("see u next time <3");
})

let example4Button = document.getElementById('example4')
example4Button.addEventListener('click', function() {
    example4Button.textContent = "nice to meet u <3"
})

let example5Div = document.getElementById('example5')
example5Div.addEventListener('click', function() {
   alert(example5Div.textContent.length)
})

let num = 10;
let h1 = document.querySelector('h1')
let resetButton = document.getElementById('reset')
resetButton.addEventListener('click', function() {
  h1.textContent = 0
})

// let num = 15
// let h2 = document.querySelector('h2')
// let resetButton

let increaseButton = document.getElementById('increase')
increaseButton.addEventListener('click', function(){
    num = num + 1
    h1.textContent = num;
    // num = num + 1;
    // num += 1;
    // num++
})

let decreaseButton = document.getElementById('decrease')
decreaseButton.addEventListener('click', function() {
    num = num - 1;
    h1.textContent = num
})

let example6Button = document.getElementById('example6')
example6Button.addEventListener('click', function() {
    example6Button.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
})

let example7Button = document.getElementById('example7')
example7Button.addEventListener('click', function() {
    // example7Button.remove()
    example7Button.textContent = ""
})