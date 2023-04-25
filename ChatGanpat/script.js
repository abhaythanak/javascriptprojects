const API_KEY = "";
const submitButton = document.querySelector("#submit")
const OutputElement = document.querySelector("#output")
const InputElement = document.querySelector("input")
const HistoryElement = document.querySelector(".history")
const ButtonElement = document.querySelector("#button")


function changeInput(value) {
    const inputElement = document.querySelector("input")
    inputElement.value = value
}

async function getMessage() {
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify ({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: "Hello!"}],
            max_tokens: 100
        })
    }
    try {
        const response = await  fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        OutputElement.textContent = data.choices[0].message.content
        if (data.choices[0].message.content && InputElement.value) {
            const pElement = document.createElement('p')
            pElement.textContent = InputElement.value

            pElement.addEventListener('click', () => changeInput(pElement.textContent))

            HistoryElement.append(pElement)
        }
    
    } catch (error) {
        console.error(err)
    }
}

submitButton.addEventListener('click', getMessage)

function clearInput () {
    InputElement.value = ''
}

ButtonElement.addEventListener('click', clearInput)