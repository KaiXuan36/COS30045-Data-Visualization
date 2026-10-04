// INTERACTION & TOOLTIP FUNCTIONS (EXERCISES 6.2 & 6.4)

// Master function to setup filters and handle user interactions (Exercise 6.2)
const populateFilters = (data) => {

    // STAGE 1: BUILD SCREEN TYPE FILTER BUTTONS
    d3.select("#filters_screen")
        .selectAll(".filter")
        .data(filters_screen)
        .join("button")
            .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
            .text(d => d.label)
            .on("click", (e, d) => {
                if (!d.isActive) {
                    filters_screen.forEach(filter => {
                        filter.isActive = (d.id === filter.id);
                    });

                    d3.selectAll("#filters_screen .filter")
                        .classed("active", filter => filter.id === d.id);

                    updateHistogram(d.id, data);
                }
            });

    // EXTENSION: BUILD SCREEN SIZE FILTER BUTTONS (OPTIONAL)
    if (d3.select("#filters_size").node()) {
        d3.select("#filters_size")
            .selectAll(".filter")
            .data(filters_size)
            .join("button")
                .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
                .text(d => d.label)
                .on("click", (e, d) => {
                    if (!d.isActive) {
                        filters_size.forEach(filter => {
                            filter.isActive = (d.id === filter.id);
                        });

                        d3.selectAll("#filters_size .filter")
                            .classed("active", filter => filter.id === d.id);

                        updateHistogramBySize(d.id, data);
                    }
                });
    }

    // STAGE 2: UPDATE HISTOGRAM FUNCTION
    const updateHistogram = (filterId, data) => {
        const updatedData = filterId === "all"
            ? data
            : data.filter(tv => tv.screenTech === filterId);

        const updatedBins = binGenerator(updatedData);

        d3.selectAll("#histogram rect")
            .data(updatedBins)
            .transition()
            .duration(500)
            .ease(d3.easeCubicInOut)
            .attr("y", d => yScale(d.length))
            .attr("height", d => innerHeight - yScale(d.length));
    };

    const updateHistogramBySize = (sizeId, data) => {
        const updatedData = sizeId === "all"
            ? data
            : data.filter(tv => tv.screenSize === +sizeId);

        const updatedBins = binGenerator(updatedData);

        d3.selectAll("#histogram rect")
            .data(updatedBins)
            .transition()
            .duration(500)
            .ease(d3.easeCubicInOut)
            .attr("y", d => yScale(d.length))
            .attr("height", d => innerHeight - yScale(d.length));
    };
};

// TOOLTIP CREATION FUNCTION (EXERCISE 6.4)

const createTooltip = (data) => {

    // Append tooltip group element to scatterplot's innerChartS
    const tooltip = innerChartS
        .append("g")
        .attr("class", "tooltip")
        .style("opacity", 0); // Hide initially

    // Append background rectangle
    tooltip
        .append("rect")
        .attr("width", tooltipWidth)
        .attr("height", tooltipHeight)
        .attr("rx", 3)
        .attr("ry", 3)
        .attr("fill", barColor)
        .attr("fill-opacity", 0.75);

    // Append text element
    tooltip
        .append("text")
        .text("NA")
        .attr("x", tooltipWidth / 2)
        .attr("y", tooltipHeight / 2 + 2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "white")
        .style("font-weight", 900);
};

// MOUSE EVENT HANDLERS (EXERCISE 6.4)

const handleMouseEvents = () => {

    // Select all scatterplot data circles
    innerChartS.selectAll("circle")
        .on("mouseenter", (e, d) => {
            console.log("Mouse entered circle", d);

            // 1. Update text inside tooltip with screen size value
            d3.select(".tooltip text")
                .text(d.screenSize);

            // 2. Extract position coordinates from hovered circle
            const cx = e.target.getAttribute("cx");
            const cy = e.target.getAttribute("cy");

            // 3. Position tooltip above circle and animate appearance
            d3.select(".tooltip")
                .attr("transform", `translate(${cx - 0.5 * tooltipWidth}, ${cy - 1.5 * tooltipHeight})`)
                .transition()
                .duration(200)
                .style("opacity", 1);
        })
        .on("mouseleave", (e, d) => {
            console.log("Mouse left circle", d);

            // 4. Hide tooltip and move away to prevent interference
            d3.select(".tooltip")
                .style("opacity", 0)
                .attr("transform", `translate(0, 500)`);
        });
};