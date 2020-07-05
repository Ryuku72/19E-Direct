import React from "react";

function SearchForm(props) {
  return (
    <form className="search" id="create-course-form">
      <div className="form-group flex">
        <label htmlFor="employee" className="flex text-base items-end"></label>
        <div className="border-2 w-1/5 mr-2 shadow-lg p-1 flex align-middle items-center">
        <div className="border-r-2 h-full w-1/6 flex justify-center items-center">
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
          className="w-full px-2 ml-2 outline-none"
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
        <button type="reset" className="w-16 mx-2 p-1 bg-green-300 border-green-400 border-2 border-opacity-25 shadow-lg rounded font-mono text-xs content-end">Reset</button>
      </div>
    </form>
  );
}

export default SearchForm;
