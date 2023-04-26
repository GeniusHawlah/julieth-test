import React from "react";
import AllCtx from "../util-functions/allCtx";
import filterByAge from "../util-functions/filterByAgeHandler";
import filterByGender from "../util-functions/filterByGenderHandler";
import filterByNationality from "../util-functions/filterByNationality";
import generalSearch from "../util-functions/generalSearch";

function Filters() {
  const {
    originalUserList,
    setUsers,
    users,
    selectedAgeRange,
    setSelectedAgeRange,
    selectedGender,
    setSelectedGender,
    setSelectedNationality,
    selectedNationality,
    nameInput,
  } = AllCtx();

  return (
    <div className=" sm:flex justify-center sm:space-x-5 space-y-5 sm:space-y-0 mt-5">
      {/* by age */}
      <div className="text-sm w-full">
        <p className="text-center">Filter by age</p>
        <div className="flex justify-center w-full">
          <select
            value={selectedAgeRange}
            className="w-[80%] sm:w-full border-2 rounded py-1 px-1 "
            onChange={(e) => {
              setSelectedAgeRange(e.target.value);
              // filterByAge({
              //   selectedAgeRange: e.target.value,
              //   originalUserList,
              //   setUsers,
              //   users,
              // });

              generalSearch({
                nameInput,
                originalUserList,
                setUsers,
                users,
                selectedAgeRange: e.target.value,
                selectedGender,
                selectedNationality,
              });
            }}
            name=""
            id=""
          >
            <option value={[]}>All Users</option>
            <option value={[1, 19]}>1-19(yo)</option>
            <option value={[20, 50]}>20-50(yo)</option>
            <option value={[51, Infinity]}>51(yo) and above</option>
          </select>
        </div>
      </div>
      {/* by gender */}
      <div className="text-sm w-full">
        <p className="text-center">Filter by gender</p>
        <div className="flex justify-center">
          <select
            value={selectedGender}
            className="w-[80%] sm:w-full border-2 rounded py-1 px-1 "
            onChange={(e) => {
              setSelectedGender(e.target.value);
              // filterByGender({
              //   selectedGender: e.target.value,
              //   originalUserList,
              //   setUsers,
              // });

              generalSearch({
                nameInput,
                originalUserList,
                setUsers,
                users,
                selectedAgeRange,
                selectedGender: e.target.value,
                selectedNationality,
              });
            }}
            name=""
            id=""
          >
            <option value="All">All Users</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      {/* by nationality */}
      <div className="text-sm w-full">
        <p className="text-center">Filter by nationality</p>
        <div className="flex justify-center">
          <select
            value={selectedNationality}
            className="w-[80%] sm:w-full border-2 rounded py-1 px-1 "
            onChange={(e) => {
              setSelectedNationality(e.target.value);
              // filterByNationality({
              //   selectedNationality: e.target.value,
              //   originalUserList,
              //   setUsers,
              // });

              generalSearch({
                nameInput,
                originalUserList,
                setUsers,
                users,
                selectedAgeRange,
                selectedGender,
                selectedNationality: e.target.value,
              });
            }}
            name=""
            id=""
          >
            <option value="All">All Users</option>
            <option value="US">USA</option>
            <option value="GB">England</option>
            <option value="AU">Australia</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
