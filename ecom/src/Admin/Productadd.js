import React, { useState } from 'react';

const YourComponent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    price: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data posted successfully');
      } else {
        console.error('Failed to post data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleChange} />

      <label>Description:</label>
      <textarea name="description" value={formData.description} onChange={handleChange} />

      <label>Image:</label>
      <input type="text" name="image" value={formData.image} onChange={handleChange} />

      <label>Price:</label>
      <input type="number" name="price" value={formData.price} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;
