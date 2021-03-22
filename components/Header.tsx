import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { faCamera, faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-center w-full h-16">
        <Link href="/">
          <a className="flex items-center text-xl font-bold no-underline">
            <FontAwesomeIcon
              icon={faHome}
              className="mx-2 text-2xl text-gray-700"
            />
            Home
          </a>
        </Link>
      </div>
      <button className="absolute top-0 right-0 z-50 w-12 h-12 text-gray-200 bg-gray-700 md:hidden">
        X
      </button>
      <div
        className={`absolute top-0 left-0 z-10 w-full min-h-screen bg-gray-300 ${
          visible ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default Header;
