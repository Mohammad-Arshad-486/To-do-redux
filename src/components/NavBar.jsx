import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-700 rounded-md text-white w-screen fixed top-0 left-0 flex items-center justify-between p-4 shadow-md">
     <p> <span className="text-xl font-bold">To-Do Redux</span>
      <Link to="/" className="ml-5 no-underline text-white hover:underline">
        Home
      </Link></p>
    </nav>
  );
}

export default NavBar;
