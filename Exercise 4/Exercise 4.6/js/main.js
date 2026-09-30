// Create 500x500 SVG canvas
const svg = d3.select(".responsive-svg-container")
  .append("svg")
    .attr("viewBox", "0 0 500 500")
    .style("border", "1px solid black");

// Load CSV data
d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {
  // Sort highest to lowest
  data.sort((a, b) => b.count - a.count);

  drawBarChart(data);
}).catch(error => {
  console.error("Error loading CSV file:", error);
});

// Draw bar chart
const drawBarChart = data => {
  // X scale (width)
  const xScale = d3.scaleLinear()
    .domain([0, 1100])
    .range([0, 400]); // Right gap

  // Y scale (height & spacing)
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, 300]) // Bottom empty space
    .padding(0.25);  // Gap between bars

  // Render bars
  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("width", d => xScale(d.count)) // Bar length
    .attr("height", yScale.bandwidth())  // Bar thickness
    .attr("fill", "blue")
    .attr("x", 0)
    .attr("y", d => yScale(d.brand));    // Bar position
};