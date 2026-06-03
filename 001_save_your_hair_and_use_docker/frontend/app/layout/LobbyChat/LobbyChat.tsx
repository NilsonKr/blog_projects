'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import EnterNickname from '@components/LobbyChat/EnterNickname'
import Message from '@components/LobbyChat/Message'
import ChatInput from '@components/LobbyChat/ChatInput'

import { MessageType } from '@/app/types'

const LiveLobby = () => {
  const [connection, setConnection] = useState<WebSocket>()

  const [nickName, setNickname] = useState<string>('')
  const [messages, setMessages] = useState<MessageType[]>([])

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/lobby/ws')

    ws.onmessage = (event: MessageEvent<string>) => {
      const data: MessageType = JSON.parse(event.data)
      setMessages((prev) => [...prev, data])
    }

    setConnection(ws)

    return () => ws.close()
  }, [])


  const handleSetNickname = (nickName: string) => {
    setNickname(nickName)
  }

  const sendMessage = (msg: string) => {
    const newMsg = { name: nickName, msg }

    setMessages(prev => [...prev, { ...newMsg, created_at: new Date().toString() }])
    connection?.send(JSON.stringify(newMsg))
  }

  return (
    <section className='h-80'>
      <div className='h-[90%] bg-black'>
        <div className=' flex px-4 py-2 justify-between items-center border-b border-b-gray-500 text-teal-300 font-courier'>
          <h2> # Lobby chat</h2>
          <Image
            src='/online.gif'
            alt='Online lobby chat'
            width={80}
            height={15}
            className='max-h-8'
          />
        </div>

        {!nickName ?
          <EnterNickname handleSetNickname={handleSetNickname} />
          :
          <ul>
            {messages.map((msg, idx) => (
              <Message key={idx} remitent={msg.name} message={msg.msg} date={msg.created_at} />
            ))}
          </ul>
        }
      </div>

      <ChatInput nickName={nickName} sendMessage={sendMessage} />
    </section>
  )
}

export default LiveLobby 