## Making a basic D3 map
In our first foray into the world of D3, the group worked together to follow [Mike Bostock's D3 mapping tutorial](http://bost.ocks.org/mike/map/). As we are "leser cartographers", we took Mike's advice at the point where he indicated that those like us would call it a day and grab a beer.

Here's our walthrough of the walkthrough:

### Why use D3?
D3 is a javascript library for drawing svg pictures. It's key benefit is the ability to quickly connect data to drawings for display on the web, including interactive display. This is our first foray into D3, so we're figuring out some basics.


### Installing software
This took up most of our time. Completing the tutorial requires two key pieces of software: the [Geospatial Data Abstraction Library (GDAL)](http://www.gdal.org), and [topojson](http://github.com/mbostock/topojson).

The GDAL is used to translate from ESRI shapefiles (like you'd use in any GIS program) to GeoJSON, which is a compact text-based representation of shapes.

Then, topojson translates the GeoJSON into topojson data, which is an even more compact text-based representaton of shapes, and is the format that we'll eventually send to the browser for drawing.

Everyone who showed up with their laptop and did this tutorial was using a Mac so I don't know how much changes when you want to do this on a Windows machine instead.

##### Installing topojson
This was the easy part because topojson is available as a package for [node.js](http://nodejs.org). Simply go to the node.js website and install node. Then open a terminal window and run the command `npm install -g topojson`.

##### Installing the GDAL
This was more complicated. The tutorial tells you to use the [homebrew](http://brew.sh) package manager (specifically, `brew install gdal`), and that worked for 2/3 of us. The rest struggled with the kind of nonsense you often see when trying to build software from source.

That's when we learned that Mac users have a nice shortcut: [a packaged installer for the GDAL](http://kyngchaos.com/software/frameworks) - scroll down to find the link for "GDAL complete".


### Getting the shapefiles
The tools we've installed will translate from ESRI shapefiles to topojson, which we'll eventually be slinging around the web. But first we need those ESRI shapefiles. The tutorial centers on the country-boundary shapefile from [Natural Earth](http://naturalearthdata.com). The direct download of the shapefile is [here](http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/ne_10m_admin_0_map_subunits.zip) (download the file and then unzip it).

### Translating the shapefiles
Now we use our new tools to translate the ESRI shapefiles into topojson.


