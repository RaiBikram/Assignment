import React from "react";
import { LuPhone } from "react-icons/lu";
import { PiMapPinLineLight } from "react-icons/pi";

type Props = {};

const NavbarTop = (props: Props) => {
  return (
    <div>
      <div className="bg-blue-500 text-white py-3 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <PiMapPinLineLight className="h-4 w-4 " />
              <span>California,USA</span>
            </div>
            <div>Opening Hour: 9:00 am - 08:00 pm</div>
          </div>
          <div className="flex items-center gap-1">
            <LuPhone className="h-4 w-4" />
            <span>Phone Number: +1 (347) 321-0919</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
