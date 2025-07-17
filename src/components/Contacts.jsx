import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteContact } from "./DeleteContact";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedId, setSelectedId] = useState(null)
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
              <Link to="/ContactView">
                <i className="fa-solid fa-pencil"></i>
              </Link>
              
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setSelectedId(item.id)}
              >
                <i className="fa-solid fa-trash-can">
                </i>
              </button>
              </div>    
                </div>
        );
      })}
      {selectedId !== null && (
        <DeleteContact
          contactId={selectedId}
          onDeleteSuccess={() => {
            setSelectedId(null);
            getData();
          }}
        />
      )}
    </div>
  );
};
