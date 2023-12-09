import React from 'react';
import t_shirt from "./../picture/t_shirt_banner.png";
import pic1 from "./../picture/t-shirt/1.png";
import Nav from '../components/NavBar/Nav';
import './t_shirt.css';

export default function T_shirt() {
    return (
        <>
            <Nav />
            <div>
                <img src={t_shirt} alt="" style={{ width: '100%', height: '800px' }} />
            </div>
            <div className="container">

                <div className="card pic-box mt-5" style={{width: "18rem;"}}>
                    <img src={pic1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>




            </div>
        </>
    )
}
