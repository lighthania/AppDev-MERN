function AddStudent({ addStudent }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const courseDescriptions = {
      BSIT: "Bachelor of Science in Information Technology",
      BSCS: "Bachelor of Science in Computer Science",
      BSIS: "Bachelor of Science in Information Systems"
    };

    const newStudent = {
      name: form.name.value,
      studentNumber: form.studentNumber.value,
      course: form.course.value,
      courseDescription: courseDescriptions[form.course.value],
      yearLevel: form.yearLevel.value,
      sex: form.sex.value
    };

    addStudent(newStudent);

    form.reset();

    alert("Student added successfully!");
  };

  return (
    <div className="form-container">

      <h2>Add Student</h2>

      <form onSubmit={handleSubmit} className="student-form">

        {/* Name */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            required
          />
        </div>

        {/* Student Number */}
        <div className="form-group">
          <label>Student Number</label>
          <input
            type="text"
            name="studentNumber"
            placeholder="Enter student number"
            required
          />
        </div>

        {/* Course */}
        <div className="form-group">
          <label>Course</label>

          <select name="course" required>
            <option value="">Select Course</option>
            <option value="BSIT">BSIT</option>
            <option value="BSCS">BSCS</option>
            <option value="BSIS">BSIS</option>
          </select>
        </div>

        {/* Year Level */}
        <div className="form-group">
          <label>Year Level</label>

          <select name="yearLevel" required>
            <option value="">Select Year Level</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

        {/* Sex */}
        <div className="form-group">
          <label>Sex</label>

          <select name="sex" required>
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
             <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="add-button">
          Add Student
        </button>

      </form>

    </div>
  );
}

export default AddStudent;