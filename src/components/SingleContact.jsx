import { useState } from "react";
import { Link } from "react-router-dom";

export const SingleContact = () => {
  const url = "https://playground.4geeks.com/contact/agendas/cesarch/contacts";
  
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const createContact = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          name: fullname,
          email: email,
          phone: phone,
          address: address,
        }),
      });

      if (response.ok) {
        console.log("Contacto creado correctamente");
        setFullname("");
        setEmail("");
        setPhone("");
        setAddress("");
      } else {
        console.error("Error al crear contacto");
      }
    } catch (error) {
      console.error("Error de red", error.message);
    }
  };

  return (
    <div className="d-flex container flex-column mx-auto mt-2">
      <h1>Add New Contact</h1>

      <div className="input-group mb-3">
        <span className="input-group-text">Full Name</span>
        <input
          type="text"
          className="form-control"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Email</span>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Phone</span>
        <input
          type="text"
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Address</span>
        <input
          type="text"
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
        <div>
      <button type="button" className="btn btn-success" onClick={createContact}>
        Save Contact
      </button>
        </div>
      <Link to="/">
        <p>or get back to contacts</p>
      </Link>
      
    </div>
  );
};