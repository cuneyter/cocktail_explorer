import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="w-30 mv3 pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
