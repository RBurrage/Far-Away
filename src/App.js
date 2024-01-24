import React, { useState } from 'react';
import './index.css';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
export default App;

const Logo = () => {
  return <h1>🌴 Far Away 👜</h1>
}

const Form = () => {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!description) return;

    const newItem = {description, quantity, packed: false, id: Date.now()}
    console.log(newItem); // /Get data from form into packing list -- can't be done with props

    setDescription('');
    setQuantity(1);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="add-form">

      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num =>
          <option value={num} key={num}>
            {num}
          </option>)}
      </select>

      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)} />

      <button>
        Add
      </button>

    </form>
  )
}

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

const Stats = () => {
  return (
    <footer className="stats">
      <em>
        💼 You have X items on your list, and you already packed X(X%).
      </em>
    </footer>
  )
}

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}