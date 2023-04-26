import { createContext, useEffect, useState } from "react";

const AllContext = createContext();

export function AllContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [originalUserList, setOriginalUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [selectedAgeRange, setSelectedAgeRange] = useState([]);
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedNationality, setSelectedNationality] = useState("All");

  const context = {
    users,
    originalUserList,
    loading,
    nameInput,
    selectedAgeRange,
    selectedGender,
    selectedNationality,
    // Demarcation
    setUsers,
    setOriginalUserList,
    setLoading,
    setNameInput,
    setSelectedAgeRange,
    setSelectedGender,
    setSelectedNationality,
  };

  useEffect(() => {}, []);

  return (
    <AllContext.Provider value={context}>{props.children}</AllContext.Provider>
  );

  //Other functions below
}

export default AllContext;
