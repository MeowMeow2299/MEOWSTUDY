import React from "react"

const Recent = () => {
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
  return (
   <div>
    
   </div>
);
};

export default Recent;