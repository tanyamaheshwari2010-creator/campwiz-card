// src/App.jsx
import React, { useState } from "react";
import { images as initialImages } from "./components/data/images";
import ImageCard from "./components/ImageCard";

const ITEMS_PER_PAGE = 6; // Only 6 images per page for performance

function App() {
  const [images, setImages] = useState(initialImages.map(img => ({ ...img, status: "pending" })));
  const [currentPage, setCurrentPage] = useState(1);

  const handleRate = (id, rating) => {
    setImages(images.map(img => img.id === id ? { ...img, rating } : img));
  };

  const handleApprove = (id) => {
    setImages(images.map(img => img.id === id ? { ...img, status: "approved" } : img));
  };

  const handleReject = (id) => {
    setImages(images.map(img => img.id === id ? { ...img, status: "rejected" } : img));
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-700 p-6 flex flex-col items-center">
      <div className="flex flex-wrap justify-center">
        {paginatedImages.map(img => (
          <ImageCard
            key={img.id}
            image={img}
            onRate={handleRate}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="mt-4 flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i+1}
            onClick={() => setCurrentPage(i+1)}
            className={`px-3 py-1 rounded ${currentPage === i+1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {i+1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;