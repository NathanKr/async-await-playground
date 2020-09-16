console.log('app is loading ...');
const axios = require('axios')

async function getInfo(){
    const response  = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response1.data;
}

async function showInfo(){
    try {
        const res =  await getInfo();
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}


showInfo();
console.log('after showInfo');

