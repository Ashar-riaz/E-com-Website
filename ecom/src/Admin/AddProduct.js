// import React, { useState } from 'react';
// import './product.css';
// import axios from "axios";
// import left_arrow from './../icons/left_arrow.png';
// import { useNavigate } from "react-router-dom";


// const AddProduct = () => {
//     const handleRedirect = () => {
//         window.location.href = '/';
//     };
//     const navigate = useNavigate();
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [file, setFile] = useState('');
//     const [price, setPrice] = useState('');
//     const [compare_price, setCompare_price] = useState('');
//     const [message, setMessage] = useState('');

//     const uploadProduct = async () => {
//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('description', description);
//         formData.append('price', price);
//         formData.append('compare_price', compare_price);
//         formData.append('file', file);
//         const responce = await axios.post("http://127.0.0.1:8000/products", formData, {
//             headers: { 'Content-Type': "multipart/form-data" },
//         });

//         if (responce.data.success) {
//             setMessage(responce.data.success);
//             setTimeout(() => {
//                 navigate('/admin/dashboard');
//             }, 2000);

//         }
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await uploadProduct();

//     }

import React, { useState } from 'react';
import './product.css';
import axios from "axios";
import left_arrow from './../icons/left_arrow.png';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const handleRedirect = () => {
        window.location.href = '/';
    };
    
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null); // Change to null
    const [price, setPrice] = useState('');
    const [compare_price, setCompare_price] = useState('');
    const [message, setMessage] = useState('');

    const uploadProduct = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('compare_price', compare_price);
        formData.append('file', file);

        try {
            const response = await axios.post("http://127.0.0.1:8000/products", formData, {
                headers: { 'Content-Type': "multipart/form-data" },
            });

            if (response.data.success) {
                setMessage(response.data.success);
                setTimeout(() => {
                    navigate('/admin/dashboard');
                }, 2000);
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
        <div className='box '>
            <div className="container">
                <span className='heading' onClick={handleRedirect} ><img src={left_arrow} alt="" /> Add Product</span>
            </div>
            <p className="text-warning">{message}</p>
            <div className="container">
                <form action="" onSubmit={handleSubmit}>

                    <div className="mb-3 box-part container">
                        <div className="container">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name='title' placeholder="Short sleeve t-shirt" value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <div className="container">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description" name='description' rows="4" value={description}
                                    onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="box-part mb-3">
                        <div className="container">
                            <span className='text'>MEDIA</span>
                            <div className="d-flex justify-content-center align-items-center box-media mb-3">
                                <div className="d-flex">
                                    <div class="mb-3">
                                        <label htmlFor="image" className="form-label">Default file input example</label>
                                        <input className="form-control" onChange={(e) => setFile(e.target.files[0])} type="file" id="image" name='image' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-part">
                        <div className="container">
                            <span className='text'>Pricing</span>
                            <div className="container">
                                <div className="d-flex flex-row ">
                                    <div className="d-flex flex-column mt-4">
                                        <label htmlFor="price" className="form-label">Price</label> <br />
                                        <input type="text" className="form-control" id="price" name='price' placeholder="RS 0.00" style={{ marginTop: '-29px' }} value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </div>
                                    <div className="d-flex flex-column mt-4 ms-5 mb-4">
                                        <label htmlFor="compare_price" className="form-label">Compare-at price</label><br />
                                        <input type="text" className="form-control" id="compare_price" name='compare_price' placeholder="RS 0.00" style={{ marginTop: '-29px' }} value={compare_price}
                                            onChange={(e) => setCompare_price(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" name="submitButton">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
