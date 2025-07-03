let array = [];

for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
        let c = Math.sqrt((a * a) + (b * b));
        array.push([a, b, c]);           
    }
}

alert("Your array is: " + JSON.stringify(array));
