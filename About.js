import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Our Automated Geofencing Toll System</h2>
      
      <div className="row">
        <div className="col-md-8 text-muted">
          <p className="fs-5">
          Traditional toll collection methods can be slow and inefficient, often
        requiring vehicles to stop at toll booths and manually pay fees. Our
        automated geofencing toll system revolutionizes toll collection by
        utilizing GPS and real-time tracking technology, allowing vehicles to
        pass through toll zones without stopping.<br/><br/>
            Our Automated Geofencing Toll System offers an innovative solution
            for toll collection, making it easier, faster, and more efficient for
            vehicle owners. By utilizing GPS and geofencing technology, our system
            automatically detects vehicles as they enter toll zones, deducting
            charges and notifying the user in real-time.
          </p>
        </div>

        <div className="col-md-4">      
           <img
            src="/images/toll-image.jpg"
            alt="Toll System"
            className="img-fluid"
            style={{ borderRadius: "10px", width:"100%"}}
          />
        </div>
      </div>

      <h3 className="text-center mt-5">Key Features</h3>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="/images/Online-payment.jpg"
              className="card-img-top"
              alt="Feature 1"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Automated Toll Collection</h5>
              <p className="card-text">
                The system automatically deducts toll charges when a vehicle
                enters a geofenced area, eliminating the need for manual
                payments.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="/images/RealTimeNotification.jpg"
              className="card-img-top"
              alt="Feature 2"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Real-Time Notifications</h5>
              <p className="card-text">
                Users receive instant notifications about their toll charges
                and status when they enter or exit the toll zone.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="images/userFriendly.jpg"
              className="card-img-top"
              alt="Feature 3"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">User-Friendly Dashboard</h5>
              <p className="card-text">
                The user dashboard allows easy access to transaction history,
                payment status, and account details, making it simple to manage
                your toll usage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
