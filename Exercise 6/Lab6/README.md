# Exercise 6: Interactive & Dynamic D3.js Visualisations

## Overview & Aim
This project implements an interactive data visualisation module using **D3.js (v7)** within the **Energy Tracker** web application layout. The objective of this exercise is to transform raw CSV energy rating datasets into responsive, interactive histograms and scatterplots, enabling users to analyze relationships between energy consumption (kWh/year), star ratings, screen technologies, and screen sizes.

---

## Project Structure

```text
Exercise 6/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   └── js/
│       ├── calculator.js
│       └── faq.js
├── Lab4/
│   ├── data/
│   │   ├── 2026 TV Data.zip
│   │   └── tvBrandCount.csv
│   ├── js/
│   │   └── main.js
│   ├── Lab4.html
│   └── README.md
├── Lab5/
│   ├── data/
│   │   ├── ARE_Spot_Prices.csv
│   │   ├── Data_exercise 5.1-1.csv
│   │   └── Data_exercise 5.3.csv
│   ├── js/
│   │   ├── bar-chart.js
│   │   ├── donut-chart.js
│   │   └── scatter-chart.js
│   ├── Lab5.html
│   └── README.md
├── Lab6/
│   ├── css/
│   │   ├── base.css
│   │   └── visualisation.css
│   ├── data/
│   │   ├── Ex6_TVdata_withStar.csv
│   │   └── W6 TV Data.knwf
│   ├── js/
│   │   ├── histogram.js
│   │   ├── interactions.js
│   │   ├── load-data.js
│   │   ├── scatterplot.js
│   │   └── shared-constants.js
│   ├── Lab6.html
│   └── README.md
├── about.html
├── index.html
├── README.md
├── READMEold.md
└── televisions.html
```

---

## Implemented Visualisations

### 1. Exercise 6.1: Continuous Histogram Distribution
- **File:** `js/histogram.js` & `js/load-data.js`
- **Data Source:** `data/Ex6_TVdata_withStar.csv`
- **Description:** Groups television energy consumption (kWh/year) into continuous frequency distribution bins.
- **Technical Features:**
  - `d3.bin()` value generator for calculating data frequencies.
  - `d3.scaleLinear()` continuous scales for X-axis (Energy) and Y-axis (Frequency Count).
  - Responsive viewBox configuration allowing dynamic scaling across viewports.

### 2. Exercise 6.2: Interactive Filtered Histogram
- **File:** `js/interactions.js`
- **Data Source:** `data/Ex6_TVdata_withStar.csv`
- **Description:** Allows real-time filtering of the energy consumption histogram based on screen technology (`LED`, `LCD`, `OLED`) and screen size.
- **Technical Features:**
  - Programmatic DOM button generation using `d3.selectAll().data().join("button")`.
  - Dynamic dataset filtering recalculating bin counts on user selection.
  - Animated bar transitions utilizing `.transition().duration(500).ease(d3.easeCubicInOut)`.

### 3. Exercise 6.3: Star Rating vs Energy Consumption Scatterplot
- **File:** `js/scatterplot.js` & `js/shared-constants.js`
- **Data Source:** `data/Ex6_TVdata_withStar.csv`
- **Description:** Visualises individual television models on a 2D plot comparing Star Rating against Labeled Energy Consumption (kWh/year), color-coded by screen technology.
- **Technical Features:**
  - `d3.scaleOrdinal()` combined with `d3.schemeCategory10` for categorical hue assignment.
  - Semi-transparent data circles (`opacity: 0.5`) to display overlapping point density.
  - Automated dynamic legend generation mapping screen technology domains to color blocks.

### 4. Exercise 6.4: Interactive Scatterplot Tooltips
- **File:** `js/interactions.js`
- **Data Source:** `data/Ex6_TVdata_withStar.csv`
- **Description:** Enhances the scatterplot with interactive tooltips that display screen size when hovering over data points.
- **Technical Features:**
  - Appends persistent `<g>` group elements containing `<rect>` and `<text>` nodes to `innerChartS`.
  - `mouseenter` and `mouseleave` event listeners with `e.target.getAttribute("cx")` position targeting.
  - Smooth 200ms opacity transition on hover and off-screen hide displacement on exit.

---

## Reflection

### Key Learnings
1. **Module Separation & Scope Sharing:** Organized D3 chart execution into dedicated modular files (`shared-constants.js`, `interactions.js`, `scatterplot.js`, `load-data.js`), using global state variables (`innerChartS`, `xScaleS`) across scripts.
2. **D3 Binning & Re-rendering:** Learned how to dynamically re-bind re-binned datasets using `.data()` during state updates and apply CSS transitions to modify existing SVG geometry.
3. **SVG Event Handling & Target Position Retrieval:** Mastered capturing cursor focus using event listener parameters `(e, d)` to retrieve SVG node coordinates via `e.target.getAttribute()` for exact tooltip positioning.

### Challenges & Solutions
- **Tooltip Positioning Alignment:** Positioning the tooltip container over smaller scatterplot circles caused overlap and jitter. Resolved by offsetting the tooltip position relative to the circle's center coordinates (`cx - 0.5 * tooltipWidth`, `cy - 1.5 * tooltipHeight`).
- **Asynchronous Data Ordering:** Calling tooltip and interaction functions before CSV parsing completed caused empty selections. Solved by chaining `createTooltip()` and `handleMouseEvents()` directly within the `.then()` promise resolution block in `load-data.js`.

---

## Generative AI Declaration

In accordance with academic integrity guidelines, **Generative AI tools (Google Gemini)** were utilized during this project for the following tasks:

1. **Debugging & Event Listener Fixes:** Resolving scope mismatches for shared scale objects and tooltip coordinate extraction (`e.target.getAttribute`).
2. **Documentation & README Formatting:** Formatting markdown tables, code blocks, and project directory trees.

*All AI-generated code snippets were manually reviewed, tested, modified to fit the existing codebase, and integrated by the author.*