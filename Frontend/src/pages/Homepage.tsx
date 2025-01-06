import { useEffect, useState } from 'react';
import { fetchItems } from '../services/api.ts';
import { Item } from '../../../shared/types/item.ts';

export default function HomePage(){
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Test")
    fetchItems().then(setItems).catch(console.error);
  }, [items]);

  return (
    <div className="overflow-x-auto h-full">
      <h2>Home Page</h2>
      <h1>Test</h1>
      <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
      <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
      <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
      <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
      <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
      <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
      <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
      <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
      <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
      <h1>Home Page</h1>
      <ul>
        {items.map((item: Item) => (
          <li>
            <h2>{item.name}</h2>
            <h2>{item.description}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
