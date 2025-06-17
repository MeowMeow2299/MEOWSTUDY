import React from "react"; 
import { useNavigate } from "react-router-dom";

const Profile = () => {
const navigate = useNavigate();
  return (
        <div className="min-h-screen bg-[url('/photo/Arknights-1.jpg')] bg-cover bg-center bg-no-repeat h-auto">
        <div className="navbar fixed top-0 left-0 w-full z-index-9999 mb-50 padding-top-60 bg-yellow-50 text-gray-800 shadow-md px-6 py-2 flex justify-between items-center absolute">
            <div className="flex-1 flex items-center gap-6">
                <button onClick={() => navigate("/meowstudy/")} className="text-gray-800 font-bold text-2xl font-sans ml-30 cursor-pointer p-2">NOTE MEOW FOR STUDY</button>
<button onClick={() => navigate("/meowstudy/")} className="text-gray-800 font-semibold text-xl font-sans ml-30 cursor-pointer p-2">SETTING</button>
<button onClick={() => navigate("/meowstudy/")} className="text-gray-800 font-semibold text-xl font-sans ml-30 cursor-pointer p-2">ACCESSIBILYTES</button>
<button onClick={() => navigate("/meowstudy/")} className="text-gray-800 font-semibold text-xl font-sans ml-30 cursor-pointer p-2">FEEDBACK</button>            
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
        <h1 className="leading-tight p-4 inline-block mt-9 flex items-center justify-center text-yellow-800 font-bold text-5xl text-center shadow-lg w-[70%] md:w-[50%] mx-auto bg-yellow-50 p-20 ">PROFILE</h1>
        <div className="shadow-lg w-[70%] md:w-[50%] mx-auto bg-yellow-50 flex items-center gap-4 p-10 mt-[-3%]" >
<img src="./public/photo/avatar.jpg" alt="Avatar" className="max-w-[300px] h-auto object-cover  p-10"/>
    
    <div className="text-gray-800 p-8 text-justify">
      <h2 className="text-3xl font-bold">INFORMATION</h2><br></br>
      <p><b>Full Name</b>: Tran Nguyen Hong Ha</p>
      <p><b>Employee-Position</b>:Software Engineer</p>
      <p><b>Date of Birth</b>: 22-07-2000</p>
      <p><b>Gender</b>: Female</p>
      <p><b>Phone</b>: +84933729953</p>
      <p><b>Email</b>: hongha.hatu@gmail.com</p>
      <p><b>Address</b>: Ho Chi Minh City</p>
      <p><b>Website</b>: <a href="https://linkedin.com/...">LinkedIn</a></p>
    </div>
    </div>
    
    <div className=" p-10 shadow-lg  w-[70%] md:w-[50%] mt-[-5%] mx-auto bg-yellow-50 items-center ">
        <section className="text-gray-800  ">
    <h2 className="text-3xl font-bold">ABOUT ME</h2><br></br>
    <p className="justify-center text-justify">I am writing to express my interest in the Frontend Developer position at your company. With a strong foundation in React, JavaScript, and Tailwind CSS, I’m confident in my ability to contribute to your team by building clean, responsive, and user-friendly web interfaces.<br></br><br></br>
Over the past year, I have worked on several frontend projects from creating personal portfolio websites to developing e-commerce UI mockups using modern technologies like React and Tailwind. I take pride in writing clean, maintainable code, and turning design ideas into fully functional interfaces. My background includes internships at Amazing-Tech, where I gained hands-on experience working in professional environments.<br></br><br></br>
While I am still expanding my skills in backend integration, I am eager to learn, improve, and contribute to team-based projects. I enjoy collaborating with others, receiving feedback, and continuously refining my frontend capabilities. <br></br><br></br>
Thank you for considering my application. I look forward to the opportunity to contribute to your team and grow as a frontend developer in your dynamic and innovative environment.<br></br>
</p><br></br>
  </section>
  <section className="text-gray-800">
    <h2 className="text-3xl font-bold">WORK EXPERIENCE</h2><br></br>
    <div class="overflow-x-auto">
  <table class="table table-md border">
    {/* <!-- head --> */}
    <thead className="">
      <tr className="text-gray-800 text-sm font-bold bg-yellow-100 bg-glass border-b border-gray-300">
        <th>Time</th>
        <th>Company</th>
        <th>Position</th>
        <th>My resposibilities</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr className="border-b border-gray-300 my-6">
        <th>04/2025 - Present</th>
        <td>HATU Group (Real Estate)</td>
        <td>Sales & Marketing Assistant </td>
        <td>•	Supported real estate sales team by sourcing customer data and leads<br></br><br></br>
•	Conducted market research and gathered client information via English platforms<br></br><br></br>
•	Assisted tele sales team by organizing and filtering leads for land sale calls<br></br><br></br>
•	Collaborated with marketing team to run small-scale lead generation campaigns<br></br><br></br>
•	Gained experience in customer profiling, CRM tools, and communication in English<br></br><br></br>
</td>
      </tr>
      {/* <!-- row 2 --> */}
      <tr className="border-b border-gray-300 my-6">
        <th>11/2024-03/2025</th>
        <td>Solar Discovery Co.</td>
        <td>Data Processing </td>
        <td>• Handled warehouse inventory data and sanitation reports<br></br><br></br>
• Used Excel and digital tools for basic data analysis<br></br><br></br>
</td>
      </tr>
      {/* <!-- row 3 --> */}
      <tr className="border-b border-gray-300 my-6">
        <th>06/2024 – 10/2024</th>
        <td>Haseca Co. (Nidec Sankyo) </td>
        <td>HR Data Management </td>
        <td>• Managed personnel data in canteen operations<br></br><br></br>
• Enhanced patience and workplace communication<br></br><br></br>
</td>
      </tr>
      {/* <!-- row 4 --> */}
      <tr className="border-b border-gray-300 my-6">
        <th>02/2024 – 05/2024</th>
        <td> Hi Mart Co., D2  </td>
        <td>Data Entry & Analysis  </td>
        <td>• Performed data entry and basic analytics in English and Korean <br></br><br></br>
• Improved ability to work under pressure<br></br><br></br>
</td>
      </tr>
      {/* <!-- row 5 --> */}
      <tr>
        <th>10/2023 – 12/2023</th>
        <td>Amazing-Tech  </td>
        <td>Frontend Intern  </td>
        <td>• Worked on UI development using React and Tailwind CSS<br></br><br></br>
• Collaborated with senior developers to follow clean code practices<br></br><br></br>
• Gained experience in Agile workflow and team communication

</td>
      </tr>
    </tbody>
  </table>
</div>
    {/* Add more ExperienceItem as needed */}
  </section>
  <section className="text-gray-800 mt-6">
  <h2 className="text-3xl font-bold">MY PROJECT</h2>
  <div className="grid gap-6 p-2 mt-3">
  {/* Project 1 */}
  <div className="bg-yellow-100 shadow-md rounded-box p-4">
    <h2 className="text-lg font-bold">Final Project – COMP1682</h2>
    <p className="text-sm text-gray-500 mb-2">Tech stack: React, SCSS, JavaScript</p>
    <ul className="list-disc list-inside text-sm space-y-1">
      <li>Developed a comprehensive website as the final project for COMP1682</li>
      <li>Implemented responsive design and interactive features using React and SCSS</li>
      <li>
        <a href="https://github.com/your-repo" className="text-blue-500 underline">GitHub Repository</a>
      </li>
    </ul>
  </div>

  {/* Project 2 */}
  <div className="bg-yellow-100 shadow-md rounded-box p-4">
    <h2 className="text-lg font-bold">Capstone 1 – Meow Meow</h2>
    <p className="text-sm text-gray-500 mb-2">Tech stack: HTML, CSS</p>
    <ul className="list-disc list-inside text-sm space-y-1">
      <li>Created a multi-page website as part of Capstone 1 project</li>
      <li>Focused on clean layout and user-friendly navigation</li>
      <li>
        <a href="https://github.com/your-repo" className="text-blue-500 underline">GitHub Repository</a>
      </li>
    </ul>
  </div>
{/* Project 3 */}
  <div className="bg-yellow-100 shadow-md rounded-box p-4">
    <h2 className="text-lg font-bold">Profile Portfolio</h2>
    <p className="text-sm text-gray-500 mb-2">Tech stack: HTML, CSS, JavaScript</p>
    <ul className="list-disc list-inside text-sm space-y-1">
      <li>Designed and built a personal portfolio website to showcase projects and skills</li>
      <li>Emphasized responsive design and aesthetic appeal</li>
      <li>
        <a href="https://github.com/your-repo" className="text-blue-500 underline">GitHub Repository</a>
      </li>
    </ul>
  </div>
</div>
  </section>
  <section className="text-gray-800 mt-6">
  <h2 className="text-3xl font-bold">SKILL</h2>
  <div className=" p-2 mt-3">
    <ul className="list-disc list-inside space-y-1">
      <li>Strong knowledge of JavaScript (ES6+) and React for building responsive user interfaces. </li>
      <li>Proficient in Tailwind CSS, HTML5, and component-based design.</li>
      <li>Familiar with Firebase, MongoDB, and Strapi for handling basic data workflows.</li>
      <li>Able to transform design prototypes (Figma, Axure) into functional UI.</li>
      <li>Basic understanding of Git, version control, and frontend deployment.</li>
      <li>Comfortable using office software (Word, Excel, Publisher, Access).</li>
      <li>Experience with image editing tools (Canva, Photoshop). </li>
      <li>Good communication skills in both Vietnamese and English, basic Korean.</li>
      </ul>
  </div>
  </section>
  <section className="text-gray-800 mt-6">
  <h2 className="text-3xl font-bold">EDUCATION</h2>
  <div class="overflow-x-auto">
  <table class="table table-md border">
    <thead className="">
      <tr className="text-gray-800 text-sm font-bold bg-yellow-100 bg-glass border-b border-gray-300">
        <th>Time</th>
        <th>Name of School/University</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr className="border-b border-gray-300 my-6">
        <th>2018</th>
        <td> Completed Phuoc Long high school program. </td>
      </tr>
      <tr className="border-b border-gray-300 my-6">
        <th>2019-2024</th>
        <td> Completed university program (Degree awarded) University of Greenwich Computing Third Class (2022 - Feb 2024)  </td>
      </tr>
      </tbody>
  </table>
  </div>
  </section>
   <section className="text-gray-800 mt-6">
  <h2 className="text-3xl font-bold">STATEMENT</h2>
  <p className="mt-3 text-jusify justify-center">I’m excited about the opportunity to contribute to a professional environment where I can continue growing as a frontend developer. I’m eager to learn, improve my backend integration skills, and collaborate with a team that values clean, user-focused interfaces.
Thank you for considering my application, I look forward to the possibility of joining your team.</p>
  </section>
    </div>
    </div>
  );
};

export default Profile;
