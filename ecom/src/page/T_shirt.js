import React, { useEffect, useState } from 'react';
import t_shirt from "./../picture/t_shirt_banner.png";
import pic1 from "./../picture/t-shirt/1.png";
import Nav from '../components/NavBar/Nav';
import './t_shirt.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function T_shirt() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      useEffect(() => {
        fetchProducts();
      }, []);
    return (
        <>
            <Nav />
            <div>
                <img src={t_shirt} alt="" style={{ width: '100%', height: '800px' }} />
            </div>
            <div className="d-flex flex-row flex-wrap container ">
            {data.map((item) => (
                <div className="card pic-box mt-5 ms-3" style={{width: "18rem;"}}>
                    <img src={`http://127.0.0.1:8000/${item.file}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">{item.price} <del>{item.compare_price}</del></p>
                        <a href="#" className="btn btn-primary">Add to chart</a>
                    </div>
                </div>
            ))}



            </div>
        </>
    )
}
