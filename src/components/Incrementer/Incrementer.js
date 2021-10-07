import React, {useState} from 'react'
import Button from '../Button/Button'

export default function Incrementer() {
  const [counter, setCounter] = useState(0)
  const onClick = () => {
    setCounter(counter+1)
  }
  return (
    <div>
      {counter}
      <Button onClick={onClick}>Increment</Button>
    </div>
  )
}
