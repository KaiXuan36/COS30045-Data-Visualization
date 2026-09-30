// Exercise 4.4: Load data from CSV

// 1. Set up SVG Canvas Container
const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid #eadbbd");

// 2. Placeholder function for Exercise 4.5 chart rendering
function drawBarChart(data) {
    console.log("Data successfully passed to drawBarChart():", data);
}

// 3. Load CSV file relative to index.html (Updated path to 'Data/' with capital D)
d3.csv("data/tvBrandCount.csv", d => {
    return {
        brand: d.brand,
        count: +d.count // Converts string count to a numeric type
    };
}).then(data => {
    // Log formatted array
    console.log("Loaded Data:", data);
    
    // Dataset statistics
    console.log("Total Brands:", data.length);
    console.log("Max Count:", d3.max(data, d => d.count));
    console.log("Min Count:", d3.min(data, d => d.count));
    console.log("Extent (Min & Max):", d3.extent(data, d => d.count));

    // Sort descending (highest count first)
    data.sort((a, b) => b.count - a.count);
    console.log("Sorted Data (Descending):", data);

    // Pass formatted data to draw function
    drawBarChart(data);
}).catch(error => {
    console.error("Error loading CSV file:", error);
});