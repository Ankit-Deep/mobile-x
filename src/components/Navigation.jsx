import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const navTabs = [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "Catalog",
      url: "/catalog",
    },
    {
      title: "Collections",
      url: "/collections",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ];

  return (
    <>
      {/* For desktop or large screens */}
      <section className="w-full border bg-blue-300 p-4">
        <div className="flex flex-row gap-5">
          {navTabs.map((tab, index) => {
            return (
              <NavLink
                key={index}
                to={tab.url}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-800"
                    : "text-blue-600 hover:text-blue-700"
                }
              >
                {tab.title}
              </NavLink>
            );
          })}
        </div>
      </section>

      {/* For small screens */}
      <aside className="md:hidden">
        <div className="w-full border bg-blue-300 p-2">
          <div className="flex flex-col gap-2">
            {navTabs.map((tab, index) => {
              return (
                <NavLink
                  key={index}
                  to={tab.url}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-blue-800 p-2"
                      : "text-blue-600 hover:text-blue-700 p-2"
                  }
                >
                  {tab.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navigation;
