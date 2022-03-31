console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                // messageOne.textContent = data.location
                // messageTwo.textContent = data.forecast
                // console.log(data)
                messageOne.textContent='City :   '+data.location.name
                messageTwo.textContent ='Temperature  :  '+ data.current.temperature +'  ℃';
                const path = data.current.weather_icons[0]
                messageFour.setAttribute('src',path)
                messageThree.textContent ='Weather : '+data.current.weather_descriptions[0]

            }
        })
    })
})