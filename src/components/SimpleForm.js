import { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    contact: "",
    email: "",
    course: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  return (
    <div className="card">
      <h2>Student Registration Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="department"
        placeholder="Enter Department"
        value={formData.department}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="contact"
        placeholder="Enter Contact Number"
        value={formData.contact}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={formData.course}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>

      {submittedData && (
        <div style={{ marginTop: "15px" }}>
          <h3>Submitted Details</h3>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Department:</b> {submittedData.department}</p>
          <p><b>Contact:</b> {submittedData.contact}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Course:</b> {submittedData.course}</p>
        </div>
      )}
    </div>
  );
}

export default SimpleForm;
