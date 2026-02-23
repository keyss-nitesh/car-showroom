import React from 'react';

function CropCard({ crop, onViewMore }) {
  const shortDescription =
    crop.description.length > 100
      ? crop.description.slice(0, 100) + "..."
      : crop.description;

  const handleViewMore = () => {
    if (onViewMore) onViewMore(); // Call the passed function to dispatch and navigate
  };

  return (
    <div className="card" style={{ padding: "10px", border: "1px solid #ccc", margin: "10px", borderRadius: "8px" }}>
      <img src={crop.image} alt={crop.name} width={150} style={{ borderRadius: "5px" }} />
      <h4>{crop.name}</h4>
      <p>{shortDescription}</p>
      <button onClick={handleViewMore} style={{ marginTop: "10px" }}>View More</button>
    </div>
  );
}

export default CropCard;