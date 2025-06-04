import { useState } from 'react'
import { FaSearch, FaPlus, FaTimes } from 'react-icons/fa'
import { symptoms } from '../data/symptoms'
import { bodySystemColors } from '../utils/constants'

function SymptomSelector({ selectedSymptoms, onSymptomSelect, onProceed, canProceed }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeSystem, setActiveSystem] = useState('all')
  
  const bodySystems = [
    { id: 'all', name: 'All Systems' },
    { id: 'cardiovascular', name: 'Cardiovascular' },
    { id: 'respiratory', name: 'Respiratory' },
    { id: 'gastrointestinal', name: 'Gastrointestinal' },
    { id: 'neurological', name: 'Neurological' },
    { id: 'musculoskeletal', name: 'Musculoskeletal' },
    { id: 'dermatological', name: 'Dermatological' },
    { id: 'endocrine', name: 'Endocrine' },
    { id: 'urinary', name: 'Urinary' }
  ]

  const filteredSymptoms = symptoms.filter(symptom => {
    const matchesSearch = symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          symptom.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSystem = activeSystem === 'all' || symptom.systems.includes(activeSystem)
    
    return matchesSearch && matchesSystem
  })

  return (
    <div className="card">
      <h2>Select Symptoms</h2>
      
      <div className="mb-4 relative">
        <div className="absolute left-3 top-3 text-neutral-500">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Search symptoms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <div className="overflow-auto mb-4">
        <div className="flex gap-2" style={{ flexWrap: 'nowrap' }}>
          {bodySystems.map(system => (
            <button
              key={system.id}
              className={`${
                activeSystem === system.id ? 'primary' : 'outlined'
              } text-sm whitespace-nowrap`}
              onClick={() => setActiveSystem(system.id)}
            >
              {system.name}
            </button>
          ))}
        </div>
      </div>
      
      {selectedSymptoms.length > 0 && (
        <div className="mb-4">
          <h3>Selected Symptoms</h3>
          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map(symptom => (
              <div 
                key={symptom.id}
                className="badge flex items-center gap-2"
                style={{
                  backgroundColor: bodySystemColors[symptom.systems[0]]?.bg || 'var(--primary-100)',
                  color: bodySystemColors[symptom.systems[0]]?.text || 'var(--primary-800)'
                }}
              >
                <span>{symptom.name}</span>
                <button 
                  onClick={() => onSymptomSelect(symptom)}
                  className="rounded-full bg-white p-1 text-xs"
                  style={{ lineHeight: 0 }}
                >
                  <FaTimes size={8} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mb-4">
        <h3>Common Symptoms</h3>
        <div className="grid gap-2">
          {filteredSymptoms.length === 0 ? (
            <p>No symptoms found matching your search.</p>
          ) : (
            filteredSymptoms.map(symptom => {
              const isSelected = selectedSymptoms.some(s => s.id === symptom.id)
              return (
                <div 
                  key={symptom.id}
                  className={`card p-3 flex items-center justify-between ${isSelected ? 'border-primary-500 border' : ''}`}
                  style={{ boxShadow: 'var(--shadow-sm)' }}
                >
                  <div>
                    <div className="font-medium">{symptom.name}</div>
                    <div className="text-sm text-neutral-500">{symptom.description}</div>
                    <div className="flex gap-2 mt-2">
                      {symptom.systems.map(system => (
                        <span 
                          key={system}
                          className="badge text-xs"
                          style={{
                            backgroundColor: bodySystemColors[system]?.bg || 'var(--primary-100)',
                            color: bodySystemColors[system]?.text || 'var(--primary-800)'
                          }}
                        >
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    className={`${isSelected ? 'accent' : 'primary'} ml-2`}
                    onClick={() => onSymptomSelect(symptom)}
                  >
                    {isSelected ? <FaTimes /> : <FaPlus />}
                  </button>
                </div>
              )
            })
          )}
        </div>
      </div>
      
      <div className="mt-4">
        <button 
          className="primary w-full"
          onClick={onProceed}
          disabled={!canProceed}
        >
          Generate Possible Diagnoses
        </button>
      </div>
    </div>
  )
}

export default SymptomSelector