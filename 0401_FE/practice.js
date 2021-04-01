const makeOrder = (orderNum, orderId, name, address) => ({orderNum, orderId, name, address})

const order = makeOrder(1, 'efubFront', '이펍', '서울특별시 서대문구 이화여대길 52');
for (let key in order){
    console.log(`${key}: ${order[key]}`);
}

const array = [1, 2, 3, 4, 5];
const newArray = array.map(num => num * 3);

newArray.forEach(num => {
    if (num % 2 === 0)
        console.log(num);
})