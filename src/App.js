import { Github } from "./Component/Github";
import "./styles.css";
import { Login } from "./Component/Login";
import Todo1 from "./Component4/Todo1.jsx";

export default function App() {
  return (
    <div className="App">
      <h1 className="Todo">Todo List</h1>
      {/* <Github /> */}
      {/* <Login /> */}
      <Todo1 />
    </div>
  );
}
