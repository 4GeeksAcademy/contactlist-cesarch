import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const url = "https://playground.4geeks.com/contact/agendas/cesarch";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      setContacts(data.contacts);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="d-flex container-fluid flex-column mx-auto mt-2">
      {contacts.map((item, index) => {
        return (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.address}</p>
              <p className="card-text">{item.phone}</p>
              <p className="card-text">{item.email}</p>
              <Link to ="/ContactView">
                <i className="fa-solid fa-pencil"></i>
              </Link>
              <a href="#" className="btn btn-primary ms-2">
                <i className="fa-solid fa-trash-can"></i>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
