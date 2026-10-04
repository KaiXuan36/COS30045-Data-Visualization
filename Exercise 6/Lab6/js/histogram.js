const drawHistogram = (data) => {
    // Clear existing visualization content before initial draw
    d3.select("#histogram").selectAll("*").remove();

    // Guard clause to prevent error on empty data arrays
    if (!data || data.length === 0) return;

    // Create SVG container with responsive viewBox settings
    const svg = d3.select("#histogram")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

    // Group element translated by left and top margins
    const innerChart = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Generate bins using global binGenerator
    const bins = binGenerator(data);

    // Extract minimum energy, maximum energy, and maximum bin length
    const minEng = bins[0].x0;
    const maxEng = bins[bins.length - 1].x1;
    const binsMaxLength = d3.max(bins, d => d.length);

    // Configure scale domains and ranges
    xScale.domain([minEng, maxEng]).range([0, innerWidth]);
    yScale.domain([0, binsMaxLength]).range([innerHeight, 0]).nice();

    // Bind bin data to SVG rectangle elements
    innerChart.selectAll("rect")
        .data(bins)
        .join("rect")
        .attr("x", d => xScale(d.x0))                                      // Left horizontal position
        .attr("y", d => yScale(d.length))                                  // Top vertical position
        .attr("width", d => Math.max(0, xScale(d.x1) - xScale(d.x0) - 1))  // Width of bin with 1px gap
        .attr("height", d => innerHeight - yScale(d.length))               // Height of bar based on count
        .attr("fill", barColor)                                            // Fill color of bar
        .attr("stroke", bodyBackgroundColor)                               // Border color
        .attr("stroke-width", 1);

    // Create X and Y axis generators
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // Append X axis group at bottom of chart space
    innerChart.append("g")
        .attr("class", "axis x-axis")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(xAxis);

    // Append Y axis group at left of chart space
    innerChart.append("g")
        .attr("class", "axis y-axis")
        .call(yAxis);

    // Add X axis descriptive label
    svg.append("text")
        .attr("class", "axis-label")
        .attr("x", width - margin.right)
        .attr("y", height - 10)
        .attr("text-anchor", "end")
        .text("Labeled Energy Consumption (kWh/year)");

    // Add Y axis descriptive label
    svg.append("text")
        .attr("class", "axis-label")
        .attr("x", margin.left)
        .attr("y", margin.top - 15)
        .attr("text-anchor", "start")
        .text("Frequency");
};