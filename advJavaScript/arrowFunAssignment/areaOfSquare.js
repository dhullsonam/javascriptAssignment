// 15 . input => x1,y1,x2,y2; return=>area of square

let areaOfSquare = (x1, y1, x2, y2) => {
    let w = (x2 - x1);
    let h = (y2 - y1);
    if ( (w * h) < 0)
        return  (w * h)* -1;
    else
        return (w * h);
}

console.log(areaOfSquare(4, 8, 2, 2));
console.log(areaOfSquare(4, 8, 2, 12));
