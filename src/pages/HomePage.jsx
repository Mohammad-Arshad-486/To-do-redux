import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Data from "../components/Data";
function HomePage() {
  return (
    <div className="mt-15">
    <p className="text-5xl mb-10">To Do List</p>
      <button className="block mb-10">
        <Link to="/create" >
          Create
        </Link>
      </button>
      <Data />
    </div>
  );
}

export default HomePage;
