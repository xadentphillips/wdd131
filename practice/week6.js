let grades = ['A', 'B', 'A', 'C'];
let point;
let gpaPoints = grades.map(function (grade) {
    switch (grade) {
        case 'A':
            point = 4 ;
            return point;
        break;
        case 'B':
            point = 3 ;
            return point;
        break;
        case 'C':
            point = 2 ;
            return point;
        break;
        case 'D':
            point = 1 ;
            return point;
        break;
        case 'F':
            point = 0 ;
            return point;
        break;
    
        default:
            alert('not a valid grade');
        break;
    }
})
let totalPoint = gpaPoints.reduce(getTotal);

function getTotal(total, item){
    return total + item;
}
console.log(totalPoint);
console.log(totalPoint/gpaPoints.length);


let fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

let shortFruit = fruit.filter((item)=> item.length < 6);
console.log(shortFruit);
shortFruit.forEach((item)=> console.log(item));