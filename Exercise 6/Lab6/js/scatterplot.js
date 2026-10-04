const drawScatterplot = (data) => {

    // Clear existing content if re-drawn
    d3.select("#scatterplot").selectAll("*").remove();

    // Set dimensions and margins of chart area
    const svg = d3.select("#scatterplot")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    // Create inner chart group with margins
    innerChartS = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Calculate maximum values for scale domains
    const maxStar = d3.max(data, d => d.star) || 8;
    const maxEnergy = d3.max(data, d => d.energyConsumption) || 2800;

    // Set up X and Y scales
    xScaleS
        .domain([0, maxStar])
        .range([0, innerWidth])
        .nice();

    yScaleS
        .domain([0, maxEnergy])
        .range([innerHeight, 0])
        .nice();

    // Set up color scale for screen technology types
    colorScale
        .domain(data.map(d => d.screenTech))
        .range(d3.schemeCategory10);

    // Draw data points as circles
    innerChartS.selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => xScaleS(d.star))
        .attr("cy", d => yScaleS(d.energyConsumption))
        .attr("r", 4)
        .attr("fill", d => colorScale(d.screenTech))
        .attr("opacity", 0.5);

    // Add bottom X-axis
    const xAxis = d3.axisBottom(xScaleS);
    innerChartS.append("g")
        .attr("class", "axis x-axis")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(xAxis);

    // Add left Y-axis
    const yAxis = d3.axisLeft(yScaleS);
    innerChartS.append("g")
        .attr("class", "axis y-axis")
        .call(yAxis);

    // X-axis label
    svg.append("text")
        .attr("class", "axis-label")
        .attr("x", width - margin.right)
        .attr("y", height - 10)
        .attr("text-anchor", "end")
        .text("Star Rating");

    // Y-axis label
    svg.append("text")
        .attr("class", "axis-label")
        .attr("x", margin.left)
        .attr("y", margin.top - 15)
        .attr("text-anchor", "start")
        .text("Labeled Energy Consumption (kWh/year)");

    // Add legend
    const legend = svg
        .append("g")
        .attr("transform", `translate(${width - 100}, ${margin.top})`);

    colorScale.domain().forEach((screenTech, i) => {
        const legendRow = legend
            .append("g")
            .attr("transform", `translate(0, ${i * 20})`);

        legendRow.append("rect")
            .attr("width", 10)
            .attr("height", 10)
            .attr("fill", colorScale(screenTech));

        legendRow.append("text")
            .attr("x", 20)
            .attr("y", 10)
            .attr("text-anchor", "start")
            .style("alignment-baseline", "middle")
            .text(screenTech);
    });
};