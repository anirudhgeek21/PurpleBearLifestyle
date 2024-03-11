// Alert.js
import React from "react";

const Alert = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-10 right-10 bg-green-200 px-6 py-4 rounded-md shadow-md z-50">
      <p className="text-green-800">{message}</p>
      
    </div>
  );
};

export default Alert;
