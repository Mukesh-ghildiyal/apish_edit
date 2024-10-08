"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Generate",
    path: "/apikey",
  },
  {
    title: "Chatbot",
    path: "/Chatbot",
  },
  {
    title: "Test",
    path: "/chat",
  },
];

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 top-0 left-0 right-0 z-10">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          
          {/* Desktop menu */}
          <div className="grid md:place-content-center">
            <div className="flex space-x-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md md:text-lg font-medium"
                >
                  {link.title}
                </Link>
              ))}
              {session && (
                <button
                  onClick={() => signOut()}
                  className="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-md md:text-lg font-medium"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
    </nav>
  );
};

export default NavBar;
