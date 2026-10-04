// Define margins for axes and labels surrounding the visualization
const margin = { top: 40, right: 30, bottom: 50, left: 70 };

// Total outer dimensions of the SVG canvas
const width = 800;
const height = 400;

// Calculated inner drawing space excluding margin offsets
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// Global scatterplot inner chart container variable (Exercise 6.3)
let innerChartS;

// Global tooltip dimensions (Exercise 6.3 & 6.4)
const tooltipWidth = 65;
const tooltipHeight = 32;

// Color variables matching website theme
const barColor = "#606464";
const bodyBackgroundColor = "#fffaf0";

// Global D3 continuous linear scale objects for Histogram X and Y axes
const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

// Global D3 scale objects for Scatterplot (Exercise 6.3)
const xScaleS = d3.scaleLinear();
const yScaleS = d3.scaleLinear();
const colorScale = d3.scaleOrdinal();

// Global bin generator using d3.bin() with accessor for energy consumption
const binGenerator = d3.bin()
    .value(d => d.energyConsumption);

// Array of filter options for screen technology types (Exercise 6.2)
const filters_screen = [
    { id: "all", label: "All", isActive: true },
    { id: "LED", label: "LED", isActive: false },
    { id: "LCD", label: "LCD", isActive: false },
    { id: "OLED", label: "OLED", isActive: false }
];

// Array of filter options for screen sizes (Extension Activity)
const filters_size = [
    { id: "all", label: "All Sizes", isActive: true },
    { id: "24", label: "24\"", isActive: false },
    { id: "32", label: "32\"", isActive: false },
    { id: "55", label: "55\"", isActive: false },
    { id: "65", label: "65\"", isActive: false },
    { id: "98", label: "98\"", isActive: false }
];