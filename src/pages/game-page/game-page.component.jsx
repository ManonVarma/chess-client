import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { socket } from '../../connection/socket'

import ChessBoard from '../../components/chess-board/chess-board'
import Videos from '../../connection/video-chat/videos.component'

import { callAcceptedAction } from '../../redux/action'

import './game-page.style.css'

const GamePage = () => {
    const playerColor = useSelector(state => state.playerColor)
    const callAccepted = useSelector(state => state.callAccepted)
    const callEnded = useSelector(state => state.callEnded)

    const [movesArr, setMovesArr] = useState([])

    const navigate = useNavigate()

    const connectionRef = useRef()

    const dispatch = useDispatch()

    const disconnect = (ev) => {
        socket.off()
        console.log('nikla gaya!!!!');

        return ev.returnValue = 'Are you sure you want to close?';
    }

    window.addEventListener("beforeunload", (ev) => 
    {  
        ev.preventDefault()
        return disconnect(ev)
    })
    window.onload = function() {
        navigate('/', {replace: true})
        window.location.reload()
    }

    useEffect(() => {
        socket.on('opponent-connected', ({ user1, user2 }) => {
            if (document.getElementById('information-note'))
                document.getElementById('information-note').innerHTML = 'Connected!'
            
            const disconnectBtn = document.getElementsByClassName('disconnect-btn')[0]
            if (disconnectBtn)
                disconnectBtn.style.display = 'block'
        })

        socket.off('opponent-disconnected').on('opponent-disconnected', () => {
            if (document.getElementById('information-note'))
                document.getElementById('information-note').innerHTML = 'Opponent Disconnected!'

            console.log('chal na')
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        })
    })

    // window.setInterval(function() {
    //     var elem = document.getElementsByClassName('moves-arr')[0]
    //     if (elem)
    //         elem.scrollTop = elem.scrollHeight
    // }, 500)

    return (
        <div className='game-page'>
            
        {
            movesArr.length > 0?
            <div className='moves-arr' style={{color:'white', marginTop:'20px', maxHeight: '300px', overflowY: 'scroll', padding: '5px'}}>
                    {
                        (
                            <table border='1'>
                        <tr>
                            <td>
                                Color
                            </td>
                            <td>
                                From
                            </td>
                            <td>
                                To
                            </td>
                        </tr>
                        
                        {
                            movesArr?.map(data => (
                                <tr>
                                    {
                                        (data.color === 'w')?(
                                            <td>White</td>
                                        ):(
                                            <td>Black</td>
                                        )
                                    }
                                    <td>{data.from}</td>
                                    <td>{data.to}</td>
                                </tr>  
                            )) 
                        }
                    </table>
                        )
                    }
                    
            </div>
            : null
        }

            <div style={{margin:'0px 40px'}}>
                <div id='searching-opponent' >
                    <div style={{flex:1}}>
                        <p id='information-note'>Searching An Opponent...</p>
                    </div>
                    
                    <div>
                        <button 
                            className='disconnect-btn' 
                            onClick={() => { 
                                socket.emit('disconnected') 
                                navigate('/', {replace: true})
                                window.location.reload()
                            }}
                        >Disconnect</button>
                    </div>
                </div>

                

                <div className='chess-board'>
                    <ChessBoard 
                        playerColor={playerColor} 
                        callAccepted={callAccepted} 
                        callEnded={callEnded} 
                        movesArr={movesArr}
                        setMovesArr={setMovesArr}
                    />
                </div>
            </div>

            
            <div style={{display: 'flex',margin: '0px 40px 10px 40px'}}>
                <Videos connectionRef={connectionRef}/>
            </div>
            
        </div>
    )
}

export default GamePage
