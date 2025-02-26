import { useState } from 'react'
import { Button } from '@/components/ui/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Button onClick={() => setCount((count) => count + (Math.random() >= 0.5 ? 1 : -1))}>count is {count}</Button>
    </>
  )
}

export default App
