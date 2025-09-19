import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="imgs/about.jpg"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">About TechNova Solutions</h2>
          <p className="text-muted">

          </p>
          <p className="text-muted">
            We are a forward-thinking IT services company dedicated to helping businesses innovate, grow, and transform digitally. With expertise in modern technologies, we deliver reliable, scalable, and customized solutions.</p>
         
          <button className="btn btn-primary mt-3">Learn More</button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <h4>Our Mission</h4>
          <p className="text-muted">
            To empower businesses through innovative IT solutions that enhance efficiency, growth, and digital presence.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h4>Our Vision</h4>
          <p className="text-muted">
            To be a global leader in technology services, creating sustainable digital transformations.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h4>Our Values</h4>
          <p className="text-muted">
           Innovation – Driving change through creativity.
           Integrity – Building trust with transparency.
           Excellence – Delivering beyond expectations.
           Collaboration – Growing together with clients and teams</p>
          
        </div>
      </div>
    </div>
  );
}

export default About;