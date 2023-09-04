import { useState } from 'react'
import './App.css'
import data from "./data"
import Categories from './components/Categories';
import Menu from './components/Menu';

function App() {
  const [menuItems, SetMenuItems] = useState(data);
  const allCategories = 
    ['All', ...new Set(data.map((item) => { return item.category; }))]
  return (
    <div>
      <h2>Workshop 2: Food Menu</h2>
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>Our menu</h2>
            <div className='underline'></div>
          </div>
          <Categories allCategories={allCategories}/>
          <Menu items={menuItems}/>
        </section>
      </main>
    </div>
  );
}

export default App
