import { useState } from "react";
import './App.css'
import List from './components/List'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)
  const clearAll = () =>{
    setPeople([])
  }
  return (
    <div>
      <h1>Workshop1: Birthday List</h1>
      <main>
        <section className='container'>
          <h3>{people.length} Birthdays today</h3>
          <List people = {people} />
          <button onClick={clearAll}>Clear All</button>
        </section>
      </main>
    </div>
  )
}

export default App