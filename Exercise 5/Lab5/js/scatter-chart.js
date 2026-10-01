// Load ARE_Spot_Prices.csv data
d3.csv("data/ARE_Spot_Prices.csv", d => {
  return {
    year: +d.Year, // Convert year string to integer
    averagePrice: +d["Average Price (notTas-Snowy)"] // Convert price string to number
  };
}).then(data => {
  console.log("ARE Spot Prices Data:", data); // Check data in browser console
  drawLineChart(data);
}).catch(error => {
  console.error("Error loading CSV file:", error);
});

const drawLineChart = data => {
  // 1. Margin convention (matching Exercise 5.1 dimensions)
  const margin = { top: 50, right: 30, bottom: 40, left: 60 };
  const width = 800;
  const height = 500;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // 2. Create SVG container
  const svg = d3.select("#line-chart")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`);

  // 3. Create innerChart group
  const innerChart = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // 4. Create scales (d3.scaleLinear for both x and y as continuous data)
  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.year)) // Extent gets [minYear, maxYear] (1998 to 2024)
    .range([0, innerWidth]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.averagePrice)])
    .range([innerHeight, 0]); // Inverted for SVG coordinates

  // 5. Setup axes
  const bottomAxis = d3.axisBottom(xScale)
    .tickFormat(d3.format("d")); // Format ticks as integers (e.g., 1998 instead of 1,998)

  const leftAxis = d3.axisLeft(yScale);

  // Append X-axis
  innerChart.append("g")
    .attr("transform", `translate(0, ${innerHeight})`)
    .call(bottomAxis);

  // Append Y-axis
  innerChart.append("g")
    .call(leftAxis);

  // 6. Line Generator function
  const lineGenerator = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.averagePrice));

  // 7. Append Path (Line)
  innerChart.append("path")
    .attr("d", lineGenerator(data))
    .attr("fill", "none")
    .attr("stroke", "green")
    .attr("stroke-width", 1.5);

  // 8. Draw Scatter Plot (Circles at data points)
  innerChart.selectAll("circle")
    .data(data)
    .join("circle")
      .attr("cx", d => xScale(d.year))
      .attr("cy", d => yScale(d.averagePrice))
      .attr("r", 4)
      .attr("fill", "green");
};