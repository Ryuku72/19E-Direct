import React from 'react';
import "./style.css"
import Button from "../Button/Button"

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
      <li>
        <a href='/#' className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >
          One
          </a></li>
      </ul>
        </div>
        <datalist id="employees">
          {props.name.map(result => (
            <option value={result} key={result} />
          ))} 
        </datalist>
            <Button style={{backgroundColor:"#90cdf4"}} title={props.order}>
            <ul className="dropdown-menu absolute pt-2 z-50">
            <li>
                <a href="/" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" name="Name" onClick={props.onHandleOrder} style={props.entry}>
                <i className="fas fa-font mx-2" name="Name"></i>Name
                  </a></li>
              <li>
                <a href="/" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" name="Department" onClick={props.onHandleOrder} style={props.department}>
                <i className="far fa-building mx-2" name="Department"></i>Department
                  </a></li>
              <li>
                <a href="/" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={props.onHandleOrder} style={props.role} name="Role" >
                <i className="fas fas fa-tools mx-2" name="Role"></i>Role</a></li>
              <li>
                <a href="/" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={props.onHandleOrder} style={props.manager} name="Manager">
                <i className="fas fa-user-tie mx-2" name="Manager"></i>Manager</a></li>
                <li>
                <a href="/" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={props.onHandleOrder} name="Salary" style={props.salary}>
                <i className="fas fa-wallet mx-2" name="Salary"></i>Salary</a></li>
            </ul>
            </Button>
            <Button style={{backgroundColor:"#a0aec0"}} title={props.sort}>

            <ul className="dropdown-menu absolute pt-2 z-50">
              <li>
                <a href="/" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={props.onHandleSort} name="Ascend" style={props.ascend}>
                  <i className="fas fa-arrow-up mx-2" aria-hidden="true" name="Ascend"></i>Ascend
                  </a></li>
              <li>
                <a href="/" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={props.onHandleSort} name="Descend" style={props.descend}>
                <i className="fas fa-arrow-down mx-2" aria-hidden="true" name="Descend"></i>Descend</a></li>
            </ul>
            </Button>
            <button type="submit" onClick={props.onHandleFormSubmit} 
        className="mr-2 w-32 bg-green-300 text-gray-700 font-semibold py-2 px-4 rounded inline-block items-center">
          Submit</button>

        <button type="reset" onClick={props.clearForm}
        className="mr-2 w-32 bg-purple-300 text-gray-700 font-semibold text- py-2 px-4 rounded inline-block items-center">
          Reset</button>

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
