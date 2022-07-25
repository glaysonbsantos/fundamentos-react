import students from "../../data/students";
import React from "react";

export default (props) => {
  const studentsLi = students.map((student) => {
    return (
      <li key={student.id}>
        {student.id}) {student.name} -{">"} {student.grade}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0 }}>{studentsLi}</ul>
    </div>
  );
};
