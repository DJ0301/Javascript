//exporting modules

const PI = Math.PI;
function circleArea(radiusLength)
{
  this._radiusLength = radiusLength;
  return PI*radiusLength*radiusLength ;
}
function squareArea(sideLength)
{
  this._sideLength = sideLength;
  return sideLength*sideLength;
}
module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;
// Define and export circleArea() and squareArea() below
