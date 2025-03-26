import { useState } from "react";

const countries = ["USA", "Japan", "Italy"];
const usStates = ["Texas", "California", "New York"];

export default function Visit() {
  const [items, setItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [country, setCountry] = useState("USA");
  const [state, setState] = useState("Texas");
  const [place, setPlace] = useState("");

  const addItem = () => {
    if (place.trim()) {
      const entry = `${place} (${state}, ${country})`;
      setItems([...items, entry]);
      setPlace("");
      setCountry("USA");
      setState("Texas");
      setShowPopup(false);
    }
  };

  return (
    <div className="page">
      <h1>Places to Visit</h1>
      <button className="add-btn" onClick={() => setShowPopup(true)}>➕ Add</button>

      {showPopup && (
        <div className="modal">
          <h2>Add Place</h2>

          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            {countries.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>

          {country === "USA" && (
            <select value={state} onChange={(e) => setState(e.target.value)}>
              {usStates.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          )}

          <input
            type="text"
            placeholder="Enter place idea"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />

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
