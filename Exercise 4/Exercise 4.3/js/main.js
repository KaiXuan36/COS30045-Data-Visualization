// Exercise 4.3: D3 Set Up

// 1. Create SVG object inside .responsive-svg-container
const svg = d3.select(".responsive-svg-container")
  .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid #eadbbd");

// 2. Add test SVG rectangle (Proof-of-concept before loading CSV data in 4.4)
svg.append("rect")
    .attr("x", 10)
    .attr("y", 10)
    .attr("width", 414)
    .attr("height", 16)
    .attr("fill", "#f6a623"); // Theme accent color