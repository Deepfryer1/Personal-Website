console.log(`Hello World`)

const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  console.log(window.location.origin)
  window.location.href = window.location.origin + '/success.html'
})
