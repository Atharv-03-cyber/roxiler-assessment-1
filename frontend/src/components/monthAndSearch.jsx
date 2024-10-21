import React from "react";

const MonthAndSearch = ({
  selectedMonth,
  onSearchChange,
  value,
  onMonthChange,
  onClear,
}) => {
  const months = [
    "January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October",
    "November", "December",
  ];

  return (
    <div className="flex flex-row justify-between items-center m-5">
      {/* Search Box */}
      <div className="flex flex-row items-center space-x-2 w-full md:w-2/3">
        <input
          className="bg-[#f8df8c] text-gray-800 font-semibold rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent flex-grow"
          type="text"
          value={value}
          onChange={onSearchChange}
          placeholder="Search transactions..."
        />
        <button className="button" onClick={onClear}>
          Clear
        </button>
      </div>

      {/* Month Selector */}
      <div className="w-1/3">
        <select
          className="bg-[#ebb840] text-gray-800 font-semibold rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
          value={selectedMonth}
          onChange={onMonthChange}
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MonthAndSearch;
