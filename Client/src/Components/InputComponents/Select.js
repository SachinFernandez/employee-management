import React from "react";

const Select = props => {
  return (
    <div className="mb-4 w-25">
      <select className="form-control p-1" name={props.name} onChange={props.onChange}>
        <option name={props.name} value="">
          {props.placeholder}
        </option>
        {props.optionList.map(option => {
          return (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
