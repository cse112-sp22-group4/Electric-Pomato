# May 25th 2021, Charting Library ADR

Resources to get started: 
- [Chart.js](https://www.chartjs.org/)
- [FrappeCharts](https://frappe.io/charts)
- [Chartist.js](https://gionkunz.github.io/chartist-js/)
## Status: pending

## Deciders: Alan

## Context and Problem Statement

In his review of our web app, Professor Powell noted that the use of ZingChart was too overkill for our purposes. A new, more lightweight charting library was needed. 

## Decision Drivers
The new charting library should be:
- Lightweight 
- Easy to implement
- Aethestically pleasing 
- Have most, if not all the features used by previous ZingChart implementation

## Decision Outcome
1. There were three libraries considered: Chart.js, FrappeCharts, and Chartist.js. 
  - Lightweight
    - All three libraries were considered simpler and more lightweight than ZingChart. 
  - Easy to implement 
    - All three libraries had a relatively simple integration process
      - Chartist.js seemed more troublesome to implement, requiring more imports for the css/js files
    - Chart.js' API was easy to work for most of our customization needs
      - However, does not easily integrate with our scss variables, need to read style attributes manually through JS as a workaround
    - FrappeCharts' API was more limited in customization, but has its HTML elements available for customization through CSS
      - More troublesome since working with FrappeCharts through CSS seems like a workaround and not an intended feature by the devs
    - Chartist.js' was designed to be customized through CSS, so would be an easier experience
    - Chart.js and FrappeCharts' documentation was more complete than Chartist.js 
  - Aesthetically pleasing 
    - Chart.js looked the most aesthetically pleasing and closest to the previous implentation
      - Slightly more work required to make font sizes responsive to different viewport sizes
  - Have most, if not all the features used by previous ZingChart implementation
    - Chart.js and FrappeCharts had all the features we needed e.g. tooltips, legend
    - Chartist.js needed plugins for tooltips and legend. The plugin for tooltips was also missing touchscreen support. 
2. In the end, we decided to use Chart.js as our replacement library. Chart.js had all the features we needed and its appearance was the best and closest to the previous ZingChart implementation. The documentation for Chart.js is also very thorough with lots of examples/starter code and would be easy to pick up. While it would be more troublesome to integrate our scss variables with Chart.js using the JS workaround, we think that this effort is worth it for the features/appearance, which are harder to find workarounds for. 
