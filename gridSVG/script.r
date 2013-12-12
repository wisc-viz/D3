require(ggplot2)
require(rjson)
require(gridSVG)

data(cars)
p1 = ggplot(cars) + aes(speed,dist) + geom_point() + coord_cartesian(xlim=c(0,30), ylim=c(0,125))
print(p1)
grid.export("cars.svg", addClasses=TRUE)

#write the data for the plot:
jj = rjson::toJSON(apply(p1$data, MARGIN=1, FUN=function(x) {return(list(x))}))
sink("cars.json")
cat(jj)
sink()


data(longley)
p2 = ggplot(longley) + aes(Population,GNP) + geom_point()
print(p2)
grid.export("gnp.svg", addClasses=TRUE)

#write the data for the plot:
jj = rjson::toJSON(apply(p2$data, MARGIN=1, FUN=function(x) {return(list(x))}))
sink("gnp.json")
cat(jj)
sink()