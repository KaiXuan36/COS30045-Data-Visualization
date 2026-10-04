// Load CSV Data from data/ folder
d3.csv("data/Data_exercise 5.3.csv", d => {
  return {
    Screensize_Category: d.Screensize_Category,
    Count: +d.Count
  };
}).then(data => {
  console.log("Loaded Donut Chart Data:", data);
  drawDonutChart(data);
}).catch(error => {
  console.error("Error loading CSV file:", error);
});

const drawDonutChart = data => {
  // 1. Dimensions and radius
  const width = 800;
  const height = 500;
  const radius = Math.min(width, height) / 2 - 20;

  // 2. Color scale
  const color = d3.scaleOrdinal()
    .domain(data.map(d => d.Screensize_Category))
    .range(d3.schemeSet2);

  // 3. Pie generator
  const pie = d3.pie()
    .value(d => d.Count)
    .sort(null);

  // 4. Arc generator
  const arcGenerator = d3.arc()
    .innerRadius(radius * 0.55)
    .outerRadius(radius * 0.95)
    .padAngle(0.01);

  // 5. SVG container
  const svg = d3.select("#donut-chart")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`);

  // 6. Center group
  const innerChart = svg
    .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

  // 7. Arc paths
  innerChart
    .selectAll("path")
    .data(pie(data))
    .join("path")
      .attr("d", arcGenerator)
      .attr("fill", d => color(d.data.Screensize_Category))
      .attr("stroke", "white")
      .attr("stroke-width", 2);

  // 8. Text labels at centroids
  innerChart
    .selectAll("text")
    .data(pie(data))
    .join("text")
      .text(d => `${d.data.Screensize_Category} (${d.data.Count})`)
      .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .style("font-size", "15px")
      .style("font-weight", "bold")
      .style("fill", "#000");
};