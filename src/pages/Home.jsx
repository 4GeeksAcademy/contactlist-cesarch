import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Contacts } from "../components/Contacts.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="d-flex container-fluid bg-danger justify-content-left">
      <div>
        <button type="button" className="btn btn-success">
          Add New Contact
        </button>
      </div>
	  <div>
		<Contacts/>
		<Contacts/>
		<Contacts/>
	  </div>
    </div>
  );
};
