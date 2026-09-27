function StudentList({ students }) {

  return (
    <div className="student-list-container">

      <h2>Student Lists!</h2>

      {students.length === 0 ? (

        <p className="no-students">
          No students added yet.
        </p>

      ) : (

        <div className="student-cards">

          {students.map((student, index) => (

            <div className="student-card" key={index}>

              <p>
                <strong>Fullname:</strong>{" "}
                {student.name}
              </p>

              <p>
                <strong>Student Number:</strong>{" "}
                {student.studentNumber}
              </p>

              <p>
                <strong>Course:</strong>{" "}
                {student.course}
              </p>

              <p>
                <strong>Course Description:</strong>{" "}
                {student.courseDescription}
              </p>

              <p>
                <strong>Year Level:</strong>{" "}
                {student.yearLevel}
              </p>

              <p>
                <strong>Sex:</strong>{" "}
                {student.sex}
              </p>

              <button className="details-button">
                View full details
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default StudentList;
