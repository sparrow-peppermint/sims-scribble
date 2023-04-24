import { Routes, Route } from 'react-router-dom'
import { socket } from '../socket'
import Display from './Display'
import Draw from './Draw'
import Header from './Header'
import Home from './Home'
import Start from './Start'
import Pass from './Pass'
import Write from './Write'
import { useEffect, useState } from 'react'

interface Message {
  text: string
}

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [messages, setMessages] = useState([] as Message[])


  useEffect(() => {

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value: Message) {
      setMessages(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-teal">
      <p>Is Connected: {isConnected ? 'connected' : 'disconnected'}</p>
      <button onClick={() => {
        console.log('clicked');
        socket.connect()
      }}>Connect</button>
      <Header />

      <div className="flex flex-col mx-48">
        <Routes>
          <Route path="/start" element={<Start />} />
          <Route path="/pass/:id" element={<Pass />} />
          <Route path="/draw/:id" element={<Draw />} />
          <Route path="/write/:id" element={<Write />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
