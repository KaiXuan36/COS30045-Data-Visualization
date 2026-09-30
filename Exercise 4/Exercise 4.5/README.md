# Exercise 4.5

**Author:** Tan Kai Xuan  
**Unit:** COS30045 Data Visualisation (Swinburne University)

Binding loaded CSV tabular data to SVG `<rect>` primitives in D3.js and visually rendering a sorted horizontal bar chart with vertical positioning formulas.

---

## Project Structure

```text
Exercise 4.5/
├── index.html
├── assets/
│   └── css/
│       └── style.css
├── data/
│   └── tvBrandCount.csv
├── js/
│   └── main.js
└── README.md
```

---

## Generative AI Reflection

- **Tools Used:** Gemini
- **Purpose:** Assisting with basic Git command syntax, D3 data selection binding syntax, dynamic SVG attribute assignment, calculation of vertical bar spacing formulas, and formatting this README documentation.
- **Changes/Adaptations:** All AI suggestions were manually reviewed and edited to ensure they matched assignment requirements. Code structure was adapted to follow modular functional declarations (`drawBarChart`). Bar height and spacing variables were configured and tested manually inside the browser DOM inspector.
- **Learnings:** Practiced managing version control, keeping documentation synchronized with repository updates, mastering the D3 enter/update pattern with `.join("rect")`, dynamic attribute mapping with accessor functions `(d, i)`, and SVG coordinate calculation for stacked bar layouts.
- **Limitations:** Needed to manually review and edit AI suggestions to ensure they matched Swinburne's exact lab instructions, verifying that raw pixel mapping will require dynamic scales in Exercise 4.6.

---

## Exercise 4.5 Reflection & AI Acknowledgement

### Implementation Details
- Bound structured dataset array to DOM elements using D3 selection join methods (`.selectAll("rect").data(data).join("rect")`)[cite: 3].
- Dynamic class names (`bar bar-${d.count}`) were assigned using string interpolation accessors to verify element-to-data mapping in the DOM inspector[cite: 4].
- Formatted visual attributes by mapping `d.count` directly to bar width, applying constant bar heights (`barHeight = 20`), and setting fill color attributes[cite: 6].
- Positioned rectangles along the Y-axis using the index spacing calculation `y = i * (barHeight + barSpacing)` to stack bars without overlapping[cite: 5].

### AI Declaration
GenAI (Gemini) was used as an assistant to:
1. Provide guidance on D3 `.data()` binding and `.join()` syntax for SVG rectangle creation.
2. Assist in formulating the index-based Y-coordinate spacing algorithm `(d, i) => i * (barHeight + barSpacing)`.