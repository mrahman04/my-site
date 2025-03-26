import { useState } from "react";

const cities = ["Dallas", "Plano", "Irving", "Frisco", "Arlington"];
const emojis = ["🍕", "🍣", "🌮", "🍔", "🥗", "🍜"];

export default function Eat() {
  const [items, setItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [restaurant, setRestaurant] = useState("");
  const [food, setFood] = useState("");
  const [emoji, setEmoji] = useState(emojis[0]);
  const [city, setCity] = useState(cities[0]);

  const addItem = () => {
    if (restaurant.trim()) {
      const entry = `${emoji} ${restaurant} — ${food} (${city})`;
      setItems([...items, entry]);
      setRestaurant("");
      setFood("");
      setEmoji(emojis[0]);
      setCity(cities[0]);
      setShowPopup(false);
    }
  };

  return (
    <div className="page">
      <h1>Places to Eat</h1>
      <button className="add-btn" onClick={() => setShowPopup(true)}>➕ Add</button>

      {showPopup && (
        <div className="modal">
          <h2>Add Restaurant</h2>
          <input
            type="text"
            placeholder="Restaurant Name"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
          />
          <input
            type="text"
            placeholder="Food Items"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />

          <div className="row">
            <select value={emoji} onChange={(e) => setEmoji(e.target.value)}>
              {emojis.map((em, i) => (
                <option key={i} value={em}>{em}</option>
              ))}
            </select>

            <select value={city} onChange={(e) => setCity(e.target.value)}>
              {cities.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
          </div>

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
