import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import Users from "../components/Users";
import filterByAge from "../util-functions/filterByAgeHandler";
import filterByGender from "../util-functions/filterByGenderHandler";
import filterByNationality from "../util-functions/filterByNationality";
import searchNames from "../util-functions/searchNamesHandler";
import AllCtx from "../util-functions/allCtx";

export default function Home(props) {
  const {
    users,
    setUsers,
    originalUserList,
    setOriginalUserList,
    nameInput,
    setNameInput,
  } = AllCtx();

  // const [users, setUsers] = useState([]);
  // const [originalUserList, setOriginalUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [nameInput, setNameInput] = useState('')
  const [selectedAgeRange, setSelectedAgeRange] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedNationality, setSelectedNationality] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.randomuser.me/?results=20&nat=US,GB,AU"
        );

        if (!res.ok) {
          setLoading(false);
          setUsers([]);
          return;
        }

        const data = await res.json();
        setUsers(data.results);
        setOriginalUserList(data.results);
        // console.log(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setUsers([]);
        setOriginalUserList([]);
        console.log(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="font-sora text-[1.2rem] px-5 py-10 ">
      {/* SEARCH BAR */}
      <SearchBar />

      {/* FILTERS */}
      <Filters />

      {/* USERS */}
      <Users />

      {users.length === 0 && (
        <div className="mt-20 text-center text-red-600">
          {" "}
          No users to display!
        </div>
      )}
    </div>
  );
}
