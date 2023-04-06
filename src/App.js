import React, {useEffect, useState} from "react"
import ListPage from "./containers/ListPage";
import { Routes, Route } from 'react-router-dom'
import ItemPage from "./containers/ItemPage";

const App = () => {
  const [items, setItems] = useState([])

  return (
      <Routes>
        <Route path="/" element={<ListPage items={items} setItems={setItems}/>} exact />
        <Route path="/:id" element={<ItemPage items={items} setItems={setItems}/>} exact />
      </Routes>
    
  );
}

export default App;
