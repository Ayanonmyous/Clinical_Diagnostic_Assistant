import { FaArrowLeft, FaFlask, FaExclamationTriangle, FaNotesMedical } from 'react-icons/fa'

function InvestigationsList({ diagnosis, onBack }) {
  if (!diagnosis) return null

  return (
    <div className="card">
      <div className="flex items-center gap-4 mb-4">
        <button className="outlined" onClick={onBack}>
          <FaArrowLeft />
        </button>
        <h2 className="mb-0">Recommended Investigations</h2>
      </div>
      
      <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg mb-6">
        <h3 className="text-primary-700 mb-2">Diagnosis: {diagnosis.name}</h3>
        <p className="text-primary-700 mb-0">{diagnosis.description}</p>
      </div>
      
      {diagnosis.urgency && (
        <div className="p-4 bg-accent-50 border border-accent-200 rounded-lg mb-6 flex items-start gap-3">
          <div>
            <FaExclamationTriangle color="var(--accent-700)" size={20} />
          </div>
          <div>
            <h3 className="text-accent-700 mb-1">Urgency Level: {diagnosis.urgency}</h3>
            <p className="text-accent-700 mb-0">
              {diagnosis.urgencyDescription || 'Please consult with a healthcare professional immediately.'}
            </p>
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FaFlask color="var(--secondary-600)" />
          <h3 className="mb-0">Laboratory Tests</h3>
        </div>
        
        {diagnosis.investigations?.laboratory?.length > 0 ? (
          <div className="grid gap-3">
            {diagnosis.investigations.laboratory.map((test, index) => (
              <div 
                key={index} 
                className="p-3 bg-white border border-neutral-200 rounded-lg"
              >
                <div className="font-medium mb-1">{test.name}</div>
                <div className="text-sm text-neutral-600">{test.description}</div>
                {test.expectedResults && (
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Expected Results: </span> 
                    <span className="text-neutral-600">{test.expectedResults}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-neutral-500">No specific laboratory tests recommended.</p>
        )}
      </div>
      
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FaNotesMedical color="var(--secondary-600)" />
          <h3 className="mb-0">Imaging & Other Tests</h3>
        </div>
        
        {diagnosis.investigations?.imaging?.length > 0 ? (
          <div className="grid gap-3">
            {diagnosis.investigations.imaging.map((test, index) => (
              <div 
                key={index} 
                className="p-3 bg-white border border-neutral-200 rounded-lg"
              >
                <div className="font-medium mb-1">{test.name}</div>
                <div className="text-sm text-neutral-600">{test.description}</div>
                {test.findingsToLookFor && (
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Findings to Look For: </span> 
                    <span className="text-neutral-600">{test.findingsToLookFor}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-neutral-500">No specific imaging or other tests recommended.</p>
        )}
      </div>
      
      <div>
        <h3>Treatment Considerations</h3>
        <p className="text-neutral-600">
          {diagnosis.treatmentConsiderations || 
            'Treatment should be determined by a qualified healthcare professional after confirmation of diagnosis.'}
        </p>
      </div>
      
      <div className="p-3 bg-neutral-100 rounded-lg mt-6 text-sm text-neutral-600">
        <p className="mb-0">
          <strong>Disclaimer:</strong> This tool is for educational purposes only. 
          Always consult with a qualified healthcare professional for medical advice, 
          diagnosis, or treatment.
        </p>
      </div>
    </div>
  )
}

export default InvestigationsList