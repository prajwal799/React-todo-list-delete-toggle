import axios from "axios";
import { useEffect, useState } from "react";
import TodoData from "./TodoData";
import TodoInput from "./TodoInput";

const getTodo = (page) => {
  const config = {
    method: "get",
    url: `http://localhost:3001/products?_page=${page}&_limit=2`
  };
  return axios(config);
};

const TodoDelete = (id) => {
  const config = {
    method: "delete",
    url: `http://localhost:3001/products/${id}`
  };
  return axios(config);
};

const ToggleUpdate = (id, status) => {
  if (status) {
    var f = false;
  } else {
    var f = true;
  }
  const config = {
    method: "patch",
    url: `http://localhost:3001/products/${id}`,
    data: {
      status: f
    }
  };
  return axios(config);
};
const updateTodo = (title) => {
  const payload = {
    titles: title,
    status: false
  };
  const config = {
    method: "post",
    url: `http://localhost:3001/products`,
    data: payload
  };
  return axios(config);
};
const Todo1 = () => {
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getTodo(page)
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => {
        setIsError(true);
      });
    setIsLoading(false);
  }, [page]);

  // function updatePage() {
  //     setPage(page+1);
  //     getTodo(page)
  // }
  function onSubmit(title) {
    setIsLoading(true);
    updateTodo(title)
      .then((res) => {
        setTodo([...todo, res.data]);
        console.log(res.data, "resdata");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }
  // Delete Tasks
  const handleDelete = (id) => {
    TodoDelete(id);
    getTodo()
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // ToggleStatus
  const ToggleStatus = (id, status) => {
    ToggleUpdate(id, status);
    getTodo()
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (isError) {
    return <h1>...Some Error</h1>;
  }
  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  return (
    <div className="TodoList">
      <TodoInput onSubmit={onSubmit} />
      {todo.map((item) => (
        <TodoData
          tasks={item}
          key={item.id}
          handleDelete={handleDelete}
          ToggleStatus={ToggleStatus}
        />
        // <h3 key={item.id}>
        //   {item.titles} {item.status ? "Done" : "Not Done"}
        //   <button onClick={() => ToggleStatus(item.id, item.status)}>
        //     Toggle
        //   </button>
        //   <button onClick={() => handleDelete(item.id)}>Delete</button>
        // </h3>
      ))}
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};
export default Todo1;
