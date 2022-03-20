const messages = [
    "Pablo", 
    "Daniel", 
    "Diego", 
    "Laura", 
    "paulo", 
    "Cris"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    return console.log(message);
}

module.exports = { randomMsg };