// Step 2: Select h1 element and set color
d3.select("h1")
  .style("color", "#7a5d32"); 

// Step 3: Append TV recommendation paragraph to container div
d3.select("div.container")
  .append("p")
  .style("font-weight", "600")
  .style("color", "#5f4725")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

// Step 4: Append rectangle to SVG
d3.select("svg")
  .append("rect")
  .attr("x", 20)
  .attr("y", 20)
  .attr("width", 150)
  .attr("height", 50)
  .attr("rx", 6) // Smooth rounded corners
  .style("fill", "#f6a623"); 