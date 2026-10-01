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

// Draw bar chart with labels
const drawBarChart = data => {
  // Step 1: Make room for labels (X-scale starts at 100px for left labels)
  const xScale = d3.scaleLinear()
    .domain([0, 1100])
    .range([100, 420]); // Starts at 100, ends at 420 leaving right space for count numbers

  // Y-scale for height and gaps
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, 400]) // Squeezes chart vertically
    .padding(0.25);  // Gap between bars

  // Step 2: Create group container for each bar and label
  const barAndLabel = svg
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", d => `translate(0, ${yScale(d.brand)})`); // Moves group down by Y position

  // Step 3: Add rectangles inside group container
  barAndLabel
    .append("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("x", 100)                       // Starts at x=100
    .attr("y", 0)                         // Reset y to 0 since group translate handles vertical position
    .attr("width", d => xScale(d.count) - 100) // Bar length
    .attr("height", yScale.bandwidth())   // Bar thickness
    .attr("fill", "blue");

  // Step 4: Add category brand name labels (Left side)
  barAndLabel
    .append("text")
    .text(d => d.brand)
    .attr("x", 90)                        // Positioned at x=90 (just left of the bar)
    .attr("y", yScale.bandwidth() / 2 + 3) // Center text vertically
    .attr("text-anchor", "end")           // Right-align text
    .style("font-size", "10px")
    .style("font-family", "sans-serif");

  // Step 5: Add value count numbers (Right side)
  barAndLabel
    .append("text")
    .text(d => d.count)
    .attr("x", d => xScale(d.count) + 5)  // Positioned 5px past the end of each bar
    .attr("y", yScale.bandwidth() / 2 + 3) // Center text vertically
    .style("font-size", "10px")
    .style("font-family", "sans-serif");
};