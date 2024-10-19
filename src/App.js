import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDetailsPage from './components/ItemDetailsPage';

function App() {
  const navigate = useNavigate();
  const handleItemSelected = (item) => {
    navigate(`/items/${item.guid}`);
  };

  return (
    <Routes>
      <Route path="/" element={<ItemList onSelect={handleItemSelected} />} />
      <Route path="/items/:id" element={<ItemDetailsPage />} />
    </Routes>
  );
}

export default App;