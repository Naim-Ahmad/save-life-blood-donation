"use client"

import logo from "@/assets/drop.png";
import NavLink from "@/components/navbar/NavLink";
import Image from "next/image";
import Link from "next/link";
import react from 'react';


export default function Navbar({ children }) {

  const [backDrop, setBackDrop] = react.useState('')


  react.useEffect(()=> {
    window.addEventListener('scroll', (e) => {
      let backDrop = window.scrollY > 150 ? "backdrop-blur-lg" : ''
      setBackDrop(backDrop)
      
    })
  }, [])
 

  // console.log(backDrop)

  const navItems = (
    <>
      <NavLink href="/">Home</NavLink>

      <NavLink href="/about">About</NavLink>

      <NavLink href="/findBlood">Find Blood</NavLink>

      <Link href="/login">
        <li className="w-[200px] btn btn-neutral btn-outline">Login</li>
      </Link>
    </>
  );

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className={`sticky top-0 z-50 ${backDrop}`}>
          <nav className="w-full navbar max-w-7xl mx-auto ">
            <div className="flex-1">
              <div className="">
                <Image src={logo} alt="logo" width={50} height={37} />
              </div>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal flex gap-8 items-center">
                {/* Navbar menu content here */}
                {navItems}
              </ul>
            </div>
          </nav>
        </div>
        {/* Page content here */}
        {children}
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 flex gap-3">
          {/* Sidebar content here */}
          {navItems}
        </ul>
      </div>
    </div>
  )
}