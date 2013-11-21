pip = function (point, poly, xind, yind) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    // (hat-tip: https://github.com/substack/point-in-polygon/blob/master/index.js)
    
    xind = typeof xind !== 'undefined' ? xind : 'x';
    yind = typeof yind !== 'undefined' ? yind : 'y';
    var x = parseFloat(point[xind]), y = parseFloat(point[yind]);
    var inside = false;
    
    for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        var xi = poly[i][0], yi = poly[i][1];
        var xj = poly[j][0], yj = poly[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }    
    return inside;
};