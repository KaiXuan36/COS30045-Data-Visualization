# Exercise 4.2: D3.js Library Integration & DOM Setup

**Author:** Tan Kai Xuan  
**Unit:** COS30045 Data Visualisation (Swinburne University of Technology)

Integrating the D3.js (v7) visualization library into a structured web application and executing core DOM selections and element manipulation.

---

## Project Structure

```text
Exercise 4.2/
├── index.html
├── js/
│   └── main.js
└── README.md
```

---

## Generative AI Reflection

- **Tools Used:** Gemini
- **Purpose:** Verifying D3 library CDN script declarations and troubleshooting DOM selection syntax in `main.js`.
- **Changes/Adaptations:** Script order and D3 selection chains were manually reviewed and executed in the browser developer console to confirm execution order.
- **Learnings:** Practiced modular web project setup separating HTML markup from JavaScript application logic.
- **Limitations:** Required manual verification of script loading order to prevent runtime target execution errors.

---

## Implementation Details & AI Declaration

### Implementation Details
- Integrated the external D3.js (v7) library into the project environment via script tag declarations.
- Organized standard modular directory structure separating HTML markup from JavaScript application code (`js/main.js`).
- Executed initial DOM element selection and manipulation using standard D3 selection chains (`d3.select()`).

### AI Declaration
GenAI (Gemini) was used as an assistant to:
1. Verify D3 v7 CDN/library script declaration order.
2. Troubleshoot standard DOM selection and append operations within `main.js`.