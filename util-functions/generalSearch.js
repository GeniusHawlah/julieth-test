export default function generalSearch({
  nameInput,
  originalUserList,
  setUsers,
  users,
  selectedAgeRange,
  selectedGender,
  selectedNationality,
}) {
  var filteredUsers;

  // Check for all empty
  if (
    (!nameInput || nameInput.trim() === "") &&
    selectedAgeRange.length === 0 &&
    selectedGender === "All" &&
    selectedNationality === "All"
  ) {
    setUsers(originalUserList);
    return;
  }

  // EMPTY SEARCH BAR
  if (!nameInput || nameInput.trim() === "") {
    filteredUsers = originalUserList;
    setUsers(originalUserList);
  }
  // FILLED SEARCH BAR
  if (nameInput) {
    filteredUsers = originalUserList.filter(
      (user) =>
        user.name.first.toLowerCase().includes(nameInput.toLowerCase()) ||
        user.name.last.toLowerCase().includes(nameInput.toLowerCase()) ||
        (user.name.first.toLowerCase() + user.name.last.toLowerCase()).includes(
          nameInput.toLowerCase().replaceAll(" ", "")
        )
    );
    setUsers(filteredUsers);
    console.log({ NAME_INPUT: filteredUsers });
    //   return
  }

  // EMPTY AGE
  if (selectedAgeRange.length === 0) {
    console.log({ BLANK_AGE_RANGE: filteredUsers });
    setUsers(filteredUsers);
    //    return
  }
  // FILLED AGE
  if (selectedAgeRange.length !== 0) {
    let stringValue = selectedAgeRange;
    let arrayValue = stringValue.split(",").map(Number);
    filteredUsers = filteredUsers.filter(
      (user) => user.dob.age >= arrayValue[0] && user.dob.age <= arrayValue[1]
    );
    setUsers(filteredUsers);
    console.log({ AGE_RANGE_SELECTED: filteredUsers });
    //   return
  }

  // EMPTY GENDER
  if (selectedGender === "All") {
    setUsers(filteredUsers);
    console.log({ EMPTY_GENDER: filteredUsers });  
    //   return
  }

  // FILLED GENDER
  if (selectedGender !== "All") {
    filteredUsers = filteredUsers.filter(
      (user) => user.gender === selectedGender
    );
    console.log({ GENDER_SELECTED: filteredUsers });
    setUsers(filteredUsers);
  }

  // EMPTY NATIONALITY
  if (selectedNationality === "All") {
    setUsers(filteredUsers);
    console.log({ EMPTY_NATIONALITY: filteredUsers });
    //   return
  }

  // FILLED NATIONALITY
  if (selectedNationality !== "All") {
    filteredUsers = filteredUsers.filter(
      (user) => user.nat === selectedNationality
    );
    setUsers(filteredUsers);
    console.log({ NATIONALITY_SELECTED: filteredUsers });
    //   return
  }
}
