import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faCalendarDays,
  faShuffle,
  faListCheck,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function SideNAv() {
  return (
    <div>
      <div
        className="w-60 z-30 h-full fixed shadow-md bg-white "
        id="sidenavSecExample"
      >
        <div className="pt-4 pb-2 px-6">
          <a href="#!">
            <div className="flex flex-col justify-center items-center">
              <div className="shrink-0">
                <img
                  src="/assets/teejay_logo.png"
                  className=" w-20 "
                  alt="Avatar"
                />
              </div>
              <div className="grow my-2">
                <p className="text-sm text-blue-600">Jason McCoel</p>
                <span className=" text-xs font-light">Admin</span>
              </div>
            </div>
          </a>
        </div>
        <hr />
        <ul className="relative px-1">
          <li className="relative">
            <Link
              to="/"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <FontAwesomeIcon icon={faGauge} className=" mr-2" />
              <span>Machine Status</span>
            </Link>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <FontAwesomeIcon icon={faUserGroup} className=" mr-2" />
              <span>Group</span>
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <FontAwesomeIcon icon={faListCheck} className=" mr-2" />

              <span>Knitting Spec</span>
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <FontAwesomeIcon icon={faShuffle} className=" mr-2" />

              <span>Shift Roster</span>
            </a>
          </li>
          <li className="relative">
            <Link
              to="/weeklyplan"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <FontAwesomeIcon icon={faCalendarDays} className=" mr-2" />

              <span>Weekly Plan</span>
            </Link>
          </li>
        </ul>
        <hr className="my-2" />

        <div className="text-center bottom-0 absolute w-full flex flex-col items-center justify-center">
          <hr className="m-0" />
          <img src="/assets/xo_logo.jpeg" className="w-14" />
          <a
            href="https://www.xdoto.io"
            className="py-2 text-xs font-bold underline text-gray-700"
          >
            https://www.xdoto.io
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideNAv;
