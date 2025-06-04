import { useState } from 'react'

function PatientInfo({ patientData, onPatientDataChange }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    onPatientDataChange({ [name]: value })
  }

  return (
    <div className="card mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="mb-0">Patient Information</h2>
        <button 
          className="outlined"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>
      
      {isExpanded && (
        <div className="grid gap-4 fade-in">
          <div>
            <label htmlFor="age" className="block mb-2 font-medium">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={patientData.age}
              onChange={handleChange}
              placeholder="Enter patient age"
              min="0"
              max="120"
            />
          </div>
          
          <div>
            <label htmlFor="gender" className="block mb-2 font-medium">Gender</label>
            <select
              id="gender"
              name="gender"
              value={patientData.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="medicalHistory" className="block mb-2 font-medium">Medical History</label>
            <textarea
              id="medicalHistory"
              name="medicalHistory"
              value={patientData.medicalHistory}
              onChange={handleChange}
              placeholder="Enter relevant medical history"
              rows="3"
              className="w-full p-2 border border-neutral-300 rounded"
            ></textarea>
          </div>
        </div>
      )}
      
      {!isExpanded && (
        <div className="text-neutral">
          <p className="mb-0">
            {patientData.age ? `Age: ${patientData.age} years` : 'Age: Not specified'} 
            {patientData.gender ? ` • Gender: ${patientData.gender.charAt(0).toUpperCase() + patientData.gender.slice(1)}` : ''}
          </p>
        </div>
      )}
    </div>
  )
}

export default PatientInfo