import React from "react";
import searchNames from "../util-functions/searchNamesHandler";

function SearchBar({ originalUserList, setUsers }) {
  return (
    <div action="" className=" md:flex justify-center md:space-x-5">
      <div className="text-center md:text-right text-base md:w-1/2 ">
        You can search for names:
      </div>{" "}
      <div className="md:w-[70%] flex space-x-2 justify-center md:justify-start">
        <input
          onChange={(e) => {
            searchNames({
              nameInput: e.target.value,
              originalUserList,
              setUsers
                          });
          }}
          className="w-[80%] md:w-[70%] border-2 rounded px-1 "
          type="text"
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default SearchBar;
