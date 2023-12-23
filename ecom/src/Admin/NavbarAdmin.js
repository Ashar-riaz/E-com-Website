import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NavbarAdmin() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">Admin</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                            <a class="nav-link text-white" href="#">Features</a>
                            <a class="nav-link text-white" href="#">Pricing</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
