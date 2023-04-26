export default function searchNames({
  nameInput,
  originalUserList,
  setUsers,
  users,
}) {
  if (!nameInput || nameInput.trim() === "") {
    setUsers(originalUserList);
    // return;
  }
  const filteredUsers = users.filter(
    (user) =>
      user.name.first.toLowerCase().includes(nameInput.toLowerCase()) ||
      user.name.last.toLowerCase().includes(nameInput.toLowerCase()) ||
      (user.name.first.toLowerCase() + user.name.last.toLowerCase()).includes(
        nameInput.toLowerCase().replaceAll(" ", "")
      )
  );
  setUsers(filteredUsers); 
  console.log(filteredUsers);
}
 