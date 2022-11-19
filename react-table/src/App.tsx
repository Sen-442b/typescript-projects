import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jenny Chan</td>
            <td>3 waterfood road</td>
            <td>333-962-7516</td>
            <td>jenny.chan@email.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
