import axios from "axios";

function loginUser({ email, password }) {
  if (!email || !password) {
    return Promise.reject("email or Password is missing");
  }
  const config = {
    method: "post",
    data: {
      email,
      password
    },
    url: "https://reqres.in/api/login"
  };
  console.log(email, password);
  return axios(config);
}

export { loginUser };
