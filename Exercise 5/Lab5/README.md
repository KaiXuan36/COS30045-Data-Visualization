# Exercise 5: Multi-Chart D3.js Visualisation Webpage

## Overview & Aim
This project implements a multi-chart web application using **D3.js (v7)** integrated into the **Energy Tracker** website layout. The objective of this exercise is to transform raw CSV energy datasets into scalable, interactive, and responsive SVG visualisations.

---

## Project Structure

```text
Exercise 5/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── img/
│       └── PowerIcon.png
├── Lab4/
│   └── ...
└── Lab5/
    ├── css/
    │   └── style.css
    ├── data/
    │   ├── ARE_Spot_Prices.csv
    │   ├── Data_exercise 5.1-1.csv
    │   └── Data_exercise 5.3.csv
    ├── js/
    │   ├── bar-chart.js
    │   ├── scatter-chart.js
    │   └── donut-chart.js
    ├── Lab5.html
    └── README.md
```

---

## Implemented Visualisations

### 1. Exercise 5.1: Bar Chart
- **File:** `js/bar-chart.js`
- **Data Source:** `data/Data_exercise 5.1-1.csv`
- **Description:** Visualises mean annual energy consumption (kWh/year) grouped across different TV screen technologies (LED, OLED, LCD).
- **Technical Features:**
  - `d3.scaleBand()` for discrete category positioning with padding.
  - `d3.scaleLinear()` for continuous vertical height scaling.
  - Value labels dynamically centered above each bar using centroid positioning.

### 2. Exercise 5.2: Line & Scatter Plot Chart
- **File:** `js/scatter-chart.js`
- **Data Source:** `data/ARE_Spot_Prices.csv`
- **Description:** Illustrates electricity spot price trends annually from 1998 to 2024.
- **Technical Features:**
  - `d3.scaleLinear()` for both time (years) and monetary axes.
  - `d3.line()` generator for continuous path plotting.
  - SVG circle element overlays for individual data point markers.

### 3. Exercise 5.3: Donut Chart
- **File:** `js/donut-chart.js`
- **Data Source:** `data/Data_exercise 5.3.csv`
- **Description:** Displays proportional breakdown of TV models categorized by screen size (Small, Medium, Large).
- **Technical Features:**
  - `d3.pie()` slice angle computation with preserved data ordering.
  - `d3.arc()` inner radius (55%) and outer radius (95%) configuration.
  - Centroid positioning (`arcGenerator.centroid(d)`) for slice labels.

---

## Reflection

### Key Learnings
1. **D3 Data Join Pattern:** Mastered the modern `.data().join()` syntax for binding structured array objects directly to DOM SVG nodes (`rect`, `path`, `circle`, `text`).
2. **SVG Coordinates & Margins:** Understood SVG coordinate systems where $(0,0)$ originates at the top-left, requiring inverted ranges for Y-axes (`[innerHeight, 0]`) and calculated translation margins.
3. **Layout Generators:** Learned how D3 layout helpers (`d3.pie()` and `d3.arc()`) translate raw numerical values into geometric angle descriptors and SVG path string commands (`d="..."`).

### Challenges & Solutions
- **Relative Path Resolution:** Experienced file path resolution issues when loading CSV files asynchronously across nested directory structures (`Lab5/data/` vs root). Resolved by standardizing paths relative to `Lab5.html`.
- **Label Centering on Arcs:** Placing text inside pie slices required calculating exact geometric midpoints. Utilized `arcGenerator.centroid(d)` combined with `text-anchor: middle` and `dominant-baseline: middle` attributes.

---

## Generative AI Declaration

In accordance with academic integrity guidelines, **Generative AI tools (Google Gemini / ChatGPT)** were utilized during this project for the following tasks:

1. **Path & DOM Binding Verification:** Identifying ID mismatched selectors between HTML containers (`#line-chart`, `#scatter-chart`) and D3 selections.
2. **Formatting & Documentation Structure:** Refining structure for documentation and code formatting.

*All AI-generated code snippets were manually reviewed, tested, modified to fit the existing codebase, and integrated by the author.*

---
