require(ggplot2)
require(rjson)
require(gridSVG)

data(cars)

p1 = ggplot(cars) + aes(speed,dist) + geom_point()
print(p1)
grid.export("cars.svg", addClasses=TRUE)

data(longley)
p2 = ggplot(longley) + aes(Population,GNP) + geom_point()
print(p2)
grid.export("gnp.svg", addClasses=TRUE)
