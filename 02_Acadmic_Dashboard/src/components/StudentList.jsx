import StudentCard from "./StudentCard";

function StudentList({ students, showStudents }) {
  return (
    <div
      style={{
        padding: "20px",
        flex: 1,
      }}
    >
      <h2>Student Records</h2>

      {showStudents ? (
        students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))
      ) : (
        <p>Student section is hidden.</p>
      )}
    </div>
  );
}

export default StudentList;