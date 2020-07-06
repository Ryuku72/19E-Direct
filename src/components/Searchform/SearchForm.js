import React from "react";

function SearchForm(props) {
  return (
    <div className="flex w-full">
    <form id="create-course-form" className="w-full">
      <div className="form-group flex h-10">
        <label htmlFor="employee" className="flex text-base items-end"></label>
        <div className="border-2 w-2/3 mr-2 shadow-lg p-1 flex align-middle items-center">
        <div className="border-r-2 h-full w-1/12 flex justify-center items-center">
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
        </div>
        <datalist id="employees">
          {props.name.map(result => (
            <option value={result} key={result} />
          ))} 
        </datalist>
        <button type="submit" onClick={props.onHandleFormSubmit} className="w-16 p-1 mx-2 bg-blue-300 border-blue-500 border-2 border-opacity-25 shadow-lg rounded font-mono text-xs content-end">
          Search
        </button>
        <button type="reset" className="w-16 mx-2 p-1 bg-green-300 border-green-400 border-2 border-opacity-25 shadow-lg rounded font-mono text-xs content-end" onClick={props.clearForm}>Reset</button>
      </div>
    </form>
    <div
      role="alert"
      className="flex h-10 w-3/4 flex-col px-2 justify-center items-center align-middle rounded transition duration-700 ease-out" style={{...props.alert}}>
        <p className="bg-red-600 h-full flex justify-center items-center w-full rounded-lg text-gray-200 font-mono text-center text-xl">
      {props.children}
      </p>
    </div>
    <p 
    className="flex justify-center items-center px-2 bg-orange-600 w-3/4 h-10 rounded-lg text-gray-200 font-mono text-xl transition duration-700 ease-out" style={{...props.style}}>## Search Result: {props.length} Entries</p>
    </div>
  );
}

export default SearchForm;
