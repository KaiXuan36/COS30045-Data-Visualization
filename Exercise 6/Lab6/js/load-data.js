// Fetch CSV dataset located inside the Lab6/data/ directory
d3.csv("data/Ex6_TVdata_withStar.csv", d => {

    // Safely match varying column header names across datasets
    const rawEnergy = d["Labelled energy consumption (kWh/year)"] || 
                      d["Labelled energy consumption"] || 
                      d["energyConsumption"] || 
                      d["Energy_Consumption"] || 
                      d["Energy Consumption"];

    const rawSize = d["Screen size (inches)"] || 
                    d["screenSize"] || 
                    d["Screen_Size"] || 
                    d["Screen Size"];

    const rawStar = d["Star rating"] || 
                    d["star"] || 
                    d["Star_Rating"] || 
                    d["Star"];

    return {
        brand: d.Brand || d.brand,
        model: d.Model || d.model,
        screenSize: +rawSize,
        screenTech: d["Screen technology"] || d.screenTech || d.Screen_Tech,
        energyConsumption: +rawEnergy,
        star: +rawStar
    };
}).then(data => {
    // Filter out entries with missing or invalid numeric values
    const validData = data.filter(d => !isNaN(d.energyConsumption) && d.energyConsumption > 0 && !isNaN(d.star));

    console.log("Loaded TV Data:", validData);

    // Render static charts and UI controls
    drawHistogram(validData);    // Exercise 6.1
    populateFilters(validData);  // Exercise 6.2
    drawScatterplot(validData);  // Exercise 6.3

    // Activate interactive tooltips (Exercise 6.4)
    createTooltip(validData);
    handleMouseEvents();

}).catch(error => {
    console.error("Error loading CSV dataset:", error);
});