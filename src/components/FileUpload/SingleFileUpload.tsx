"use client";
// components/SingleFileUpload.tsx
import React, { useCallback, useState } from "react";
import Image from "next/image";
import UploadIcon from "@mui/icons-material/Upload";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import "./SingleFileUpload.scss";
const SingleFileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      console.log(event.target.files);
      console.table(event.target.files);
      console.log(event.target.files[0]);
      console.table(event.target.files[0]);
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    },
    []
  );

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files && event.dataTransfer.files[0];
    if (file) {
      console.log(event.dataTransfer.files);
      console.table(event.dataTransfer.files);
      console.log(event.dataTransfer.files[0]);
      console.table(event.dataTransfer.files[0]);
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  }, []);

  return (
    <div
      className="file-upload"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <label htmlFor="file-input" className="upload-label">
        {selectedFile
          ? selectedFile.name
          : "Choose a Single file or drag it here"}
        {selectedFile ? "" : <UploadIcon />}
      </label>
      <input
        id="file-input"
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {selectedFile && (
        <div className="preview-container">
          <IconButton
            sx={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              zIndex: 999,
            }}
            onClick={() => {
              setPreviewURL(null);
              setSelectedFile(null);
            }}
          >
            <CloseIcon sx={{ color: "blue", fontSize: "10px" }} />
          </IconButton>
          <Image
            src={previewURL as string}
            alt="Preview"
            height={100}
            width={100}
            objectFit="cover"
          />
        </div>
      )}
    </div>
  );
};

export default SingleFileUpload;
