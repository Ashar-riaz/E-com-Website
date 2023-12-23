import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState();
  const fetchProducts = async () => {
    try {
      console.log('Fetching data...');
      const response = await axios.get('http://127.0.0.1:8000/api/aaproducts');
      setData(response.data);
      console.log(setData.file);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('Error fetching data. Please try again.');
      setLoading(false);
    }
  };
  const handleEditClick = (productId) => {
    setSelectedProductId(productId);
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
  async function deletedata(id) {
    let result = await fetch("http://127.0.0.1:8000/api/products/" + id, {
      method: 'DELETE'
    })
    result = await result.json();
    fetchProducts();
  }
  const addproduct = () => {
            window.location.href = '/admin/addproduct';
        };

  return (
    <>
      <NavbarAdmin />
        <h1>List OF Product</h1>
      <div className="container">
        <div className="d-flex justify-content-end align-items-center">
          <button type="button" class="btn btn-success" onClick={addproduct}>Add Product</button>
      </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Compare Price</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.compare_price || '-'}</td>
                <td>
                  <img width="50" src={`http://127.0.0.1:8000/${item.file}`} alt={item.title} />
                </td>
                <td>{item.category}</td>
                <td><Link to={"edit/" + item.id}><button
                  type="button"
                  className="btn btn-warning"
                >
                  EDIT
                </button>
                </Link>
                </td>
                <td>
                  <button type="button" class="btn btn-danger ms-2" onClick={() => { deletedata(item.id) }}>DEL</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=""></div>
    </>
  );
}
