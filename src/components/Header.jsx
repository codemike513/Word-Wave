import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <h1 className="font-medium">
        Free<span className="text-blue-400 bold">Scribe</span>
      </h1>
      <button className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </button>
    </header>
  );
}

export default Header;