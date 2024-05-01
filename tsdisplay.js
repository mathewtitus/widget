// Assuming timeSeriesData is your data array
let timeSeriesData = [{time: 1, value: 10}, {time: 2, value: 15}, {time: 3, value: 7}];

// Set the dimensions and margins of the graph
let margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 620 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// Append the svg object to the body of the page
let svg = d3.select("#chart")
  .append("svg")
    .attr("width", width - margin.left - margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Add X axis
let x = d3.scaleLinear()
  .domain([0, d3.max(timeSeriesData, function(d) { return +d.time; })])
  .range([ 0, width ]);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add Y axis
let y = d3.scaleLinear()
  .domain([0, d3.max(timeSeriesData, function(d) { return +d.value; })])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Add the line
svg.append("path")
  .datum(timeSeriesData)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 1.5)
  .attr("d", d3.line()
    .x(function(d) { return x(d.time) })
    .y(function(d) { return y(d.value) })
  );
