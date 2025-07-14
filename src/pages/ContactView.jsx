import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { SingleContact } from "../components/SingleContact.jsx"

export const ContactView = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="d-flex container-fluid bg-danger justify-content-left">
        <SingleContact/>
    </div>
  );
};