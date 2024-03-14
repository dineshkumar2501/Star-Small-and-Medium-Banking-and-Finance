// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  });
  const [referenceNumber, setReferenceNumber] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit-form', formData);
      setReferenceNumber(response.data.referenceNumber);
      setFormData({
        field1: '',
        field2: '',
        field3: '',
        field4: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>KYC Verification Form</h1>
      <form onSubmit={handleSubmit}>
        <div class="col-12">
          <div class="row">
            <div class="col-3">
        <label>
          Name
        </label>
          <input type="text" name="field1" value={formData.field1} onChange={handleChange} />
        <br />
        </div>
        <label>
          Age
        </label>
          <input type="text" name="field2" value={formData.field2} onChange={handleChange} />
        <br />
        <label>
          Aadhar Number
        </label>
          <input type="text" name="field3" value={formData.field3} onChange={handleChange} />
        <br />
        <label>
          Pan Number
        </label>
          <input type="text" name="field4" value={formData.field4} onChange={handleChange} />
        <br />
        </div>
        <button type="submit">Submit</button>
        </div>
      </form>
      {referenceNumber && <p>Reference Number: {referenceNumber}</p>}
    </div>
  );
}

export default App;
