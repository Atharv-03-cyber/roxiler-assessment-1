import React from "react";

const PerPage = ({ selectedPerPage, onChange }) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 30];

  return (
    <div className="flex items-center space-x-2">
      <span className="font-medium text-gray-700">Per Page:</span>
      <select
        value={selectedPerPage}
        onChange={onChange}
        className="select"
      >
        {pages.map((page, index) => (
          <option key={index} value={page}>{page}</option>
        ))}
      </select>
    </div>
  );
};

export default PerPage;
