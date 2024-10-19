import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      {selectedItem ? (
        <ItemDetails item={selectedItem} onBack={() => setSelectedItem(null)} />
      ) : (
        <ItemList onSelect={setSelectedItem} />
      )}
    </div>
  );
}

export default App;