import { FaArrowLeft, FaInfoCircle } from 'react-icons/fa'
import { bodySystemColors } from '../utils/constants'

function DiagnosesList({ diagnoses, selectedSymptoms, onDiagnosisSelect, onBack }) {
  // Function to get color based on confidence score
  const getConfidenceColor = (score) => {
    if (score >= 75) return 'var(--success-500)'
    if (score >= 50) return 'var(--warning-500)'
    return 'var(--accent-600)'
  }

  return (
    <div className="card">
      <div className="flex items-center gap-4 mb-4">
        <button className="outlined" onClick={onBack}>
          <FaArrowLeft />
        </button>
        <h2 className="mb-0">Potential Diagnoses</h2>
      </div>
      
      <div className="mb-4">
        <div className="p-3 bg-neutral-100 rounded-lg mb-4">
          <div className="flex items-center gap-2 mb-2">
            <FaInfoCircle color="var(--primary-600)" />
            <span className="font-medium">Selected Symptoms</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map(symptom => (
              <div 
                key={symptom.id}
                className="badge"
                style={{
                  backgroundColor: bodySystemColors[symptom.systems[0]]?.bg || 'var(--primary-100)',
                  color: bodySystemColors[symptom.systems[0]]?.text || 'var(--primary-800)'
                }}
              >
                {symptom.name}
              </div>
            ))}
          </div>
        </div>
        
        {diagnoses.length === 0 ? (
          <div className="text-center p-6">
            <p className="text-neutral-500">No diagnoses could be generated. Please select more symptoms.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {diagnoses.map(diagnosis => (
              <div 
                key={diagnosis.id}
                className="card p-4 cursor-pointer"
                style={{ boxShadow: 'var(--shadow-sm)' }}
                onClick={() => onDiagnosisSelect(diagnosis)}
              >
                <div className="flex justify-between items-start">
                  <h3 className="mb-2">{diagnosis.name}</h3>
                  <div 
                    className="badge"
                    style={{ 
                      backgroundColor: 'var(--neutral-100)', 
                      color: getConfidenceColor(diagnosis.confidenceScore) 
                    }}
                  >
                    <span>{diagnosis.confidenceScore}% match</span>
                  </div>
                </div>
                
                <p className="text-sm text-neutral-600 mb-3">{diagnosis.description}</p>
                
                <div>
                  <div className="mb-2 text-sm font-medium">Matching Symptoms:</div>
                  <div className="flex flex-wrap gap-2">
                    {diagnosis.matchingSymptoms.map((symptomId, index) => {
                      const symptom = selectedSymptoms.find(s => s.id === symptomId)
                      return symptom ? (
                        <div 
                          key={index}
                          className="badge success"
                        >
                          {symptom.name}
                        </div>
                      ) : null
                    })}
                  </div>
                </div>
                
                {diagnosis.missingSymptoms.length > 0 && (
                  <div className="mt-3">
                    <div className="mb-2 text-sm font-medium">Common Associated Symptoms:</div>
                    <div className="flex flex-wrap gap-2">
                      {diagnosis.missingSymptoms.slice(0, 3).map((symptom, index) => (
                        <div 
                          key={index}
                          className="badge"
                          style={{ 
                            backgroundColor: 'var(--neutral-100)', 
                            color: 'var(--neutral-600)' 
                          }}
                        >
                          {symptom}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <button 
                  className="primary w-full mt-4"
                  onClick={(e) => {
                    e.stopPropagation()
                    onDiagnosisSelect(diagnosis)
                  }}
                >
                  View Investigations
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DiagnosesList