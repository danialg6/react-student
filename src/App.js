import React, { useEffect, useState, useContext } from "react";
import { Context as StudentContext } from "./context/StudentContext";

import Header from "./components/Header";
import Student from "./components/Student";

function App() {
  const { state, submit, loadStudents } = useContext(StudentContext);

  const [fullname, setFullname] = useState("");

  useEffect(() => {
    loadStudents(
      localStorage.getItem("students")
        ? JSON.parse(localStorage.getItem("students"))
        : []
    );
  }, []);

  return (
    <>
      {state.fullname ? (
        <div>
          <Header />
          <Student />
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="name"
            placeholder="fullname"
            onChange={(event) => {
              setFullname(event.target.value);
            }}
          />
          <button
            onClick={() => {
              submit(fullname);
            }}
          >
            submit
          </button>
        </div>
      )}
    </>
  );
}

export default App;
