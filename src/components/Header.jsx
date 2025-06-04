import { FaStethoscope, FaNotesMedical, FaFlask } from 'react-icons/fa'

function Header({ activeView, onViewChange, symptomsCount, diagnosesCount }) {
  return (
    <header className="bg-white shadow-md mb-6">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <FaStethoscope size={24} color="var(--primary-600)" />
            <h1 className="text-lg font-semibold mb-0">Clinical Diagnosis Assistant</h1>
          </div>
        </div>
        
        <nav className="flex mb-0 overflow-hidden">
          <button 
            className={`flex items-center gap-2 py-3 px-4 border-b-2 transition-all ${
              activeView === 'symptoms' 
                ? 'border-primary-600 text-primary-600 font-medium' 
                : 'border-transparent text-neutral-500 hover:text-neutral-700'
            }`}
            onClick={() => onViewChange('symptoms')}
          >
            <FaNotesMedical />
            <span>Symptoms</span>
            {symptomsCount > 0 && (
              <span className="badge primary ml-2">{symptomsCount}</span>
            )}
          </button>
          
          <button 
            className={`flex items-center gap-2 py-3 px-4 border-b-2 transition-all ${
              activeView === 'diagnoses' 
                ? 'border-primary-600 text-primary-600 font-medium' 
                : 'border-transparent text-neutral-500 hover:text-neutral-700'
            } ${diagnosesCount === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => diagnosesCount > 0 && onViewChange('diagnoses')}
            disabled={diagnosesCount === 0}
          >
            <FaStethoscope />
            <span>Diagnoses</span>
            {diagnosesCount > 0 && (
              <span className="badge primary ml-2">{diagnosesCount}</span>
            )}
          </button>
          
          <button 
            className={`flex items-center gap-2 py-3 px-4 border-b-2 transition-all ${
              activeView === 'investigations' 
                ? 'border-primary-600 text-primary-600 font-medium' 
                : 'border-transparent text-neutral-500 hover:text-neutral-700'
            } ${activeView !== 'investigations' ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => activeView === 'investigations' && onViewChange('investigations')}
            disabled={activeView !== 'investigations'}
          >
            <FaFlask />
            <span>Investigations</span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header