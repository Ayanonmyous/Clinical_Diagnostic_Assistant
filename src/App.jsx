import { useState, useEffect } from 'react'
import Header from './components/Header'
import PatientInfo from './components/PatientInfo'
import SymptomSelector from './components/SymptomSelector'
import DiagnosesList from './components/DiagnosesList'
import InvestigationsList from './components/InvestigationsList'
import Footer from './components/Footer'
import { calculateDiagnoses } from './utils/diagnosisEngine'

function App() {
  const [patientData, setPatientData] = useState({
    age: '',
    gender: '',
    medicalHistory: ''
  })
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [diagnoses, setDiagnoses] = useState([])
  const [selectedDiagnosis, setSelectedDiagnosis] = useState(null)
  const [activeView, setActiveView] = useState('symptoms') // symptoms, diagnoses, investigations

  // Update diagnoses whenever symptoms change
  useEffect(() => {
    if (selectedSymptoms.length > 0) {
      const calculatedDiagnoses = calculateDiagnoses(selectedSymptoms, patientData)
      setDiagnoses(calculatedDiagnoses)
    } else {
      setDiagnoses([])
      setSelectedDiagnosis(null)
    }
  }, [selectedSymptoms, patientData])

  // When a diagnosis is selected, switch to investigations view
  useEffect(() => {
    if (selectedDiagnosis) {
      setActiveView('investigations')
    }
  }, [selectedDiagnosis])

  const handleSymptomSelect = (symptom) => {
    if (selectedSymptoms.some(s => s.id === symptom.id)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s.id !== symptom.id))
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom])
    }
  }

  const handleDiagnosisSelect = (diagnosis) => {
    setSelectedDiagnosis(diagnosis)
  }

  const handlePatientDataChange = (data) => {
    setPatientData({...patientData, ...data})
  }

  const handleViewChange = (view) => {
    setActiveView(view)
  }

  const handleReset = () => {
    setSelectedSymptoms([])
    setDiagnoses([])
    setSelectedDiagnosis(null)
    setActiveView('symptoms')
  }

  return (
    <div className="app-container">
      <Header 
        onViewChange={handleViewChange} 
        activeView={activeView}
        symptomsCount={selectedSymptoms.length}
        diagnosesCount={diagnoses.length}
      />
      
      <main className="container">
        {activeView === 'symptoms' && (
          <div className="fade-in">
            <PatientInfo 
              patientData={patientData} 
              onPatientDataChange={handlePatientDataChange} 
            />
            <SymptomSelector 
              selectedSymptoms={selectedSymptoms} 
              onSymptomSelect={handleSymptomSelect}
              onProceed={() => setActiveView('diagnoses')}
              canProceed={selectedSymptoms.length > 0}
            />
          </div>
        )}
        
        {activeView === 'diagnoses' && (
          <div className="fade-in">
            <DiagnosesList 
              diagnoses={diagnoses}
              selectedSymptoms={selectedSymptoms}
              onDiagnosisSelect={handleDiagnosisSelect}
              onBack={() => setActiveView('symptoms')}
            />
          </div>
        )}
        
        {activeView === 'investigations' && selectedDiagnosis && (
          <div className="fade-in">
            <InvestigationsList 
              diagnosis={selectedDiagnosis}
              onBack={() => setActiveView('diagnoses')}
            />
          </div>
        )}

        <div className="flex justify-between mt-4">
          <button 
            className="outlined" 
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App