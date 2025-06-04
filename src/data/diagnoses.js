export const diagnoses = [
  {
    id: "d1",
    name: "Myocardial Infarction (Heart Attack)",
    description: "Blockage of blood flow to the heart muscle, causing damage or death of heart tissue",
    symptomIds: ["s1", "s2", "s3", "s6", "s7", "s17"],
    commonSymptoms: ["Chest Pain", "Shortness of Breath", "Fatigue", "Nausea", "Dizziness", "Palpitations", "Cold Sweat", "Pain Radiating to Left Arm or Jaw"],
    treatmentConsiderations: "Immediate medical attention is required. Treatment may include medications to dissolve clots, angioplasty, or coronary bypass surgery.",
    urgency: "Emergency",
    urgencyDescription: "Requires immediate medical attention. Call emergency services immediately.",
    investigations: {
      laboratory: [
        {
          name: "Cardiac Troponin",
          description: "Blood test to detect heart muscle damage",
          expectedResults: "Elevated in heart attack"
        },
        {
          name: "Complete Blood Count (CBC)",
          description: "Measures various components of blood",
          expectedResults: "May show elevated white blood cell count"
        },
        {
          name: "Lipid Profile",
          description: "Measures cholesterol and triglycerides",
          expectedResults: "May show elevated cholesterol or triglycerides"
        }
      ],
      imaging: [
        {
          name: "Electrocardiogram (ECG/EKG)",
          description: "Records electrical activity of the heart",
          findingsToLookFor: "ST segment elevation or depression, T wave inversion, or Q waves"
        },
        {
          name: "Coronary Angiography",
          description: "X-ray imaging of the blood vessels of the heart",
          findingsToLookFor: "Blockage in coronary arteries"
        },
        {
          name: "Echocardiogram",
          description: "Ultrasound of the heart",
          findingsToLookFor: "Wall motion abnormalities, reduced ejection fraction"
        }
      ]
    }
  },
  {
    id: "d2",
    name: "Pneumonia",
    description: "Infection causing inflammation of the air sacs in one or both lungs",
    symptomIds: ["s2", "s3", "s8", "s9", "s13"],
    commonSymptoms: ["Cough", "Fever", "Shortness of Breath", "Chest Pain", "Fatigue", "Sputum Production", "Chills", "Headache"],
    treatmentConsiderations: "Treatment typically involves antibiotics, rest, and adequate hydration. Hospitalization may be required for severe cases.",
    urgency: "Urgent",
    urgencyDescription: "Requires prompt medical attention, especially in elderly patients or those with compromised immune systems.",
    investigations: {
      laboratory: [
        {
          name: "Complete Blood Count (CBC)",
          description: "Measures various components of blood",
          expectedResults: "Elevated white blood cell count"
        },
        {
          name: "Blood Cultures",
          description: "Test for bacteria in the bloodstream",
          expectedResults: "May identify causative organism"
        },
        {
          name: "Sputum Culture",
          description: "Test of coughed-up mucus",
          expectedResults: "May identify causative organism"
        }
      ],
      imaging: [
        {
          name: "Chest X-ray",
          description: "Image of the chest showing lungs and heart",
          findingsToLookFor: "Infiltrates, consolidation in affected lung areas"
        },
        {
          name: "Chest CT Scan",
          description: "Detailed cross-sectional images of the chest",
          findingsToLookFor: "More detailed view of infiltrates, potential complications"
        }
      ]
    }
  },
  {
    id: "d3",
    name: "Migraine",
    description: "Recurring moderate to severe headache, often with associated symptoms",
    symptomIds: ["s4", "s6", "s7", "s21"],
    commonSymptoms: ["Headache", "Nausea", "Sensitivity to Light", "Sensitivity to Sound", "Visual Disturbances", "Dizziness"],
    treatmentConsiderations: "Treatment includes pain relief medications, preventive medications, and lifestyle modifications.",
    urgency: "Routine",
    urgencyDescription: "Can usually be managed with regular medical care, though severe or unusual symptoms may require more urgent attention.",
    investigations: {
      laboratory: [
        {
          name: "No specific laboratory tests",
          description: "Diagnosis is primarily clinical",
          expectedResults: "N/A"
        }
      ],
      imaging: [
        {
          name: "MRI of the brain",
          description: "Detailed imaging of brain structures",
          findingsToLookFor: "Usually normal, rules out other conditions"
        },
        {
          name: "CT scan of the head",
          description: "Cross-sectional images of the head",
          findingsToLookFor: "Usually normal, rules out other conditions"
        }
      ]
    }
  },
  {
    id: "d4",
    name: "Gastroenteritis",
    description: "Inflammation of the stomach and intestines, typically resulting from infection",
    symptomIds: ["s5", "s6", "s8", "s14", "s15"],
    commonSymptoms: ["Diarrhea", "Vomiting", "Abdominal Pain", "Fever", "Nausea", "Loss of Appetite", "Muscle Aches"],
    treatmentConsiderations: "Treatment focuses on preventing dehydration, rest, and sometimes medications to control symptoms.",
    urgency: "Semi-urgent",
    urgencyDescription: "May require prompt attention, especially if severe dehydration is present or in vulnerable populations.",
    investigations: {
      laboratory: [
        {
          name: "Stool Culture",
          description: "Test to identify bacterial or parasitic causes",
          expectedResults: "May identify causative organism"
        },
        {
          name: "Complete Blood Count (CBC)",
          description: "Measures various components of blood",
          expectedResults: "May show elevated white blood cell count"
        },
        {
          name: "Electrolyte Panel",
          description: "Measures electrolytes in blood",
          expectedResults: "May show electrolyte imbalances due to dehydration"
        }
      ],
      imaging: [
        {
          name: "Abdominal X-ray",
          description: "Image of the abdomen",
          findingsToLookFor: "Usually normal, may rule out other conditions"
        }
      ]
    }
  },
  {
    id: "d5",
    name: "Rheumatoid Arthritis",
    description: "Chronic inflammatory disorder affecting joints and sometimes other body systems",
    symptomIds: ["s3", "s10", "s16", "s22"],
    commonSymptoms: ["Joint Pain", "Joint Swelling", "Morning Stiffness", "Fatigue", "Multiple Joint Involvement", "Symmetrical Joint Involvement"],
    treatmentConsiderations: "Treatment includes medications to reduce inflammation and prevent joint damage, physical therapy, and lifestyle modifications.",
    urgency: "Routine",
    urgencyDescription: "Requires regular medical care, but is not typically an emergency.",
    investigations: {
      laboratory: [
        {
          name: "Rheumatoid Factor (RF)",
          description: "Blood test for antibodies associated with RA",
          expectedResults: "Often elevated in RA"
        },
        {
          name: "Anti-Cyclic Citrullinated Peptide (Anti-CCP)",
          description: "Blood test for specific antibodies",
          expectedResults: "Often elevated in RA, more specific than RF"
        },
        {
          name: "Erythrocyte Sedimentation Rate (ESR)",
          description: "Measures inflammation in the body",
          expectedResults: "Elevated in inflammatory conditions"
        },
        {
          name: "C-Reactive Protein (CRP)",
          description: "Measures inflammation in the body",
          expectedResults: "Elevated in inflammatory conditions"
        }
      ],
      imaging: [
        {
          name: "X-rays of affected joints",
          description: "Images of the joints",
          findingsToLookFor: "Joint erosions, narrowing of joint space"
        },
        {
          name: "MRI of affected joints",
          description: "Detailed images of joints",
          findingsToLookFor: "Early signs of joint damage, synovitis"
        },
        {
          name: "Ultrasound of affected joints",
          description: "Uses sound waves to image joints",
          findingsToLookFor: "Synovitis, effusions, early erosions"
        }
      ]
    }
  },
  {
    id: "d6",
    name: "Type 2 Diabetes Mellitus",
    description: "Metabolic disorder characterized by high blood sugar due to insulin resistance or inadequate insulin production",
    symptomIds: ["s3", "s19", "s23"],
    commonSymptoms: ["Frequent Urination", "Increased Thirst", "Increased Hunger", "Weight Loss", "Fatigue", "Blurred Vision", "Slow-healing Sores"],
    treatmentConsiderations: "Treatment includes lifestyle modifications, oral medications, and sometimes insulin therapy.",
    urgency: "Routine",
    urgencyDescription: "Requires regular medical care but is not typically an emergency unless complications occur.",
    investigations: {
      laboratory: [
        {
          name: "Fasting Blood Glucose",
          description: "Measures blood sugar after fasting",
          expectedResults: "≥126 mg/dL (7.0 mmol/L) on two separate tests"
        },
        {
          name: "Hemoglobin A1C",
          description: "Measures average blood sugar over 2-3 months",
          expectedResults: "≥6.5% indicates diabetes"
        },
        {
          name: "Oral Glucose Tolerance Test",
          description: "Measures blood sugar response to glucose load",
          expectedResults: "≥200 mg/dL (11.1 mmol/L) at 2 hours indicates diabetes"
        },
        {
          name: "Lipid Profile",
          description: "Measures cholesterol and triglycerides",
          expectedResults: "Often shows dyslipidemia"
        }
      ],
      imaging: [
        {
          name: "No specific imaging tests",
          description: "Diagnosis is primarily through laboratory tests",
          findingsToLookFor: "N/A"
        }
      ]
    }
  },
  {
    id: "d7",
    name: "Asthma",
    description: "Chronic condition causing inflammation and narrowing of the airways in the lungs",
    symptomIds: ["s2", "s9"],
    commonSymptoms: ["Shortness of Breath", "Wheezing", "Chest Tightness", "Cough (especially at night)", "Difficulty Breathing with Exercise"],
    treatmentConsiderations: "Treatment includes inhaled bronchodilators, inhaled corticosteroids, and avoiding triggers.",
    urgency: "Variable",
    urgencyDescription: "Can range from routine care to emergency depending on severity of symptoms.",
    investigations: {
      laboratory: [
        {
          name: "Allergy Testing",
          description: "Identifies potential triggers",
          expectedResults: "May show allergic sensitivities"
        },
        {
          name: "Complete Blood Count (CBC)",
          description: "Measures various components of blood",
          expectedResults: "May show elevated eosinophils"
        }
      ],
      imaging: [
        {
          name: "Chest X-ray",
          description: "Image of the chest showing lungs and heart",
          findingsToLookFor: "May be normal or show hyperinflation, rules out other conditions"
        },
        {
          name: "Pulmonary Function Tests",
          description: "Measures lung function",
          findingsToLookFor: "Reduced expiratory flow rates, improvement with bronchodilators"
        }
      ]
    }
  },
  {
    id: "d8",
    name: "Urinary Tract Infection (UTI)",
    description: "Infection in any part of the urinary system",
    symptomIds: ["s5", "s8", "s23"],
    commonSymptoms: ["Frequent Urination", "Burning with Urination", "Cloudy or Strong-smelling Urine", "Pelvic Pain", "Fever"],
    treatmentConsiderations: "Treatment typically involves antibiotics and adequate hydration.",
    urgency: "Semi-urgent",
    urgencyDescription: "Requires prompt attention to prevent complications, especially if fever is present.",
    investigations: {
      laboratory: [
        {
          name: "Urinalysis",
          description: "Examination of urine",
          expectedResults: "Presence of white blood cells, bacteria, and sometimes blood"
        },
        {
          name: "Urine Culture",
          description: "Test to identify bacterial causes",
          expectedResults: "Growth of bacteria, typically >100,000 CFU/mL"
        }
      ],
      imaging: [
        {
          name: "Ultrasound of the Kidneys and Bladder",
          description: "Uses sound waves to image urinary tract",
          findingsToLookFor: "May be normal, or show kidney inflammation or stones"
        },
        {
          name: "CT Scan of the Abdomen and Pelvis",
          description: "Detailed cross-sectional images",
          findingsToLookFor: "May show complications such as abscesses or obstructions"
        }
      ]
    }
  },
  {
    id: "d9",
    name: "Influenza (Flu)",
    description: "Contagious respiratory illness caused by influenza viruses",
    symptomIds: ["s3", "s8", "s9", "s13"],
    commonSymptoms: ["Fever", "Cough", "Sore Throat", "Muscle Aches", "Fatigue", "Headache", "Chills"],
    treatmentConsiderations: "Treatment typically involves rest, fluids, and over-the-counter medications for symptoms. Antiviral medications may be prescribed in some cases.",
    urgency: "Semi-urgent",
    urgencyDescription: "May require prompt attention, especially in high-risk populations.",
    investigations: {
      laboratory: [
        {
          name: "Rapid Influenza Diagnostic Test",
          description: "Quick test for influenza virus",
          expectedResults: "Positive for influenza A or B"
        },
        {
          name: "Viral Culture",
          description: "More accurate test for viral presence",
          expectedResults: "Growth of influenza virus"
        },
        {
          name: "Complete Blood Count (CBC)",
          description: "Measures various components of blood",
          expectedResults: "May show lymphopenia or leukopenia"
        }
      ],
      imaging: [
        {
          name: "Chest X-ray",
          description: "Image of the chest showing lungs and heart",
          findingsToLookFor: "Usually normal, may show pneumonia if complication occurs"
        }
      ]
    }
  },
  {
    id: "d10",
    name: "Generalized Anxiety Disorder",
    description: "Persistent and excessive worry about various things",
    symptomIds: ["s7", "s17", "s25"],
    commonSymptoms: ["Excessive Worry", "Restlessness", "Fatigue", "Difficulty Concentrating", "Irritability", "Muscle Tension", "Sleep Disturbance"],
    treatmentConsiderations: "Treatment typically involves psychotherapy, medications, or a combination of both, along with lifestyle modifications.",
    urgency: "Routine",
    urgencyDescription: "Usually managed with regular care, though severe symptoms may require more prompt attention.",
    investigations: {
      laboratory: [
        {
          name: "Thyroid Function Tests",
          description: "Measures thyroid hormone levels",
          expectedResults: "To rule out thyroid disorders that can mimic anxiety"
        },
        {
          name: "Complete Blood Count (CBC)",
          description: "Measures various components of blood",
          expectedResults: "To rule out anemia or infection"
        }
      ],
      imaging: [
        {
          name: "No specific imaging tests",
          description: "Diagnosis is primarily clinical",
          findingsToLookFor: "N/A"
        }
      ]
    }
  }
]