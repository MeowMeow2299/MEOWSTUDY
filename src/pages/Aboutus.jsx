import React from "react";
import { useNavigate } from "react-router-dom";

    function Aboutus() {
const navigate = useNavigate();
    return (
        <div className="bg-[url('/photo/Arknights-1.jpg')] bg-cover bg-center bg-no-repeat h-500 min-h-screen ">
        <div className="navbar fixed top-0 left-0 w-full z-index-9999 mb-50 padding-top-60 bg-yellow-50 text-gray-800 shadow-md px-6 py-2 flex justify-between items-center absolute">
            <div className="flex-1 flex items-center gap-6">
                <button onClick={() => navigate("/meowstudy/")} className="text-gray-800 font-bold text-2xl font-sans ml-30 cursor-pointer p-2">NOTE MEOW FOR STUDY</button>

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
                            <p className="text-xs text-gray-500">Tap to see your profile</p>
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
        <div className="space-y-4 p-20 y-5"> {/* Tạo khoảng cách giữa các collapse */}
  {/* Collapse 1 */}
  <div className="collapse collapse-arrow bg-yellow-100 border border-yellow-200 rounded-md shadow-md">
    <input type="checkbox" className="peer" />
    <div className="collapse-title text-xl font-bold text-gray-800 peer-checked:bg-yellow-200">
      ABOUT NOTE MEOW
    </div>
    <div className="collapse-content text-gray-700 peer-checked:bg-yellow-50">
      <p className="mt-4">Welcome to NoteMeow — where your thoughts find their perfect place.<br></br>
<br></br>
NoteMeow is more than just an online note-taking tool — it’s a thoughtfully designed platform that transforms your everyday notes into something beautiful, functional, and truly yours. Whether you're a student, a creative, a teacher, a busy professional, or someone who simply loves being organized, NoteMeow helps you capture your ideas with clarity and style.<br></br>
<br></br>
At NoteMeow, we believe that note-taking should be both practical and delightful. Instead of starting from scratch in Word or cluttered documents, our platform offers a collection of elegant, customizable templates that make note creation not only easier but also more inspiring. From minimalistic designs to vibrant layouts, you can choose a note style that suits your mood, purpose, or personality.<br></br>
<br></br>
With just a few clicks, users can create structured, visually appealing notes directly in their browser — no need to download complicated software. Want to take your notes offline? No problem. With our simple export function, you can download and print your notes in clean, high-quality formats that are presentation-ready and printer-friendly. Your ideas deserve better than plain text.</p><br></br>
    </div>
  </div>

  {/* Collapse 2 */}
  <div className="collapse collapse-arrow bg-yellow-100 border border-yellow-200 rounded-md shadow-md">
    <input type="checkbox" className="peer" />
    <div className="collapse-title text-xl font-bold text-gray-800 peer-checked:bg-yellow-200">
      WHY NOTE MEOW?
    </div>
    <div className="collapse-content text-gray-700 peer-checked:bg-yellow-50">
      
      <p className="mt-4 p-3">📝 Easy-to-use interface: Write, edit, and format notes effortlessly.<br></br>
<br></br>
🎨 Stylish templates: Choose from a wide range of pre-designed layouts — perfect for study notes, meeting summaries, journaling, or personal lists.<br></br>
<br></br>
💾 Instant export: Download your notes as beautifully formatted files ready for printing or sharing.<br></br>
<br></br>
☁️ No sign-up required (optional): Get started instantly, or create an account to save and organize your notes online.<br></br>
<br></br>
😻 Designed with care: Just like a cat carefully chooses its spot, NoteMeow helps you create notes with intention and elegance.<br></br>
<br></br>
We built NoteMeow with one simple mission in mind: to help people take better notes — the kind they’ll actually want to look back on. Notes that are organized, aesthetic, and easy to manage. Whether you're planning a project, writing a study guide, or simply jotting down thoughts, NoteMeow is here to make your note-taking process smoother and more enjoyable.<br></br>
<br></br>
So go ahead — write something worth remembering.
With NoteMeow, your notes don’t just work — they purr.

</p>
    </div>
  </div>

  {/* Collapse 3 */}
  <div className="collapse collapse-arrow bg-yellow-100 border border-yellow-200 rounded-md shadow-md">
    <input type="checkbox" className="peer" />
    <div className="collapse-title text-xl font-bold text-gray-800 peer-checked:bg-yellow-200">
      POLICY & LICENSES
    </div>
    <div className="collapse-content text-gray-700 peer-checked:bg-yellow-50">
      <p className="mt-4">NoteMeow is built by a small but passionate team of designers, developers, and note-takers who share one belief: that even the simplest tool can bring joy when it’s crafted with care. We’re not trying to reinvent note-taking — we’re making it better, friendlier, and more beautiful.<br></br>
<br></br>
Our team draws inspiration from both the structure of traditional notebooks and the flexibility of modern digital tools. We believe in balance: between function and form, between speed and simplicity, between doing more and focusing on less. Every feature in NoteMeow is carefully chosen to help users write with intention — not distraction.<br></br>
<br></br>
Just like a well-written note, we value clarity and purpose. We're obsessed with the small details: typography that feels comfortable, layouts that make sense, and colors that don't overwhelm. Every template we create is tested by real users — because we’re users too.<br></br>
<br></br>
We’re building NoteMeow for the people who open a fresh page with excitement. For the ones who organize chaos into clarity. For those who love lists, mind maps, summaries, journals, and scribbles that matter. If that’s you, you’re in the right place.</p>
    </div>
    </div>

    {/* Collapse 4 */}
  <div className="collapse collapse-arrow bg-yellow-100 border border-yellow-200 rounded-md shadow-md">
    <input type="checkbox" className="peer" />
    <div className="collapse-title text-xl font-bold text-gray-800 peer-checked:bg-yellow-200">
      OUR VISIONS
    </div>
    <div className="collapse-content text-gray-700 peer-checked:bg-yellow-50">
      <p className="mt-4">We envision a future where digital note-taking feels as personal as pen and paper — but smarter. Where people can create notes they’re proud of, share them easily, and store them safely. A world where productivity meets creativity, and where simplicity doesn't come at the cost of beauty.

As we grow, our mission stays the same:
To make note-taking enjoyable, efficient, and emotionally satisfying.<br></br>
<br></br>
In the future, we plan to expand NoteMeow with features like cloud sync, team collaboration, and a wider library of templates for everything from academic study to business planning. But no matter how far we go, we’ll always keep the user at the heart of every update.<br></br>
<br></br>
NoteMeow isn’t just a tool — it is a mindset. A calm, clear, curious space where your ideas can take shape and shine.<br></br><br></br>

Let’s make note-taking something you look forward to.</p>
    </div>
  </div>

</div>
<footer className="footer footer-horizontal footer-center bg-yellow-50 text-gray-800 p-10">
  <aside>
    <img
      src="https://img.daisyui.com/images/daisyui/mark-rotating.svg"
      alt="Logo"
      className="w-60 h-60 "
    />
    <p className="font-bold">
      NOTE MEOW FOR STUDY Ltd.
      <br />
      Providing reliable tech since 2025
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4 mb-10">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
</div>
);
    };
    export default Aboutus;
