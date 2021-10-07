import './App.css';
import {useState} from 'react'
import { Label, Button } from './components'

function App() {
  const [counter, setCounter] = useState(0)
  const [names, setNames] = useState(['Nick', 'Anna', 'Tamara'])
  const [newName, setNewName] = useState('')

  // controls input value
  const updateNewName = (e) => {
    setNewName(e.target.value)
  }

  // adds newName to names
  const addName = () => {
    setNames([...names, newName])
    setNewName('')
  }

  return (
    <div className="App">
      <Label label={counter}/>
      <Button onClick={()=> setCounter(counter + 1)} >Click Me</Button>
      {names.map(name => {
        return <div>{name}</div>
      })}
      <input
        placeholder="new name"
        type="text"
        onChange={updateNewName}
        value={newName}>
      </input>
      <button onClick={addName}>Submit</button>
    </div>
  )
}

export default App;
