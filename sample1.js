console.log('app is loading ...');
const axios = require('axios')

async function getInfo(){
    const response  = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
}

async function showInfo(){
    const res =  await getInfo();
    console.log(res);
}

const res = showInfo();

console.log(res);