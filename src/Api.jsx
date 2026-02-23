import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCrops, setTools } from './redux/slice';

export default function Api() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.auth);

  // Fetch crops
  useEffect(() => {
    async function fetchCrops() {
      try {
        const response = await fetch("http://localhost:3000/get-crops");
        const data = await response.json();
        dispatch(setCrops(data.result || [])); // default empty array
      } catch (err) {
        console.error("Error fetching crops:", err);
      }
    }
    fetchCrops();
  }, [dispatch]);

  // Fetch tools
  useEffect(() => {
    async function fetchTools() {
      try {
        const response = await fetch("http://localhost:3000/get-tools");
        const data = await response.json();
        dispatch(setTools(data.result || [])); // default empty array
      } catch (err) {
        console.error("Error fetching tools:", err);
      }
    }
    fetchTools();
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Crops</h2>
      {selector.crops?.length > 0 ? (
        <ul>
          {selector.crops.map((item, index) => (
            <li key={index} style={{ marginBottom: "15px", listStyle: "none" }}>
              <p><strong>{item.name}</strong></p>
              <p>{item.description}</p>
              <img src={item.image} alt={item.name} width={150} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading crops...</p>
      )}

      <h2>Tools</h2>
      {selector.tools?.length > 0 ? (
        <ul>
          {selector.tools.map((item, index) => (
            <li key={index} style={{ marginBottom: "15px", listStyle: "none" }}>
              <p><strong>{item.name}</strong></p>
              <p>{item.description}</p>
              <img src={item.image} alt={item.name} width={150} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading tools...</p>
      )}
    </div>
  );
}
