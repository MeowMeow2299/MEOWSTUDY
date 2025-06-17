import React, { useState } from "react";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
  <button
    onClick={() => setOpen(!open)}
    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
  >
    <img src="./public/Icons Operation Barrenland Arknights/2.ico" alt="Avatar" className="w-full h-full avatar avatar-online avatar-placeholder"  />
  </button>

  {open && (
    <div className="absolute top-full right-0 mt-3 w-64 rounded-xl z-50 shadow-xl border border-yellow-100
                bg-gradient-to-br from-[#FFFDE4] to white backdrop-blur-sm">
  <div className="px-4 py-3 border-b border-yellow-200 bg-white bg-opacity-60 rounded-t-xl">
    <p className="text-sm font-semibold text-gray-800">Trần Nguyễn Hồng Hà</p>
    <p className="text-xs text-gray-500">Tap to see your profile</p>
  </div>
  <ul className="text-sm text-gray-700 divide-y divide-yellow-100">
    {["Settings", "Help", "Accessibility", "Feedback"].map((item) => (
      <li key={item} className="px-4 py-2 hover:bg-yellow-50 transition duration-200 cursor-pointer">
        {item}
      </li>
    ))}
    <li className="px-4 py-2 text-red-600 hover:bg-red-50 font-medium cursor-pointer">
      Log out
    </li>
  </ul>
</div>
  )}
</div>
    );
};

export default DropdownMenu;