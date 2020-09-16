console.log('app is loading ...');

async function getArray(){
    return [3,5,2,11];
}

console.log(getArray());

async function showArray(){
    const res = await getArray();
    console.log(res);
}

showArray()