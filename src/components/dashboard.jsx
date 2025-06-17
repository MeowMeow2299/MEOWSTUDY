import React from "react";
import { useState, useEffect } from "react";
import Advers from "./advers";
import MusicPlayer from "./musicplayer";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
     return (
      
      <div className="bg-yellow-50 w-full">
        <div className="navbar w-full bg-yellow-50 text-gray-800 shadow-md px-6 py-2 flex justify-between items-center mt-[-2%]">
  <div className="flex-1 flex items-center gap-6">
    <a  className="text-gray-800 font-bold text-2xl font-sans ml-30 cursor-pointer">NOTE MEOW FOR STUDY</a>
<button onClick={() => navigate("/meowstudy/create")} className="text-gray-800 font-semibold text-xl font-sans ml-30 cursor-pointer rounded-md p-2">Create Notes</button>
     <a className="text-gray-800 font-semibold text-xl font-sans ml-30 cursor-pointer rounded-md p-2">Categories</a>
     <button onClick={() => navigate("/meowstudy/about-us")} className="text-gray-800 font-semibold text-xl font-sans ml-30 cursor-pointer rounded-md p-2">About Us</button>
  </div>
 <label className="swap swap-rotate mr-2">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="cupcake" />

  {/* sun icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="bg-yellow-100 input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar bg-yellow-50">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/daisyui/mark-rotating.svg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-yellow-50 text-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow visible absolute top-[50%]">
             <div className="px-4 py-3 border-b border-yellow-200 bg-white bg-opacity-60 rounded-t-xl">
    <p className="text-sm font-semibold text-gray-800">Trần Nguyễn Hồng Hà</p>
    <button onClick={() => navigate("/meowstudy/profile")} className="text-gray-800 font-sans cursor-pointer">Tap to see your profile</button>
  </div>
        <li>
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
        </li>
        </ul>
      </div>
    </div>
  </div>
  <div tabIndex={0} className="collapse collapse-open bg-yellow-100 text-gray-800 w-full rounded-none">
        <div className="collapse-title font-semibold">더 똑똑하게 공부하세요 — NoteMeow와 함께.</div>
        <div className="collapse-content text-sm">
          완벽한 노트, 아름다운 집중.
형식보다 학습에 집중할 수 있도록 스마트하게 설계된 템플릿.
미니멀하고 세련되며, 바로 출력 가능한 디자인.
당신의 공부 공간은 고급스러울 자격이 있어요.
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-open bg-yellow-100 text-gray-800 w-full rounded-none">
        <div className="collapse-title font-semibold">もっとスマートに勉強しよう — NoteMeowと一緒に。</div>
        <div className="collapse-content text-sm">
          完璧なノート、美しい集中力。
          フォーマットに時間をかけず、学びに集中できるように、考え抜かれたテンプレートを用意しました。
          ミニマルで美しく、印刷もすぐにできるデザイン。
          あなたの勉強空間には、上質さがふさわしい。
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-open bg-yellow-100 text-gray-800 w-full rounded-none">
        <div className="collapse-title font-semibold text-xl">Study smarter, not harder — with NoteMeow.</div>
        <div className="collapse-content text-md text-justify">
         Perfect notes, beautiful focus.
Designed templates that think for you — so you can spend less time formatting and more time learning.
Minimal, aesthetic, and print-ready for every brilliant thought you jot down.
Because your study space deserves elegance.
        </div>
      </div>
    <div className="min-h-screen space-y-2 mx-auto items-center mt[-5px] relative p-10 carousel w-full">
      <div className="carousel w-full bg-yellow-50">
  <div id="slide1" className="carousel-item relative w-full ">
    <img
      src="./public/photo/Arknights-1.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="./public/photo/Arknights-7.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="./public/photo/Arknights-11.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="./public/photo/Arknights-8.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <button href="#slide3" className="btn btn-circle">❮</button>
      <button href="#slide1" className="btn btn-circle">❯</button>
    </div>
  </div>
</div>
      <div className="bg-yellow-50 p-6 h-full min-h-[500px] item-start">
        <MusicPlayer className="shadow-md rounded-lg h-full min-h-[500px] col-span-1 flex flex-col" />
      </div>

    </div>
      </div>
  );

};


export default Dashboard;