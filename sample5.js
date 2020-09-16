console.log('app is loading ...');
async function f(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            throw 'xxx'
            resolve('time has expired');
        },1000)
    })
}

async function run(){
    try {
        const res = await f();
    console.log(res);
    } catch (err) {
        console.error(err);
    }
}

run();