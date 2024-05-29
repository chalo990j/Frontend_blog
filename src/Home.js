import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="text-center mb-4">
        <Link to="/" className="btn btn-primary mr-2">Home</Link>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </div>

      <h1 className="display-4 text-center my-4">Welcome to Laptop Chronicles</h1>
      <p className="lead text-center mb-4">Stay updated with the latest news, reviews, and trends in the world of laptops. Whether you're a tech enthusiast, a professional, or a casual user, Laptop Chronicles is your go-to source for everything related to laptops.</p>
      
      <div className="row">
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="Laptop" className="img-fluid rounded mb-4"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
