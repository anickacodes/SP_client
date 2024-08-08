import { useState } from "react";
import { Form } from "react-router-dom";

const SearchBar = () => {
  const [search, onSearch] = useState("");

  function handleChange() {
    // handle text change
  }

  function handleSubmit() {
    // handles search submission
  }
  return (
    <div className="searchbar_container">
      <form>
        <legend>
            <input type='text' />
        </legend>
      <button>Search🔎</button>

      </form>
    </div>
  );
};

export default SearchBar;
