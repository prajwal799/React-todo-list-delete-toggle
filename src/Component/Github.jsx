import React, { useState } from "react";
import FetchUser from "./FetchUser";
const Github = () => {
  const [query, setQuery] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    FetchUser("masai")
      .then((res) => {
        setUser(res.data.items);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    setIsError(false);
    FetchUser(query)
      .then((res) => {
        setUser(res.data.items);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <h1>Github</h1>
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <button disabled={isLoading} onClick={handleClick}>
          {isLoading ? "isLoading" : "SEARCH"}
        </button>
      </div>
      {isError ? "Please fill the text" : null}
      <div>
        {user?.map((item) => (
          <div key={item.id} style={{ height: "120px" }}>
            <div
              style={{
                border: "1px solid black",
                height: "120px",
                display: "flex",
                width: "250px",
                margin: "10px auto"
              }}
            >
              <img
                src={item.avatar_url}
                alt="img"
                width="100px"
                height="100px"
              />
              <div style={{ marginLeft: "2%" }}>
                <p>{item.login}</p>
                <p>{item.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { Github };
