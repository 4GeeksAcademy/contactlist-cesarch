import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Contacts } from "../components/Contacts.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="d-flex container-fluid bg-danger justify-content-left">
      <div>
        <Link to ="/ContactView">
        <button type="button" className="btn btn-success">
          Add New Contact
        </button>
        </Link>
      </div>
	  <div>
		<Contacts/>
	  </div>
    </div>
  );
};
