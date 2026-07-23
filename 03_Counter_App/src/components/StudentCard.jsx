import React from "react";

export default function StudentCard({ student }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "#fafafa",
      }}
    >
      <h3>{student.name}</h3>

      <p>
        <strong>Age:</strong> {student.age}
      </p>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Grade:</strong> {student.grade}
      </p>
    </div>
  );
}