import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";

const getTodo = () => {
  const config = {
    url: "http://localhost:3001/products",
    method: "get"
  };
  return axios(config);
};

const createTodo = (title) => {
  const payload = {
    titles: title,
    status:false,
  };
  const config = {
    method: "post",
    url: "http://localhost:3001/products",
    data: payload
  };
  return axios(config);
};
function Todo() {
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo()
      .then((res) => {
        setTodo(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onSubmit = (titles) => {
    setIsLoading(true);
    createTodo(titles)
      .then((res) => {
        setTodo([...todo, res.data]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (isLoading) {
    return <h3>...Loading</h3>;
  }
  return (
    <div >
      <TodoInput onSubmit={onSubmit} />
      <div>
        {todo.map((item) => (
          <h1 key={item.id}>{item.titles} </h1>
        ))}
      </div>
    </div>
  );
}
export default Todo;
