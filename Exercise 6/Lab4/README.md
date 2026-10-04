Exercise 4.7

**Author:** Tan Kai Xuan  
**Unit:** COS30045 Data Visualisation (Swinburne University)

Extending Exercise 4.6 by binding SVG `<g>` group elements to data items, offsetting horizontal bar origins to make 100px left margin space for brand name text labels (`text-anchor: end`), and appending category count numbers to the right of each rendered bar.

---

## Project Structure

```text
Exercise 4.7/
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
- **Purpose:** Assistance in structuring D3 `<g>` group transformations (`translate`), aligning text element baselines, and setting proper `text-anchor` positioning attributes.
- **Changes/Adaptations:** Reviewed and verified all label positioning coordinates (`x`, `y`, `text-anchor`) to ensure clear visual alignment and readability across all 28 TV brand items.
- **Learnings:** Practiced grouping SVG elements with D3 `.join("g")`, applying coordinate offsets with `transform: translate`, and placing textual labels dynamically relative to scale outputs.
- **Limitations:** Needed manual fine-tuning of `xScale.range()` parameters to prevent text overlap along both left and right margins.

---

## Exercise 4.7 Reflection & AI Declaration

### Implementation Details
- Shifted `xScale` start offset from `0` to `100` (`range([100, 420])`), creating a dedicated 100px left margin for brand labels.
- Grouped bars and labels together using `<g>` elements translated by `yScale(d.brand)` along the Y-axis.
- Added brand text labels right-aligned at `x = 90` with `text-anchor: end` and count values offset to `xScale(d.count) + 5`.

### AI Declaration
GenAI (Gemini) was used to:
1. Provide guidance on `<g>` element translation and SVG text baseline alignment.
2. Troubleshoot coordinate math for text label placement.