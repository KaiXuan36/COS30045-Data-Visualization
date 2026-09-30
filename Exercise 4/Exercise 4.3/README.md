## Exercise 4.3 Reflection & AI Acknowledgement

**Author:** Tan Kai Xuan  
**Unit:** COS30045 Data Visualisation (Swinburne University of Technology)

Building a fluid, responsive container for D3.js SVG visualisations using CSS wrapper styling and SVG `viewBox` scaling rules.

---

## Project Structure

```text
Exercise 4.3/
├── index.html
├── assets/
│   └── css/
│       └── style.css
├── js/
│   └── main.js
└── README.md
```

### Implementation Details
- Established a fluid container (`.responsive-svg-container`) in CSS to handle SVG scaling across different browser viewport sizes.
- Programmatically initialized an SVG canvas inside the DOM container using D3.js (`d3.select().append("svg")`) and configured the dynamic scaling ratio via the `viewBox` attribute (`0 0 1200 1600`).
- Rendered a test SVG `<rect>` primitive onto the canvas using D3 `.attr()` methods to verify proper library loading and coordinate positioning prior to CSV data binding.

### AI Declaration
GenAI (Gemini) was used as an assistant to:
1. Provide guidance on responsive `viewBox` configurations for D3 SVG canvases.
2. Troubleshoot HTML script ordering and CSS layout rules for responsive chart containers.