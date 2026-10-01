// Create 500x500 SVG canvas with black border
const svg = d3.select(".responsive-svg-container")
  .append("svg")
    .attr("viewBox", "0 0 500 500")
    .style("border", "1px solid black");

// Load CSV data from Lab4/data/tvBrandCount.csv
d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: (d.brand || d.Brand || "").toLowerCase(),
    count: +(d.count || d.Count)
  };
}).then(data => {
  // Sort highest to lowest count
  data.sort((a, b) => b.count - a.count);

  drawBarChart(data);
}).catch(error => {
  console.error("Error loading CSV file:", error);
});

// Draw horizontal bar chart with labels
const drawBarChart = data => {
  // 1. Horizontal scale (starts at 110px for brand labels, ends at 440px for value numbers)
  const xScale = d3.scaleLinear()
    .domain([0, 1100])
    .range([110, 440]);

  // Vertical scale for bar positioning and spacing
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([10, 490])
    .padding(0.12);

  // 2. Group container for each brand entry
  const barAndLabel = svg
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

  // 3. Add horizontal blue bars
  barAndLabel
    .append("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("x", 110)
    .attr("y", 0)
    .attr("width", d => xScale(d.count) - 110)
    .attr("height", yScale.bandwidth())
    .attr("fill", "blue");

  // 4. Add left brand name labels (Right-aligned, serif font)
  barAndLabel
    .append("text")
    .text(d => d.brand)
    .attr("x", 102)
    .attr("y", yScale.bandwidth() / 2 + 5)
    .attr("text-anchor", "end")
    .style("font-size", "16px")
    .style("font-family", "serif");

  // 5. Add right count value labels (Left-aligned, serif font)
  barAndLabel
    .append("text")
    .text(d => d.count)
    .attr("x", d => xScale(d.count) + 5)
    .attr("y", yScale.bandwidth() / 2 + 5)
    .style("font-size", "16px")
    .style("font-family", "serif");
};