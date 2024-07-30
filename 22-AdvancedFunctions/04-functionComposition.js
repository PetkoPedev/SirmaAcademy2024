const double = (number) => number * 2;

const square = (number) => number * number;


const composeArrow = (double, square) => square(double(number));

