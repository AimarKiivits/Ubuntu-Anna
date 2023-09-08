const numbers = [18, 69, 420, 4, 2];
const numbers2 = [];

for ( let i = 0; i < 5; i++) {
    let randomvalue = Math.ceil(Math.random() * 100);
    console.log(randomvalue);
    numbers2.push(randomvalue);
}

numbers2.forEach((number) => {
    console.log(number)
});

numbers2.sort((x,y) => {
    return x - y;
});

console.log(numbers2);