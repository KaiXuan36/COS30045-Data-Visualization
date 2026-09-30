# Exercise 4.4

**Author:** Tan Kai Xuan  
**Unit:** COS30045 Data Visualisation (Swinburne University of Technology)

Asynchronous loading, numeric type parsing, array sorting, and metric summary generation from external CSV dataset files (`tvBrandCount.csv`) using D3 promises.

---

## Project Structure

```text
Exercise 4.4/
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

## Generative AI Reflection

- **Tools Used:** Gemini
- **Purpose:** Assisting with basic Git command syntax, 404 path resolution, KNIME dataset extraction, and formatting this README documentation.
- **Changes/Adaptations:** All AI suggestions were manually reviewed and edited to ensure they matched the assignment requirements. The data loading logic, sorting algorithms, and console validation were written and tested manually.
- **Learnings:** Practiced managing version control, handling asynchronous D3 data promises, case-sensitive web pathing, and keeping documentation synchronized with repository updates.
- **Limitations:** Needed to manually review and edit AI suggestions to ensure they matched Swinburne's exact lab instructions.

---

## Exercise 4.4 Reflection & AI Acknowledgement

### Implementation Details
- Asynchronously loaded external CSV data (`tvBrandCount.csv`) using D3's `d3.csv()` promise syntax, with a row conversion accessor function parsing count strings into numeric values (`+d.count`).
- Computed dataset summary statistics using D3 statistical functions (`d3.max()`, `d3.min()`, and `d3.extent()`) and sorted data objects in descending order based on count values.
- Verified data parsing in the browser developer console and successfully passed the structured array downstream to the `drawBarChart()` function.

### AI Declaration
GenAI (Gemini) was used as an assistant to:
1. Provide guidance on D3 asynchronous promise syntax, row accessor conversion logic, and array sorting methods.