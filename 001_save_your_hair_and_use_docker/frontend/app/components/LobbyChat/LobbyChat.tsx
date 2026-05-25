'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import EnterNickname from './EnterNickname'
import Message from './Message'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const LiveLobby = () => {
  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/lobby/ws')

    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data])
    }

    return () => ws.close()
  }, [])

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

        {/* <EnterNickname /> */}

        <div>
          <Message key={3} remitent='Ajoiiii' message='asdasdasdasd' />
          <Message key={1} remitent='Papu' message='Holaaaa' />
          <Message key={2} remitent='papu' message='asdasdasdasd' />
        </div>
      </div>

      <div className='flex gap-1'>
        <div className='min-w-20 pl-1 bg-gray-950  border-4 border-emerald-600 border-dotted text-emerald-500 font-courier '>/guest</div>
        <Input id='lobby-input' className='rounded-none focus-visible:ring-0 border-3 border-outset lobby_input-border' placeholder='Say something to the lobby' />
        <Button className='rounded-none bg-emerald-700 cursor-pointer border-4 border-outset lobby_button-border '>SEND</Button>
      </div>
    </section>
    // <ul>
    //   {messages.map((m, i) => (
    //     <li key={i}>{m}</li>
    //   ))}
    // </ul>
  )
}

export default LiveLobby 