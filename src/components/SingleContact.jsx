import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const SingleContact = () => {
  const url = 'https://playground.4geeks.com/contact/agendas/cesarch/contacts'
  
    return(
      <div className="d-flex container-fluid flex-column mx-auto mt-2">
        <h1>Add New Contact</h1>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Full Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Email
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Phone
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Address
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button type="button" className="btn btn-success">Save Contact</button>
        <Link to ="/">
                <p>or get back to contacts</p>
        </Link>
      </div>
    );
}