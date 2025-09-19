import React from 'react'

function Footer() {
    return (
        <div>
            {/* Remove the container if you want to extend the Footer to full width. */}
            <div className="container my-5">
                {/* Footer */}
                <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1' }}>
                    {/* Section: Social media */}
                    <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: '#21D192' }}>
                        {/* Left */}
                        <div className="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        {/* Left */}
                        {/* Right */}
                        <div>
                            <a href className="text-white me-4">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href className="text-white me-4">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href className="text-white me-4">
                                <i className="fab fa-google" />
                            </a>
                            <a href className="text-white me-4">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href className="text-white me-4">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a href className="text-white me-4">
                                <i className="fab fa-github" />
                            </a>
                        </div>
                        {/* Right */}
                    </section>
                    {/* Section: Social media */}
                    {/* Section: Links  */}
                    <section className>
                        <div className="container text-center text-md-start mt-5">
                            {/* Grid row */}
                            <div className="row mt-3">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* Content */}
                                    <h6 className="text-uppercase fw-bold">TechNova Solutions</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p>
                                        We are a forward-thinking IT services company dedicated to helping businesses innovate, grow, and transform digitally. With expertise in modern technologies, we deliver reliable, scalable, and customized solutions.
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Company</h6>
                                    <ul className="list-unstyled">
                                        <li>
                                            <p>
                                            <a href="/about" className="footer-link " className="text-dark">
                                                About
                                            </a>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            <a href="/services" className="footer-link" className="text-dark">
                                                Services
                                            </a>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            <a href="/contact" className="footer-link" className="text-dark">
                                                Contact
                                            </a>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p>
                                        <a href="#!" className="text-dark">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">Help</a>
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p><i className="fas fa-home mr-3" /> Ratnagiri</p>
                                    <p><i className="fas fa-print mr-3" /> + 91 01 234 567 89</p>
                                    
                                </div>
                                
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                        </div>
                    </section>
                    {/* Section: Links  */}
                    {/* Copyright */}
                    <div className="text-center py-3 footer-bottom">
                        © {new Date().getFullYear()}{" "}
                        <span className="fw-bold">TechNova Solutions </span> | All Rights Reserved
                    </div>
                    {/* Copyright */}
                </footer>                                                                                                 
                {/* Footer */}
            </div>
            {/* End of .container */}

        </div>
    )
}

export default Footer