import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      console.log('Fetching data...');
      const response = await axios.get('http://127.0.0.1:8000/products');

      // if (!Array.isArray(response.data)) {
      //   throw new Error('Data is not an array');
      // }

      setData(response.data);
      setLoading(false);
      console.log('Data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('Error fetching data. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <div>
      <h1>Data from Database</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Title:</strong> {item.title}
            <br />
            <strong>Description:</strong> {item.description}
            {/* Include additional fields as needed */}
            <strong>Price:</strong> {item.price}
            {item.compare_price && (
              <>
                <br />
                <strong>Compare Price:</strong> {item.compare_price}
              </>
            )}
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
