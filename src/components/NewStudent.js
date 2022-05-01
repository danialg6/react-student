import React, { useEffect, useState, useContext } from "react";
import { Context as StudentContext } from "../context/StudentContext";

const NewStudent = () => {
  const { state, add, remove } = useContext(StudentContext);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(state.students));
  }, [state.students]);

  const [list, setList] = useState(true);
  const [student, setStudent] = useState({});

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(event) => {
          setStudent({ ...student, name: event.target.value });
        }}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={(event) => {
          setStudent({ ...student, email: event.target.value });
        }}
      />
      <input
        type="text"
        name="id"
        placeholder="id"
        onChange={(event) => {
          setStudent({ ...student, id: event.target.value });
        }}
      />
      <button
        onClick={() => {
          if (!state.students.find((e) => e.id === student.id)) {
            add(student);
            let students = localStorage.getItem("students")
              ? JSON.parse(localStorage.getItem("students"))
              : [];
            students.push(student);
            localStorage.setItem("students", JSON.stringify(students));
          }
        }}
      >
        submit
      </button>
    </div>
  );
};

export default NewStudent;
