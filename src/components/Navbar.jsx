import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Seangleng Khe</h1>
        <div className="space-x-6 hidden md:flex">
          <Link className="hover:text-indigo-500" to="/">Home</Link>
          <Link className="hover:text-indigo-500" to="/about">About</Link>
          <Link className="hover:text-indigo-500" to="/projects">Projects</Link>
          <Link className="hover:text-indigo-500" to="/talks">Talks</Link>
          <Link className="hover:text-indigo-500" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;