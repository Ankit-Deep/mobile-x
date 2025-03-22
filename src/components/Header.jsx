import React, { useState } from "react";
import { Container, Logo } from "./index";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useSidebar } from "@/context/SidebarContext";

function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <Container>
        <header className="flex gap-10">
          {/* the humburger & logo */}
          <div className=" flex items-center md:gap-5 gap-2 g w-fit">
            <div
              className="md:text-2xl text-xl md:hidden cursor-pointer  h-full pt-2 "
              onClick={toggleSidebar}
            >
              <GiHamburgerMenu />
            </div>

            <Logo />
          </div>

          {/* search, cart, account, login etc */}
          <div className=" w-full flex gap-5  justify-end">
            <div className=" hidden md:block h-full rounded-md w-[90%] ">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search..."
                className="w-full h-full rounded-md px-2 border-none decoration-0 bg-gray-100"
              />
            </div>

            {/* Login, Signup, Account */}
            <div className="h-full  flex  gap-6  md:justify-between  items-center text-lg font-normal md:px-3 ">
              {/* login/signup button */}
              {/* <button
                type="button"
                className=" h-full flex items-center gap-2 text-lg cursor-pointer"
              >
                <MdOutlineAccountCircle className="text-2xl" />
                <span className="font-normal">Login</span>
                <RiArrowDropDownLine className="text-2xl md:block hidden" />
                </button> */}

              <div className="md:text-lg outline-none cursor-pointer flex items-center gap-1">
                <MdOutlineAccountCircle className="text-xl" />

                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer text-lg outline-none ">
                    Login
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="cursor-pointer">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={"font-semibold"}>
                      Profile
                    </DropdownMenuItem>

                    <DropdownMenuItem className={"font-semibold"}>
                      Sign Up
                    </DropdownMenuItem>
                    <p className=" px-2 text-xs fo  nt-semibold">
                      New customer ?
                    </p>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Cart */}
              <div className="flex items-center gap-2 font-normal md:text-lg text-2xl cursor-pointer">
                <BsCart4 className="" title="Cart" />
                <span className="lg:block hidden ">Cart</span>
              </div>

              {/* Wishlist */}
              <div className=" flex items-center gap-2 font-normal md:text-lg text-2xl cursor-pointer">
                <BsShop className="" title="Wishlist" />
                <span className="lg:block hidden">Wishlist</span>
              </div>
            </div>
          </div>
        </header>
      </Container>
    </>
  );
}

export default Header;