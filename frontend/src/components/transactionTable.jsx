import React from "react";
import "./App.css";
import PerPage from "./perPage";

const TransactionTable = ({
  transactions,
  onNextPage,
  onPrevPage,
  page,
  selectedPerPage,
  onChange,
}) => {
  // Log the transactions prop to the console
  console.log(transactions); // Inspect the structure of the transactions array

  return (
    <div className="m-5">
      <div className="card">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transactions</h2>
        <div className="table-container">
          <table className="min-w-full text-center">
            <thead>
              <tr>
                <th className="text-sm font-medium text-gray-700 px-6 py-3">ID</th>
                <th className="text-sm font-medium text-gray-700 px-6 py-3">Title</th>
                <th className="text-sm font-medium text-gray-700 px-6 py-3">Description</th>
                <th className="text-sm font-medium text-gray-700 px-6 py-3">Price</th>
                <th className="text-sm font-medium text-gray-700 px-6 py-3">Category</th>
                <th className="text-sm font-medium text-gray-700 px-6 py-3">Sold</th>
                <th className="text-sm font-medium text-gray-700 px-6 py-3">Image</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction) => (
                  <tr className="border-b hover:bg-gray-100" key={transaction.id}>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4">{transaction.id}</td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4">{transaction.title}</td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4">{transaction.description}</td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4">${transaction.price.toFixed(2)}</td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4">{transaction.category}</td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4">{transaction.sold ? "YES" : "NO"}</td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4">
                      <img src={transaction.image} alt={transaction.title} className="h-16 w-16 object-cover" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-sm text-gray-900 font-medium px-6 py-4">
                    No transactions available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-row justify-between font-bold mx-5 my-10">
        <div>Page No: {page}</div>
        <div className="space-x-3">
          <button className="button" onClick={onPrevPage} disabled={page === 1}>
            Previous
          </button>
          <span>-</span>
          <button className="button" onClick={onNextPage}>
            Next
          </button>
        </div>
        <div>
          <PerPage selectedPerPage={selectedPerPage} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
