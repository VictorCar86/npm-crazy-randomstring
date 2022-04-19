const newMessages = [
    "Pedro",
    "Laura",
    "Sofía",
    "María",
    "Juanda",
    "Pablo",
    "Alfredo",
    "Andrea",
    "Fernando"
];

const randomMsg = () => {
    const message = newMessages[Math.floor(Math.random() * newMessages.length)]
    console.log(message)
}

module.exports = { randomMsg };