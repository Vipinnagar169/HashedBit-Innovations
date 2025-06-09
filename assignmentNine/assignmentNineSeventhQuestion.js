// Q7: Write a function that takes an object with width and height and returns the area of a rectangle (width * height).

function getArea(rectangle) {
  return rectangle.width * rectangle.height;
}

console.log("Rectangle area:", getArea({ width: 6, height: 7 }));
