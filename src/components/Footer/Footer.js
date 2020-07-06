import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer w-full flex flex-col my-auto mt-auto mb-0 w justify-center items-end bg-gray-900 p-2">
      <span className="text-lg mr-2 text-pink-700 font-mono"><i className="fas fa-dungeon"></i> {'//'} JoshuaKB </span>
    </footer>
  );
}

export default Footer;