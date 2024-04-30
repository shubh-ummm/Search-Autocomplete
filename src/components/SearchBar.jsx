import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Styles.css";

const SearchBar = ({ setResult }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      const result = data.users.filter((user) => {
        return (
          user &&
          (user.firstName.toLowerCase().includes(input.toLowerCase()) ||
            user.lastName.toLowerCase().includes(input.toLowerCase()))
        );
      });
      setResult(result);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [input]);

  return (
    <>
      {loading && <div>Loading...Please Wait</div>}
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Type to Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
