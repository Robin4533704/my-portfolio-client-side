import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-t-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      {/* Optional message */}
      <p className="text-primary font-medium text-lg">{message}</p>
    </div>
  );
};

export default Loading;
