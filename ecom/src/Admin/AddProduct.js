import React, { useState } from 'react';
import './product.css';
import axios from "axios";
import left_arrow from './../icons/left_arrow.png';
import { useNavigate } from "react-router-dom";
import NavbarAdmin from './NavbarAdmin';

const AddProduct = () => {
    const handleRedirect = () => {
        window.location.href = '/admin/dashboard';
    };

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null); // Change to null
    const [price, setPrice] = useState('');
    const [compare_price, setCompare_price] = useState('');
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState('');

    const uploadProduct = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('compare_price', compare_price);
        formData.append('file', file);
        formData.append('category', category);

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/addproducts", formData, {
                headers: { 'Content-Type': "multipart/form-data" },
            });

            if (response.data.success) {
                setMessage(response.data.success);
                setTimeout(() => {
                    navigate('/admin/dashboard');
                }, 1000);
            }
        } catch (error) {
            console.error('Error creating product:', error);
            setMessage('Error creating product. Please try again.');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await uploadProduct();
    }
    return (
        <>
            <NavbarAdmin />
            <span className='heading'> Add Product</span>
            <p className="text-warning">{message}</p>
            <div className="container">
                <form action="" onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' placeholder="Short sleeve t-shirt" value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" name='description' rows="4" value={description}
                            onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} id="image" name='image' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price" name='price' placeholder="RS 0.00" value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="compare_price" className="form-label">Compare Price</label>
                        <input type="number" className="form-control" id="compare_price" name='compare_price' placeholder="RS 0.00" value={compare_price}
                            onChange={(e) => setCompare_price(e.target.value)} />
                    </div>
                    <div className="col-sm-3 mb-3">
                        <label className="form-label" htmlFor="specificSizeSelect">Category</label>
                        <select
                            className="form-select"
                            id="specificSizeSelect"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="" disabled selected>Choose...</option>
                            <option value="MEN">MEN</option>
                            <option value="WOMEN">WOMEN</option>
                        </select>
                    </div>

                    <button type="submit" name="submitButton" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddProduct;
