import React, { useState, useRef, useEffect, forwardRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const CustomQuill = forwardRef((props, ref) => (
  <ReactQuill {...props} forwardedRef={ref} />
));

const Create = () => {
  const navigate = useNavigate();
  const quillRef = useRef(null);
  const [content, setContent] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);

  const handleSave = () => {
  if (content.trim() || images.length > 0) {
    const noteData = { text: content, images };
    localStorage.setItem("savedNote", JSON.stringify(noteData));
    setContent(""); // Reset nội dung sau khi lưu
    setImages([]);
    loadSavedData(); // Gọi lại hàm để cập nhật UI
  }
};
const loadSavedData = () => {
  const savedNote = JSON.parse(localStorage.getItem("savedNote"));
  if (savedNote) {
    setContent(savedNote.text);
    setImages(savedNote.images);
  }
};
useEffect(() => {
  loadSavedData();
}, []);

  function handleDelete(index) {
    setSavedNotes(savedNotes.filter((_, i) => i !== index));
  }
  const handleDeleteImage = (index) => {
  setImages(images.filter((_, i) => i !== index));
};

  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const imageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages([...images, ...imageUrls]);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: [] }], // Thêm chức năng chỉnh màu chữ
    ],
  };

  return (
    <div className="bg-[url('/photo/Arknights-1.jpg')] bg-cover bg-center bg-no-repeat h-500 min-h-screen ">
      <div className="navbar w-full bg-yellow-50 text-gray-800 shadow-md px-6 py-2 flex justify-between items-center mt-[-2%]">
  <div className="flex-1 flex items-center gap-6">
    <button onClick={() => navigate("/meowstudy/")} className="text-gray-800 font-bold text-2xl font-sans ml-30 cursor-pointer">NOTE MEOW FOR STUDY</button>
<button onClick={() => navigate("/meowstudy/create")} className="text-gray-800 font-semibold text-xl font-sans ml-30 cursor-pointer rounded-md p-2">All Notes</button>
     <button onClick={() => navigate("/meowstudy/categories")} className="text-gray-800 font-semibold text-xl font-sans ml-30 cursor-pointer rounded-md p-2">Categories</button>
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
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-9">
        <h2 className="text-5xl font-bold mb-4 text-gray-800">Create Note</h2>
        <div className="max-w-3xl mx-auto bg-yellow-30 p-6 rounded-lg shadow-lg border-4 border-yellow-300">
  {/* Header có DATE & TITLE */}
  <div className="flex justify-between mb-4">
    <input type="text" placeholder="DATE" className="bg-white text-gray-800 px-3 py-2 rounded border border-yellow-40"/>
    <input type="text" placeholder="TITLE" className="bg-white text-gray-800 px-3 py-2 rounded border border-yellow-40"/>
  </div>
        <CustomQuill
          ref={quillRef}
          value={content}
          onChange={setContent}
          className="text-gray-800"
        />
        {/* Khu vực thêm ảnh */}
  <input type="file" multiple onChange={handleImageUpload} className="mt-4"/>

  {/* Hiển thị ảnh đã tải lên */}
  <div className="grid grid-cols-3 gap-4 mt-4">
    {images.map((src, index) => (
      <img key={index} src={src} alt="Uploaded" className="rounded-lg shadow-md border border-yellow-30"/> 
    ))}
  </div>
  <button
        className="bg-yellow-50 px-4 py-2 mt-3 rounded text-gray-800"
        onClick={() => handleDeleteImage(index)}
      >
        ❌ Xóa
      </button>
</div>
       <div className="flex gap-3 mt-4">
          <button
            className="bg-yellow-100 px-4 py-2 text-gray-800 rounded"
           onClick={handleSave}
          >
            Save Note
          </button>
          <button
            className="bg-yellow-50 px-4 py-2 rounded text-gray-800"
            onClick={() => setContent("")}
          >
            Clear
          </button>
            
        </div>
        <div className="mt-6">
          <h3 className="text-5xl font-bold mb-2 text-gray-800">
            Saved Notes
          </h3>
          {savedNotes.map((note, index) => (
            <div
              key={index}
              className="bg-yellow-50 p-3 rounded-lg mb-3 relative"
            >
              <ReactQuill
                value={note}
                readOnly={true}
                theme="bubble"
                className="text-gray-800"
              />  
              <button
                className="absolute top-2 right-2 bg-rose-50 text-gray-800 px-2 py-1 border-none rounded"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Create;
