"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface textEditorProps {
  labelName?: string;
  className?: any;
}

const TextEditor = ({ labelName, className }: textEditorProps) => {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // Headers (h1, h2, h3, normal)
      [{ font: [] }], // Font family
      [{ size: ["small", false, "large", "huge"] }], // Font size
      ["bold", "italic", "underline", "strike"], // Formatting buttons
      [{ color: [] }, { background: [] }], // Text color and background color
      [{ script: "sub" }, { script: "super" }], // Subscript and Superscript
      [{ list: "ordered" }, { list: "bullet" }], // Ordered and unordered lists
      [{ indent: "-1" }, { indent: "+1" }], // Indentation
      [{ align: [] }], // Text alignment
      ["link", "image", "video"], // Insert link, image, video
      ["blockquote", "code-block"], // Blockquote and code block
      ["clean"], // Clear formatting
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <>
      <div>
        <label htmlFor="" className="mb-2 text-[#000000]">
          {labelName}
        </label>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className={`${className} quill_text_editor`}
          modules={modules}
          formats={formats}
        />
      </div>
    </>
  );
};

export default TextEditor;
