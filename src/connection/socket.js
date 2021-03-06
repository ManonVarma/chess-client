import io from 'socket.io-client'

let myId
let initialUserCount
let initialGameCount

const socket = io('localhost:5000')

socket.on('me', ({ id, color }) => {
    myId = id
})

socket.on('user-count', (userCount) => {
    initialUserCount = userCount
})

socket.on('game-count', (gameCount) => {
    initialGameCount = gameCount
})

export { socket, myId, initialUserCount, initialGameCount }