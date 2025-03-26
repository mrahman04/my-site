import { useState } from "react";

const suggestions = ["Pens", "Notebooks", "Skincare", "Planner"];
const stores = ["Target", "Amazon", "Walmart", "Ulta"];

export default function Buy() {
  const [items, setItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [itemName, setItemName] = useState("");
  const [store, setStore] = useState(stores[0]);

  const addItem = () => {
    if (itemName.trim()) {
      const entry = `${itemName} 🛒 (${store})`;
      setItems([...items, entry]);
      setItemName("");
      setStore(stores[0]);
      setShowPopup(false);
    }
  };

  return (
    <div className="page">
      <h1>Things to Buy</h1>
      <button className="add-btn" onClick={() => setShowPopup(true)}>➕ Add</button>

      {showPopup && (
        <div className="modal">
          <h2>Add Item</h2>

          <input
            type="text"
            placeholder="Enter item"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />

          <select value={store} onChange={(e) => setStore(e.target.value)}>
            {stores.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>

          <div className="btn-group">
            <button onClick={addItem}>Save</button>
            <button className="cancel" onClick={() => setShowPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
