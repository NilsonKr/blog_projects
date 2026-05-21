'use client'

import { useEffect, useState } from 'react'

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
    <ul>
      {messages.map((m, i) => (
        <li key={i}>{m}</li>
      ))}
    </ul>
  )
}

export default LiveLobby 