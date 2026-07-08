import { NavLink } from "react-router";

const Navbar = () => {
  const activeNavButton = ({isActive}) =>
    isActive
      ? "px-4 py-2 bg-white rounded-lg text-blue-600 font-semibold"
      : "px-4 py-2 rounded-lg text-white hover:bg-white/20";

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <span className="text-white text-2xl font-bold">🌥 Weather App</span>
      <div className="flex gap-2">
        <NavLink to="/" className={activeNavButton}>
          Home
        </NavLink>
        <NavLink to="/about" className={activeNavButton}>
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
