import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <a href="/">
        <h1 className="font-medium">
        Word<span className="text-blue-400 bold">Wave</span>
        </h1>
      </a>
      <a
        href="/"
        className="flex specialBtn items-center gap-2 px-3 py-2 text-sm rounded-lg text-blue-400"
      >
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </a>
    </header>
  );
}
export default Header;
