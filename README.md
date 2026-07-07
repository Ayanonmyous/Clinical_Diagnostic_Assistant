# 🩺 Clinical Diagnosis Assistant

A React-based educational tool that suggests possible diagnoses from selected symptoms and patient details, then recommends relevant clinical investigations for the top result.

**🔗 Live Demo:** [temp-liart-five.vercel.app](https://temp-liart-five.vercel.app/)

> ⚠️ **Disclaimer:** This project is for educational and portfolio purposes only. It is **not** a medical device and must **not** be used for actual diagnosis, treatment, or any real clinical decision-making. Always consult a qualified healthcare professional for medical concerns.

---

## Overview

Clinical Diagnosis Assistant walks a user through a simple three-step flow:

1. **Patient Info & Symptoms** — Enter basic patient details (age, gender, medical history) and select symptoms from a categorized list.
2. **Possible Diagnoses** — View a ranked list of potential conditions, scored by how well they match the selected symptoms.
3. **Investigations** — Select a diagnosis to see suggested laboratory tests and imaging studies, along with urgency level and treatment considerations.

The matching logic runs entirely on the client — there's no backend or external API call involved.

## Features

- ✅ Interactive symptom selector covering multiple body systems (cardiovascular, respiratory, neurological, gastrointestinal, and more)
- ✅ Patient context (age, gender, medical history) factored into confidence scoring
- ✅ Weighted confidence-scoring engine that ranks possible diagnoses based on symptom overlap
- ✅ Detail view per diagnosis, showing:
  - Description and urgency level (e.g., Emergency, Urgent, Routine)
  - Suggested laboratory tests with expected results
  - Suggested imaging studies with findings to look for
  - Treatment considerations
- ✅ Missing/common symptoms shown to help refine the differential
- ✅ Responsive UI with smooth view transitions
- ✅ Reset flow to start a new assessment at any time

## Tech Stack

| Layer         | Technology                     |
|---------------|---------------------------------|
| Framework     | [React 18](https://react.dev/) |
| Build Tool    | [Vite](https://vitejs.dev/)    |
| Styling       | Tailwind CSS                    |
| Icons         | react-icons                     |
| Linting       | ESLint                          |
| Deployment    | Vercel                          |

## Project Structure

```
Clinical_Diagnostic_Assistant/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── PatientInfo.jsx
│   │   ├── SymptomSelector.jsx
│   │   ├── DiagnosesList.jsx
│   │   ├── InvestigationsList.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── symptoms.js        # Symptom definitions (systems, severity, characteristics)
│   │   └── diagnoses.js       # Diagnosis definitions, investigations, urgency
│   ├── utils/
│   │   ├── diagnosisEngine.js # Confidence-scoring algorithm
│   │   └── constants.js
│   ├── App.jsx                # Main app flow / state management
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

The core logic lives in `src/utils/diagnosisEngine.js`:

1. For each candidate diagnosis, the engine finds how many of its associated symptoms match the user's selected symptoms.
2. A confidence score is computed from two ratios:
   - **Match ratio** — how much of the diagnosis's expected symptom set was matched
   - **Symptom ratio** — how much of the user's selected symptoms point to this diagnosis
3. These ratios are weighted (70/30) and combined into a 0–100 confidence score.
4. Patient data (age, gender) applies small modifiers to specific diagnoses (e.g., age and gender-based risk adjustments for heart attack or rheumatoid arthritis).
5. Diagnoses are sorted by confidence score, and any diagnosis with zero matching symptoms is excluded.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Ayanonmyous/Clinical_Diagnostic_Assistant.git
cd Clinical_Diagnostic_Assistant

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Building for Production

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

## Roadmap / Ideas for Contribution

- [ ] Expand the symptom and diagnosis database
- [ ] Add symptom severity/duration as inputs to the scoring engine
- [ ] Add unit tests for `diagnosisEngine.js`
- [ ] Add a printable/exportable summary of results
- [ ] Improve accessibility (keyboard navigation, ARIA labels)
- [ ] Dark mode

Contributions are welcome — feel free to open an issue or submit a pull request.

## License

No license has been specified for this project yet. If you'd like others to be able to freely use, modify, or contribute to this code, consider adding a license (e.g., [MIT](https://choosealicense.com/licenses/mit/)).

## Author

Built by [Ayanonmyous](https://github.com/Ayanonmyous).
