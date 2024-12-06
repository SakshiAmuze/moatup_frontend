import React, { useState } from "react";
import url from '../../env';
import './homeinvestor.css'
const Homeinvestor = () => {
  const [formData, setFormData] = useState({
    sector: "",
    investor: "",
    state: "",
    city: "",
  });

  // State-to-city mapping
  const stateCityMapping = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangaluru"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
  };

  // Sample investors for the dropdown
  const investors = ["Investor A", "Investor B", "Investor C", "Investor D"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { sector, investor } = formData;

    // Ensure required fields are provided
    if (!sector || !investor) {
      alert("Sector and Investor are required fields.");
      return;
    }

    try {
      const response = await fetch(`${url.apipath}investor/selectinvestor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Investor added successfully!");
        setFormData({ sector: "", investor: "", state: "", city: "" }); // Reset form
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while adding the investor.");
    }
  };

  return (
    <div className="home-investor">
      <h2 className="title">Select Investor</h2>
      <form className="investor-form" onSubmit={handleSubmit}>
        <div className="form-group1">
          {/* <label htmlFor="sector" className="form-label">Sector</label> */}
          <select
            id="sector"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            className="form-select1"
          >
            <option value="" className="investortitle">Select Sector</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>

        <div className="form-group">
          {/* <label htmlFor="investor" className="form-label">Investor</label> */}
          <select
            id="investor"
            name="investor"
            value={formData.investor}
            onChange={handleChange}
            className="form-select2"
          >
            <option value="" className="investortitle">Type of Investor</option>
            {investors.map((investor) => (
              <option key={investor} value={investor}>
                {investor}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          {/* <label htmlFor="state" className="form-label">State</label> */}
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-select3"
          >
            <option value="" className="investortitle">Select State</option>
            {Object.keys(stateCityMapping).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          {/* <label htmlFor="city" className="form-label">City</label> */}
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            disabled={!formData.state} // Disable city if no state is selected
            className="form-select4"
          >
            <option value="" className="investortitle">Select City</option>
            {/* Only display cities for the selected state */}
            {formData.state && stateCityMapping[formData.state] ? (
              stateCityMapping[formData.state].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))
            ) : (
              <option value="">No cities available</option>
            )}
          </select>
        </div>

        <p className="contactselected">150 contacts selected</p>
        <button type="submit" className="submit-btn">
           
          <p className="save">Save</p> 
        </button>
      </form>
    </div>
  );
};

export default Homeinvestor;