import { diagnoses } from '../data/diagnoses'
import { symptoms } from '../data/symptoms'

/**
 * Calculates potential diagnoses based on selected symptoms and patient data
 * @param {Array} selectedSymptoms - Array of selected symptom objects
 * @param {Object} patientData - Object containing patient information
 * @returns {Array} - Sorted array of potential diagnoses with confidence scores
 */
export const calculateDiagnoses = (selectedSymptoms, patientData) => {
  if (!selectedSymptoms.length) return []

  const selectedSymptomIds = selectedSymptoms.map(s => s.id)
  
  // Calculate potential diagnoses
  const potentialDiagnoses = diagnoses.map(diagnosis => {
    // Find matching symptoms
    const matchingSymptoms = diagnosis.symptomIds.filter(symptomId => 
      selectedSymptomIds.includes(symptomId)
    )
    
    // Calculate confidence score based on matching symptoms
    const matchRatio = matchingSymptoms.length / diagnosis.symptomIds.length
    const symptomRatio = matchingSymptoms.length / selectedSymptomIds.length
    
    // Weighted scoring - gives more importance to conditions that match most of their expected symptoms
    let confidenceScore = Math.round((matchRatio * 0.7 + symptomRatio * 0.3) * 100)
    
    // Only include diagnoses with at least one matching symptom
    if (matchingSymptoms.length === 0) return null
    
    // Apply modifiers based on patient data
    if (patientData) {
      // Age modifiers for specific conditions
      if (diagnosis.id === "d1" && patientData.age) { // Heart attack
        if (parseInt(patientData.age) > 50) {
          confidenceScore += 10
        } else if (parseInt(patientData.age) < 30) {
          confidenceScore -= 15
        }
      }
      
      // Gender modifiers for specific conditions
      if (diagnosis.id === "d1" && patientData.gender === "male") { // Heart attack more common in males
        confidenceScore += 5
      }
      
      if (diagnosis.id === "d5" && patientData.gender === "female") { // Rheumatoid arthritis more common in females
        confidenceScore += 5
      }
    }
    
    // Ensure score is within 0-100 range
    confidenceScore = Math.max(0, Math.min(100, confidenceScore))
    
    // Calculate missing symptoms (common symptoms not selected by user)
    const missingSymptoms = diagnosis.commonSymptoms.filter(symptomName => {
      const matchingSymptom = symptoms.find(s => s.name === symptomName)
      return matchingSymptom && !selectedSymptomIds.includes(matchingSymptom.id)
    })
    
    return {
      ...diagnosis,
      confidenceScore,
      matchingSymptoms,
      missingSymptoms
    }
  }).filter(Boolean) // Remove null entries
  
  // Sort by confidence score (highest first)
  return potentialDiagnoses.sort((a, b) => b.confidenceScore - a.confidenceScore)
}