console.log('app is loading ...');
const axios = require('axios')

async function getInfo(id){
    const response  = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.data;
}

async function showInfo(){
    const promiseRes1 = getInfo(1);
    const promiseRes2 = getInfo(2);

    let res = await Promise.all([promiseRes1,promiseRes2])
    console.log(res);
}


showInfo();

