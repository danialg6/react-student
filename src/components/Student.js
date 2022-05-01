import React, { useEffect, useState, useContext } from "react";
import { Context as StudentContext } from "../context/StudentContext";

const Student = () => {
  const { state, add, remove } = useContext(StudentContext);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(state.students));
  }, [state.students]);

  const [list, setList] = useState(true);
  const [student, setStudent] = useState({});

  return (
    <div>
      <button
        onClick={() => {
          setList(true);
        }}
      >
        List Students
      </button>
      <button
        onClick={() => {
          setList(false);
        }}
      >
        Add New Student
      </button>

      {list ? (
        <div>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>ID</th>
                <th>delete</th>
              </tr>
              {state.students.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.id}</td>
                    <td>
                      <button
                        onClick={() => {
                          remove(item);
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Student;
