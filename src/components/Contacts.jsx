import { useState, } from "react";
import { Link } from "react-router-dom";

export const Contacts = () => {
    return (
        <div className="d-flex container-fluid flex-column mx-auto mt-2">
                <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Cesar Chavez</h5>
            <p className="card-text">
              Santiago De Chile
            </p>
			<p className="card-text">
              +56 0000 0000
            </p>
			<p className="card-text">
              example@example email
            </p>
            <a href="#" className="btn btn-primary">
              <i class="fa-solid fa-pencil"></i>
            </a>
			 <a href="#" className="btn btn-primary ms-2">
              <i class="fa-solid fa-trash-can"></i>
            </a>
          </div>
        </div>
        </div>
    )
}