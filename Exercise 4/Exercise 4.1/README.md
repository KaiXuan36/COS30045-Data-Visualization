## Exercise 4.1 Reflection & AI Acknowledgement

**Author:** Tan Kai Xuan  
**Unit:** COS30045 Data Visualisation (Swinburne University of Technology)

An interactive SVG vector graphics layout demonstrating standard 2D plane coordinate systems, geometric primitives (`<rect>`, `<circle>`, `<polygon>`, `<path>`, and `<text>`), and group transformation positioning.

---

## Project Structure

```text
Exercise 4.1/
├── index.html
├── coordinates.png
└── README.md

### Implementation Details
- Created an SVG illustration containing primitive shapes (`<rect>`, `<circle>`, `<polygon>`, `<path>`, and `<text>`).
- Implemented the `<g>` group tag with `transform="translate()"` to position and style both house windows consistently.
- Included an annotated screenshot demonstrating understanding of the SVG coordinate system (origin at top-left `(0,0)`).

### AI Declaration
GenAI (Gemini) was used as an assistant to:
1. Help construct and simplify the initial SVG primitives layout.
2. Troubleshoot coordinate alignment for overlapping shapes (such as the tree leaf triangles and path curves).