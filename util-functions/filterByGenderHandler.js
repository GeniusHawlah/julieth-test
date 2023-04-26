export default function filterByGender({selectedGender, originalUserList, setUsers}) {
    if (selectedGender === "All") {
      setUsers(originalUserList)
      return ;
  }

    const filteredUsers = originalUserList.filter((user) =>
      user.gender === selectedGender
    );
    setUsers(filteredUsers);
    console.log(filteredUsers);
  }