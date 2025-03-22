import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from ".";
import { useSidebar } from "@/context/SidebarContext";

function Navigation() {
  const navTabs = [
    {
      title: "Home",
      url: "/",
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

  const { isOpen } = useSidebar();

  return (
    <>
      {/* For desktop or large screens */}
      <section className="md:block hidden w-full border bg-blue-300">
        <Container>
          <div className="flex flex-row gap-15 items-center justify-center ">
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
        </Container>
      </section>

      {/* For small screens */}
      {isOpen && (
        <aside className="md:hidden block overflow-auto">
          <div className="w-[50%] h-screen border bg-blue-300 p-2">
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
      )}
    </>
  );
}

export default Navigation;
