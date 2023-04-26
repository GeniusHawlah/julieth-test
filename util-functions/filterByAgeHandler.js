export default function filterByAge({
  selectedAgeRange,
  originalUserList,
  setUsers,
  users,
}) {
  if (selectedAgeRange === []) {
    setUsers(originalUserList);
    return;
  }
  let stringValue = selectedAgeRange;
  let arrayValue = stringValue.split(",").map(Number);
  console.log(arrayValue[1]);
  // return
  const filteredUsers = originalUserList.filter(
    (user) => user.dob.age >= arrayValue[0] && user.dob.age <= arrayValue[1]
  );
  setUsers(filteredUsers);
  console.log(filteredUsers);
}
