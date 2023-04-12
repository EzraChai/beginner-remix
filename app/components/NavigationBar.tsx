import { NavLink } from "@remix-run/react";

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between max-w-2xl mx-auto mt-4 bg-white">
      <NavLink to={"/"} className="text-3xl font-bold">
        Locket.
      </NavLink>
      <div className="flex gap-1 mt-2 mb-4">
        <NavLink
          className="px-2 py-1 text-lg font-semibold transition rounded-lg hover:bg-yellow-100 "
          to={"/about"}
          prefetch={"render"}
        >
          About
        </NavLink>
        <NavLink
          className="px-2 py-1 text-lg font-semibold transition rounded-lg hover:bg-red-100 "
          to={"/notes"}
          prefetch={"render"}
        >
          Notes
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationBar;
