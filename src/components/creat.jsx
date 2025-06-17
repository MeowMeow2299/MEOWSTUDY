import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Create =() => {
    const navigate = useNavigate();
     const [notes, setNotes] = useState([]);
     const [newNote, setNewNote] = useState("");
   const [newImage, setNewImage] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [noteColor, setNoteColor] = useState("#FFFDE4"); // Màu mặc định
  const [selectedTag, setSelectedTag] = useState("");
  const [tags, setTags] = useState(["Work", "Personal", "Study"]); // Danh sách tag

  const handleImageChange = (e) => {
      if (e.target.files[0]) {
        setNewImage(URL.createObjectURL(e.target.files[0]));
      }
    };
    const addNote = () => {
    if (newTitle.trim() !== "" && newContent.trim() !== "") {
      const newNote = {
        id: Date.now(),
        title: newTitle,
        content: newContent,
        image: newImage,
        color: noteColor,
        tag: selectedTag,
        date: new Date().toLocaleDateString("en-US") // Lưu ngày tạo
      };
      
      setNotes([...notes, newNote]); // Lưu vào danh sách notes
      
      setNewTitle("");
      setNewContent("");
      setNewImage(null);
      setNoteColor("#FFFDE4"); // Reset màu sau khi lưu
      setSelectedTag("");
    }
  };
  
  // Thêm tag mới
  const addNewTag = () => {
    const newTag = prompt("Add New Tag:");
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
  };
  
    return(
        <div className="bg-yellow-50 min-h-screen space-y-2 grid grid-cols-5 gap-6 mx-auto items-stretch p-10">
            <div className="navbar fixed top-0 left-0 w-full z-index-9999 mb-50 padding-top-60 bg-yellow-50 text-gray-800 shadow-md px-6 py-2 flex justify-between items-center absolute">
            <div className="flex-1 flex items-center gap-6">
                <button onClick={() => navigate("/meowstudy/")} className="text-gray-800 font-bold text-2xl font-sans ml-30 cursor-pointer p-2">NOTE MEOW FOR STUDY</button>
<button onClick={() => navigate("/meowstudy/")} className="text-gray-800 font-semibold text-xl font-sans ml-30 cursor-pointer p-2">RECENT NOTES</button>
<button onClick={() => navigate("/meowstudy/")} className="text-gray-800 font-semibold text-xl font-sans ml-30 cursor-pointer p-2">CATEGORIES</button>
<button onClick={() => navigate("/meowstudy/")} className="text-gray-800 font-semibold text-xl font-sans ml-30 cursor-pointer p-2">RECENT DELETE</button>            
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
{/* Main Content */}
      <main className="bg-yellow-50 p-10 h-full min-h-[500px] col-span-4 flex flex-col ">
        {/* Form nhập ghi chú có tiêu đề + nội dung */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Create a New Note</h1>
        <div className="bg-white p-6 shadow-lg rounded-xl w-[95%] md:w-[80%] mx-auto flex flex-col items-center space-y-4">
          {/* Nhập tiêu đề */}
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter note title..."
            className="w-full p-3 border-2 rounded-md text-gray-800 bg-yellow-50 focus:ring-2 focus:ring-blue-500 shadow-sm" />

          {/* Nhập nội dung */}
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder="Write note content..."
            className="w-full p-3 border-2 rounded-md text-gray-800 bg-yellow-50 focus:ring-2 focus:ring-blue-500 shadow-sm"
            rows="4"
          ></textarea>

          {/* Các tùy chọn - Xếp gọn vào một khung */}
          <div className="flex flex-wrap justify-between items-center gap-6 w-full mt-4 p-6 rounded-lg bg-gray-100 shadow-md">

            {/* Nút chọn ảnh */}
            <label className="flex items-center space-x-2 cursor-pointer bg-white px-4 py-2 rounded-md hover:bg-gray-200 shadow-sm text-gray-700">
              📷 Photo
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>

            {/* Nút chọn màu */}
            <label className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white hover:bg-gray-200 shadow-sm text-gray-700">
              🎨 Color:
              <input type="color" value={noteColor} onChange={(e) => setNoteColor(e.target.value)} className="cursor-pointer border rounded-md w-8 h-8" />
            </label>

            {/* Nút chọn tag */}
            <div className="flex items-center p-3 space-x-2 px-4 py-2 rounded-md bg-white hover:bg-yellow-200 shadow-sm text-gray-700">
              🏷 Tag:
              <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)} className="px-3 py-2 bg-yellow-50 rounded-md border text-gray-700">
                <option value="" className="p-3">Choose tag</option>
                {tags.map((tag, index) => (
                  <option key={index} value={tag}>{tag}</option>
                ))}
              </select>
              <button onClick={addNewTag} className="px-3 py-2 bg-yellow-50 text-gray-800 rounded-md hover:bg-rose-100 shadow-md">➕ Add Tag</button>
            </div>

            {/* Nút lưu ghi chú */}
            <button onClick={addNote} className="bg-yellow-50 text-gray-800 px-5 py-3 rounded-md hover:bg-rose-100 shadow-lg flex justify-center items-center">💾 Save Note</button>
          </div>

          {/* Hiển thị ảnh nếu có */}
          {newImage && <img src={newImage} alt="Preview" className="mt-4 rounded-lg max-h-[250px] object-cover shadow-md" />}
        </div>
        </main>
        </div>
    );
};
export default Create;