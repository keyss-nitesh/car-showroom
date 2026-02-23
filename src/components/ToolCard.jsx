import React from 'react';

function ToolCard({ tool, onBuyNow }) {
  const shortDescription =
    tool.description.length > 100
      ? tool.description.slice(0, 100) + "..."
      : tool.description;
  const handleBuyNow = () => {
    if (onBuyNow) onBuyNow();
  };

  return (
    <div className="card" style={{ padding: "10px", border: "1px solid #ccc", margin: "10px", borderRadius: "8px" }}>
      <img src={tool.image} alt={tool.name} width={150} style={{ borderRadius: "5px" }} />
      <h4>{tool.name}</h4>
      <p>{shortDescription}</p>
      <p>Price: {tool.price}</p>
      <button onClick={handleBuyNow} style={{ marginTop: "10px" }}>Buy Now</button>
    </div>
  );
}

export default ToolCard;
