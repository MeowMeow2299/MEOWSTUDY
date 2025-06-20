import React from "react";
import { useState } from 'react'

const Search = () => {
    const [isFocused, setIsFocused] = useState(false)

    const items = [
    { title: 'Text', desc: 'Add freeform text', icon: '📝' },
    { title: 'Video', desc: 'Add a video block', icon: '🎥' },
  ]

    return (
    <div className="w-full bg-yellow-50">
      <div className="relative text-gray-800 w-full max-w-full bg-yellow-50">
        <p classname="text-xl text-gray-800 text-center font-bold mb-2"> What are you looking for?</p>
        <input
          type="text"
          placeholder="Search for a block"
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-yellow-50"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 100)} // để không tắt liền khi click dropdown
        />

        {isFocused && (
          <ul classname="absolute w-full bg-white shadow-lg rounded-lg mt-2 z-10">
            {items.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
              >
                <div className="mt-1 text-blue-500">{item.icon}</div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    );
}
export default Search