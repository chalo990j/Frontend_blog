// Contact.js
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container">
      <h1 className="display-4 text-center my-4">Contact Us</h1>
      <p className="lead text-center mb-4">Feel free to reach out to us with any questions or inquiries.</p>
      
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="5"></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mr-2">Send</button>
          <Link to="/" className="btn btn-secondary">Back</Link>
        </div>
      </form>
    </div>
  );
}

export default Contact;

