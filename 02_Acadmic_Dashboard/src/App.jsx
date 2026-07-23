import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

function App() {
  const students = [
    {
      id: 1,
      name: "Saiyam Kumar",
      age: 20,
      course: "Computer Science Engineering",
      grade: "A+",
    },
    {
      id: 2,
      name: "Stuti Sharma",
      age: 21,
      course: "Electronics Engineering",
      grade: "A",
    },
    {
      id: 3,
      name: "Krish",
      age: 19,
      course: "Information Technology",
      grade: "B+",
    },
  ];

  const showStudents = true;

  return (
    <div>
      <Header />

      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />

        <StudentList
          students={students}
          showStudents={showStudents}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;