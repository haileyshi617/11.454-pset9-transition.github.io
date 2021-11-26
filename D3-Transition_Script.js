// Width and height of the SVG object
let w = 350;
let h = 175;

//Make an SVG Container
const svgContainer = d3
  .select('div#main')
  .append('svg')
  .attr('width', 400)
  .attr('height', 200)
  .style('border-color', 'black')
  .style('border-style', 'solid')
  .style('border-width', '1px');

// Draw the Rectangle
const rectangle = svgContainer
  .append('rect')
  .attr('x', 50)
  .attr('y', 50)
  .attr('width', 50)
  .attr('height', 50);

// Transition 01 - Position
// Set up the reset button to move it back to 50,50
d3.select('#reset').on('click', function () {
  rectangle.transition().attr('x', 50).attr('y', 50);
});
d3.select('#start').on('click', function () {
  rectangle.transition(); // ALL OF OUR TRANSITIONS WILL GO HERE!
});

d3.select('#start').on('click', function () {
  rectangle.transition().attr('x', 250); // New Position
});
d3.select('#reset').on('click', function () {
  rectangle.transition().attr('x', 50); // Old Position
});

// Transition 02 - opacity
d3.select('#start2').on('click', function () {
  rectangle.transition().attr('x', 250).attr('opacity', 0.5);
});
d3.select('#reset2').on('click', function () {
  rectangle
    .transition()
    .attr('x', 50) //old position
    .attr('y', 50)
    .attr('opacity', 1);
});

// Transition 03 - color
d3.select('#start3').on('click', function () {
  rectangle
    .transition()
    .attr('x', 250)
    .attr('opacity', 0.5)
    .attr('fill', 'blue'); // ALL OF OUR TRANSITIONS WILL GO HERE!
});
d3.select('#reset3').on('click', function () {
  rectangle
    .transition()
    .attr('x', 50) //old position
    .attr('y', 50)
    .attr('opacity', 1)
    .attr('fill', 'green');
});

// Transition 04 - ease
d3.select('#start4').on('click', function () {
  rectangle
    .transition()
    .attr('fill', 'red') // New Color (Hex, RGB, or Web Safe)
    .attr('opacity', 0.5) // New Opacity
    .attr('width', 100) // New Width
    .attr('height', 100) // New Height
    .attr('x', 250)
    .delay(100); // New Position
});
d3.select('#reset4').on('click', function () {
  rectangle
    .transition()
    .attr('fill', 'black') // New Color (Hex, RGB, or Web Safe)
    .attr('opacity', 1) // New Opacity
    .attr('width', 50) // New Width
    .attr('height', 50) // New Height
    .attr('x', 50); // New Position
});

// Transition 05 - duration
d3.select('#start5').on('click', function () {
  rectangle
    .transition()
    .attr('x', 250) // New Position
    .duration(2500); // Set Duration of 2500ms (2.5 seconds)
});
d3.select('#reset5').on('click', function () {
  rectangle
    .transition()
    .attr('x', 50) // New Position
    .duration(2500); // Set Duration of 2500ms (2.5 seconds)
});

// Transition 06 - easing
d3.select('#start6').on('click', function () {
  rectangle
    .transition()
    .attr('x', 250) // New Position
    .ease(d3.easeBounce); // Use the Bounce Transition Ease
});
d3.select('#reset6').on('click', function () {
  rectangle
    .transition()
    .attr('x', 50) // New Position
    .ease(d3.easeBounce); // Use the Bounce Transition Ease
});

// Transition 07 - double
d3.select('#start7').on('click', function () {
  rectangle
    .transition()
    .attr('x', 250)
    .attr('width', 100)
    .attr('height', 100)
    .attr('opacity', 0.5)
    .attr('fill', 'red')
    .delay(500)
    .duration(2500)
    .ease(d3.easeBounce)
    .on('end', function () {
      // on end of transition...
      d3.select(this)
        .transition() // second transition
        .attr('x', 150) // second x
        .attr('width', 75) // second width
        .attr('height', 75) // second height
        .attr('opacity', 0.75) // second opacity
        .attr('fill', 'blue') // second color
        .delay(500) // second delay
        .duration(2500) // second time
        .ease(d3.easeBounce); // second ease
    });
});
d3.select('#reset7').on('click', function () {
  rectangle.transition().attr('x', 50).attr('y', 50); // New Position
});
