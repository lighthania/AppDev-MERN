import { useState } from "react";
import AddStudent from "./pages/AddStudent";
import StudentList from "./pages/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents((currentStudents) => [
      ...currentStudents,
      newStudent
    ]);
  };

  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-link">
            Home
          </a>

          <a href="#students" className="nav-link">
            Student Lists
          </a>

          <a href="#add-student" className="nav-link">
            Add Students
          </a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="home-section">
        <h1>Student Management System</h1>
      </section>

      {/* Add Student */}
      <section id="add-student" className="add-section">
        <AddStudent addStudent={addStudent} />
      </section>

      {/* Student List */}
      <section id="students" className="student-section">
        <StudentList students={students} />
      </section>

    </div>
  );
}

export default App;