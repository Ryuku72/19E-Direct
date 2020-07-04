import React from "react";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className=""
          placeholder="Name of Employee"
          id="employee"
        />
        {/* <datalist id="employees">
          {props.name.map(result => (
            <option value={result} key={result} />
          ))} 
        </datalist>*/}
        <button type="submit" onClick={props.handleFormSubmit} className="w-12 bg-blue-400">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
