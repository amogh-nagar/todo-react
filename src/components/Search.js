import React, { useState, useEffect } from "react";
import List from "./List";
import axios from "axios";
const Search = () => {
  const [value, setvalue] = useState("");
  const [results, setresults] = useState([]);
  useEffect(() => {
    let timer = null;
    if (value) {
      timer = setTimeout(async () => {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: value,
          }, //Params will put this in URL and this axios.get function return an object
        });
        // console.log(response); //will not work if we don't put await, as axios.get is asynchronous function
        setresults(data.query.search);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return (
    <React.Fragment>
      <form className="ui form">
        <input
          type="text"
          placeholder="Search wikepedia...."
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
      </form>
      <List results={results} />
    </React.Fragment>
  );
};
export default Search;
