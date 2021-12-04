import React, { useState } from "react";
import { loginUser } from "./LoginUser.jsx";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isToken, setToken] = React.useState("");
  const [isAuth, setIsAuth] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    loginUser({ email, password })
      .then((res) => {
        setIsAuth(true);
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
        console.log(2);
        setIsError(true);
      })
      .finally(() => {
        console.log(4);
        setIsLoading(false);
      });
    // console.log(3)
  };

  if (isAuth) {
    console.log("Vxc");
    return (
      <div>
        <h1>Welcome to the dashboard</h1>
        <h1> Token is {isToken}</h1>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* {isError && "something is wrong"} */}
      <div>
        <label>
          email :{" "}
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          password :{" "}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </label>
      </div>
      <br />
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
export { Login };
