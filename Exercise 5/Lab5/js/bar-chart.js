// Load data
d3.csv("data/Data_exercise 5.1-1.csv", d => {
  // Extract values regardless of column header variations
  const tech = d.Screen_Tech ? d.Screen_Tech.toUpperCase() : d.screen_tech.toUpperCase();
  const consumption = +d["Mean(Labelled energy consumption (kWh/year))"] || +d.Energy_Consumption;
  
  return {
    Screen_Tech: tech,
    Energy_Consumption: consumption
  };
}).then(data => {
  // Sort descending by energy consumption
  data.sort((a, b) => b.Energy_Consumption - a.Energy_Consumption);

  // Render chart
  drawBarChart(data);
}).catch(error => {
  console.error("Error loading CSV file:", error);
});

const drawBarChart = data => {
  // 1. Margin convention
  const margin = { top: 50, right: 30, bottom: 40, left: 60 };
  const width = 800;
  const height = 500;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // 2. Main SVG selection
  const svg = d3.select("#bar-chart")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`);

  // 3. Inner chart group shifted by top and left margins
  const innerChart = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // 4. Scales
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.Screen_Tech))
    .range([0, innerWidth])
    .padding(0.12);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Energy_Consumption) + 20])
    .range([innerHeight, 0]); // Inverted for SVG Y-axis coordinates

  // 5. Axes
  const bottomAxis = d3.axisBottom(xScale);
  const leftAxis = d3.axisLeft(yScale);

  // Append X-axis (moved to bottom of inner chart)
  innerChart.append("g")
    .attr("transform", `translate(0, ${innerHeight})`)
    .call(bottomAxis);

  // Append Y-axis
  innerChart.append("g")
    .call(leftAxis);

  // 6. Y-axis Title Label
  innerChart.append("text")
    .text("Energy Consumption (kWh)")
    .attr("x", -margin.left)
    .attr("y", -20)
    .attr("text-anchor", "start")
    .style("font-size", "16px")
    .style("font-weight", "bold");

  // 7. Draw Bars
  innerChart.selectAll(".bar")
    .data(data)
    .join("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.Screen_Tech))
      .attr("y", d => yScale(d.Energy_Consumption))
      .attr("width", xScale.bandwidth())
      .attr("height", d => innerHeight - yScale(d.Energy_Consumption))
      .attr("fill", "green");

  // 8. Value Labels above bars
  innerChart.selectAll(".bar-value")
    .data(data)
    .join("text")
      .attr("class", "bar-value")
      .attr("x", d => xScale(d.Screen_Tech) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.Energy_Consumption) - 8)
      .attr("text-anchor", "middle")
      .text(d => `${Math.round(d.Energy_Consumption)} kWh`)
      .style("font-size", "13px")
      .style("font-weight", "500");
};