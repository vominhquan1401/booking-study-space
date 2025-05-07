// src/components/TopNavBar.jsx
import React from "react";
import { Cog6ToothIcon, BellIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

let arr = ["dashboard", "user", "booking", "report"];

export default function TopNavBar() {
  const currentPath = window.location.pathname;
  return (
    <header className="w-full bg-white shadow-sm px-4 md:px-10 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-lg font-bold text-blue-800">HCMUT</span>
        </div>
        <nav className="flex gap-2 md:gap-4">
          {["Dashboard", "Người Dùng", "Đặt Lịch", "Report"].map((label, i) => (
            <a
              key={i}
              href={`/${arr[i]}`}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                // TODO
                currentPath === `/${arr[i]}`
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
            <Cog6ToothIcon className="h-5 w-5 text-blue-800" />
          </div>
          <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
            <BellIcon className="h-5 w-5 text-blue-800" />
          </div>
          <div className="h-8 w-8 rounded-full border border-blue-400 bg-gradient-to-br from-gray-200 to-gray-100" />
        </div>
      </div>
    </header>
  );
}
