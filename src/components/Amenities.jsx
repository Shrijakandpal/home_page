import { useState } from "react";
import "./Amenities.css";

import gymIcon from "../assets/icons/gym.png";
import spaIcon from "../assets/icons/spa.png";
import foodIcon from "../assets/icons/food.png";

export default function Amenities() {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTexts, setEditedTexts] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ]);

  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSave = async (index) => {
    try {
      const response = await fetch(`${API_URL}/update-section`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          component: "AmenityCard",
          field: `description-${index}`,
          value: editedTexts[index],
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);
      setEditingIndex(null);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleChange = (index, newText) => {
    const updated = [...editedTexts];
    updated[index] = newText;
    setEditedTexts(updated);
  };

  const renderAmenity = (index, icon, title) => (
    <div className="amenity dark" key={index}>
      <img src={icon} alt={title} />
      <h3>{title}</h3>

      {editingIndex === index ? (
        <textarea
          value={editedTexts[index]}
          onChange={(e) => handleChange(index, e.target.value)}
          className="edit-textarea"
        />
      ) : (
        <p>{editedTexts[index]}</p>
      )}

      <div className="cta-row">
        <a href="#" className="discover-link">Discover More <span>›</span></a>
        {editingIndex === index ? (
          <button className="edit-btn" onClick={() => handleSave(index)}>💾 Save</button>
        ) : (
          <button className="edit-btn" onClick={() => handleEdit(index)}>✏️ Edit</button>
        )}
      </div>
    </div>
  );

  return (
    <section className="amenities-section">
      <div className="amenities-header">
        <div className="header-left">
          <p className="subtitle">INTRODUCING OUR SERVICES</p>
          <h2 className="main-title">Amenities That You Can Enjoy</h2>
        </div>
        <div className="header-right">
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="amenities-grid">
        {/* Row 1 */}
        <div className="amenity light" />
        {renderAmenity(0, gymIcon, "Workout & Yoga Rooms")}

        {/* Row 2 */}
        {renderAmenity(1, spaIcon, "Spa, Massage & Sauna")}
        <div className="amenity light" />

        {/* Row 3 */}
        <div className="amenity light" />
        {renderAmenity(2, foodIcon, "Multiple Cuisines & Beverages")}
      </div>
    </section>
  );
}
