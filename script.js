console.log('Arquivo vinculado!')

let btnToggleTheme = document.querySelector('.toggleTheme')

let body = document.querySelector('body')

//Arrom function: sintaze sofisticada de function
btnToggleTheme.onclick = event => {
  //alternacia de classe no elemento body
  body.classList.toggle('dark-theme')
  iframe.style.cssText = 'filter: invert(90%)'
}
