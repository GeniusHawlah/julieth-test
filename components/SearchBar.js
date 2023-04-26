import React from "react";
import AllCtx from "../util-functions/allCtx";
import generalSearch from "../util-functions/generalSearch";
import searchNames from "../util-functions/searchNamesHandler";

function SearchBar() {
const {originalUserList, setUsers, setNameInput, users, nameInput, selectedAgeRange, selectedNationality, selectedGender} = AllCtx()

  return (
    <div action="" className=" md:flex justify-center md:space-x-5">
      <div className="text-center md:text-right text-base md:w-1/2 ">
        You can search for names:
      </div>{" "}
      <div className="md:w-[70%] flex space-x-2 justify-center md:justify-start">
        <input
          value={nameInput}
          // onKeyDown={(e) => {
          //   // console.log(e.key);
          //   if (e.key === 'Backspace') {
          //     setUsers(originalUserList)
          //   }
          // }}
          onChange={(e) => {
            setNameInput(e.target.value);
            // searchNames({
            //   setNameInput,
            //   nameInput: e.target.value,
            //   originalUserList,
            //   setUsers,
            //   users
            // });

            generalSearch({
              nameInput: e.target.value,
              originalUserList,
              setUsers,
              users,
              selectedAgeRange,
              selectedGender,
              selectedNationality,
            })
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
