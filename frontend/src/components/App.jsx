import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MonthAndSearch from "./monthAndSearch";
import TransactionTable from "./transactionTable";
import Statistics from "./statistics";
import BarChart from "./barChart";

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [selectedPerPage, setSelectedPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchTransactions = async () => {
    try {
      const { data } = await axios.get(
        `https://roxiler-assignment-backend.vercel.app/api/transactions`,
        {
          params: {
            month: selectedMonth,
            search: searchText,
            page: currentPage,
            perPage: selectedPerPage,
          },
        }
      );
      setTransactions(data.transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleFilterChange = (setter) => (e) => {
    setter(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => Math.max(prevPage + direction, 1));
  };

  useEffect(() => {
    fetchTransactions();
  }, [selectedMonth, searchText, currentPage, selectedPerPage]);

  return (
    <div className="bg-[#edf6f6] min-h-screen">
      <div className="container centered">
        <div className="dashboard-header">
          <div className="dashboard-circle">
            <p className="text-[#464646] font-bold text-xl text-center">
              Transaction
              <br />
              Dashboard
            </p>
          </div>
        </div>

        <MonthAndSearch
          value={searchText}
          onSearchChange={handleFilterChange(setSearchText)}
          onClear={() => setSearchText("")}
          selectedMonth={selectedMonth}
          onMonthChange={handleFilterChange(setSelectedMonth)}
        />
        <TransactionTable
          transactions={transactions}
          onNextPage={() => handlePageChange(1)}
          onPrevPage={() => handlePageChange(-1)}
          selectedPerPage={selectedPerPage}
          onChange={handleFilterChange(setSelectedPerPage)}
          page={currentPage}
        />
        <hr />
        <Statistics selectedMonth={selectedMonth} />
        <hr />
        <BarChart selectedMonth={selectedMonth} />
      </div>
    </div>
  );
};

export default App;
