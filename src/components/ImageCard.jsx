// src/components/ImageCard.jsx
import React from "react";

const ImageCard = React.memo(({ image, onRate, onApprove, onReject }) => {
  const statusClasses =
    image.status === "approved"
      ? "border-green-500 bg-green-50"
      : image.status === "rejected"
      ? "border-red-500 bg-red-50"
      : "border-gray-300 bg-white";

  return (
    <div className={`border-2 ${statusClasses} rounded-lg shadow-md p-4 m-4 w-64 hover:scale-105 transition-transform will-change-transform`}>
      <img src={image.url} alt={image.title} className="rounded-md w-full h-40 object-cover mb-3" />
      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
      <p className="mb-2 text-yellow-600 font-medium">Current Rating: {image.rating}⭐</p>

      <div className="flex justify-center mb-2 flex-wrap">
        {[1,2,3,4,5].map(num => (
          <button
            key={num}
            onClick={() => onRate(image.id, num)}
            className="bg-yellow-400 text-white rounded px-2 py-1 mx-1 my-1 hover:bg-yellow-500 transition"
          >
            {num}⭐
          </button>
        ))}
      </div>

      <div className="flex justify-center flex-wrap">
        <button onClick={() => onApprove(image.id)} className="bg-green-500 text-white px-3 py-1 rounded mx-1 my-1 hover:bg-green-600 transition">
          Approve ✅
        </button>
        <button onClick={() => onReject(image.id)} className="bg-red-500 text-white px-3 py-1 rounded mx-1 my-1 hover:bg-red-600 transition">
          Reject ❌
        </button>
      </div>
    </div>
  );
});

export default ImageCard;