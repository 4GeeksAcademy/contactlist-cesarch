import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const DeleteContact = ({contactId, onDeleteSuccess}) => {
  const url =
    `https://playground.4geeks.com/contact/agendas/cesarch/contacts/${contactId}`;

  const deleteContacts = async () => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Contacto eliminado correctamente");
        onDeleteSuccess?.()
      } else {
        console.error("Error al eliminar contacto");
      }
    } catch (error) {
      console.error("Error de red", error.message);
    }
  };

  return (
    <div>
      <div className="modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmar Eliminicacion</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Proceder con eliminacion de contacto?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-danger" onClick={deleteContacts}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
