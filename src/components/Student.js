import React, { useEffect, useState, useContext } from "react";
import { Context as StudentContext } from "../context/StudentContext";

import NewStudent from "./NewStudent";

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
        <NewStudent />
      )}
    </div>
  );
};

export default Student;
