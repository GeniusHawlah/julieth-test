export default function filterByNationality({
  selectedNationality,
  originalUserList,
  setUsers,
}) {
  if (selectedNationality === "All") {
    setUsers(originalUserList);
    return;
  }

  const filteredUsers = originalUserList.filter(
    (user) => user.nat === selectedNationality
  );
  setUsers(filteredUsers);
  console.log(filteredUsers);
}
