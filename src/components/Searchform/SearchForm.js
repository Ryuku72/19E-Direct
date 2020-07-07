import React from "react";
import "./style.css"

function SearchForm(props) {
  return (
    <div className="flex w-full z-20">
    <form id="create-course-form" className="w-3/5 inline-flex">
      <div className="form-group inline-flex w-full h-10">
        <label htmlFor="employee" className="inline-flex text-base items-end"></label>
        <div className="border-2 w-2/3 mr-2 shadow-lg p-1 inline-flex align-middle items-center">
        <div className="border-r-2 h-full w-1/12 inline-flex justify-center items-center">
        <i className="fas fa-project-diagram mr-2"></i>
        </div>
        <input
          value={props.search}
          onChange={props.onHandleInputChange}
          name="employee"
          list="employees"
          type="text"
          placeholder="Search database..."
          id="employee"
          className="w-full h-full px-2 ml-2 outline-none"
        />
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li className="">
        <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >
          One
          </a></li>
      </ul>
        </div>
        <datalist id="employees">
          {props.name.map(result => (
            <option value={result} key={result} />
          ))} 
        </datalist>

  <div className="dropdown relative">
    <button className="bg-pink-300 text-gray-700 font-semibold py-2 px-4 rounded inline-block items-center">
     Sort
    </button>
    <ul className="dropdown-menu absolute hidden text-gray-700 pt-2">
      <li className="">
        <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >
          Department
          </a></li>
      <li className="">
        <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
          Role</a></li>
      <li className="">
        <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
          Salary</a></li>
    </ul>
  </div>

  <div className="ml-2 dropdown relative">
    <button className="bg-yellow-300 text-gray-700 font-semibold py-2 px-4 rounded inline-block items-center">
      Order
    </button>
    <ul className="dropdown-menu absolute hidden text-gray-700 pt-2">
      <li className="">
        <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >
          Ascending
          </a></li>
      <li className="">
        <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
          Descending</a></li>
    </ul>
  </div>

        <button type="submit" 
        onClick={props.onHandleFormSubmit} 
        className="mx-2 bg-green-300 text-gray-700 font-semibold py-2 px-4 rounded inline-block items-center">
          Search
        </button>

        <button type="reset" className="bg-purple-300 text-gray-700 font-semibold py-2 px-4 rounded inline-block items-center" onClick={props.clearForm}>Reset</button>
      </div>
    </form>

{/* Alerts */}
    <div className="w-2/5 inline-flex justify-end h-10">
    <div
      role="alert"
      className="mx-2 flex justify-center rounded transition duration-700 ease-out" style={{...props.alert}}>
        <p className="bg-red-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
      {props.children}
      </p>
    </div>
    <div
      role="alert"
      className="flex justify-center rounded transition duration-700 ease-out" style={{...props.style}}>
        <p 
    className="bg-orange-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center ">## Search Result: {props.length} Entries</p>
    </div>
    </div>
    </div>
  );
}

export default SearchForm;
